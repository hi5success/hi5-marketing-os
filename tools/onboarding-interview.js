import { writeToMasterProfile } from "../notion/master-profile.js";

// Adaptive category suggestions by niche keyword
const CATEGORY_SUGGESTIONS = {
  "real estate": ["Buyer Tips", "Seller Tips", "Market Update", "Community Highlight", "Agent Attraction"],
  "exp realty": ["Buyer Tips", "Seller Tips", "Market Update", "Agent Attraction", "eXp Content"],
  "ghl": ["GHL Tutorial", "Affiliate Content", "Tool Review", "Case Study", "GHL Update"],
  "gohighlevel": ["GHL Tutorial", "Affiliate Content", "Tool Review", "Case Study", "GHL Update"],
  "cooking": ["Tutorial", "Behind the Scenes", "Trending Topic", "Recipe Breakdown", "Kitchen Tips"],
  "lifestyle": ["Tutorial", "Behind the Scenes", "Trending Topic", "Day in My Life", "Product Review"],
  "content creator": ["Tutorial", "Behind the Scenes", "Trending Topic", "Tool Review", "Growth Tips"],
};

// Adaptive content model suggestion by niche keyword
const MODEL_SUGGESTIONS = {
  "real estate": "Lead Magnet",
  "exp realty": "Lead Magnet",
  "ghl": "Hybrid",
  "gohighlevel": "Hybrid",
  "cooking": "Recurring Audience",
  "lifestyle": "Recurring Audience",
  "content creator": "Recurring Audience",
};

function suggestCategories(niche) {
  const lower = niche.toLowerCase();
  for (const [keyword, categories] of Object.entries(CATEGORY_SUGGESTIONS)) {
    if (lower.includes(keyword)) return categories;
  }
  return ["Tutorial", "Behind the Scenes", "Trending Topic", "Case Study", "Q&A"];
}

function suggestModel(niche) {
  const lower = niche.toLowerCase();
  for (const [keyword, model] of Object.entries(MODEL_SUGGESTIONS)) {
    if (lower.includes(keyword)) return model;
  }
  return "Hybrid";
}

function buildStartResponse() {
  return {
    content: [
      {
        type: "text",
        text: `Welcome to Hi5 Marketing OS setup! 🎉

I'm going to ask you a series of questions to build your Master Profile — the document Claude reads before every tool run so it always knows who you are, what your goals are, and how you like to work.

This takes about 5–10 minutes. Answer each question in your own words. There are no wrong answers.

Let's start:

**Question 1 of 13 — Your niche or industry**
What space are you in? (Examples: real estate, GoHighLevel, fitness, finance, e-commerce, cooking, etc.)

Take your time — your answer here shapes several suggestions later in the interview.`,
      },
    ],
  };
}

async function buildWriteResponse(answers) {
  const suggestedCategories = suggestCategories(answers.niche);
  const suggestedModel = suggestModel(answers.niche);

  // Use member's confirmed categories if provided, otherwise fall back to suggestions
  const finalCategories =
    answers.contentCategories.length > 0
      ? answers.contentCategories
      : suggestedCategories;

  const profile = {
    businessName: answers.businessName,
    whatYouSell: answers.whatYouSell,
    whoYouServe: answers.whoYouServe,
    affiliateLinks: answers.affiliateLinks,
    channelGoal: answers.channelGoal,
    contentModel: answers.contentModel || suggestedModel,
    niche: answers.niche,
    postingFrequency: answers.postingFrequency,
    weeklyRhythm: answers.weeklyRhythm,
    competitorChannelIds: answers.competitorChannelIds,
    contentCategories: finalCategories,
    voice: {
      vocabularyStyle: answers.vocabularyStyle,
      sentenceRhythm: answers.sentenceRhythm,
      phrasesUsed: answers.phrasesUsed,
      phrasesNeverUsed: answers.phrasesNeverUsed,
      energyLevel: answers.energyLevel,
      ctaStyle: answers.ctaStyle,
    },
    operatorPreferences: {
      outputFormat: answers.outputFormat,
      scriptDepth: answers.scriptDepth,
      numberOfOptions: answers.numberOfOptions ?? "One strong recommendation",
      explanationLevel: answers.explanationLevel,
    },
  };

  await writeToMasterProfile(answers.notionPageId, profile);

  return {
    content: [
      {
        type: "text",
        text: `✅ Your Master Profile has been saved to Notion.

Here's what was written:
- **Business:** ${profile.businessName}
- **Niche:** ${profile.niche}
- **Content Model:** ${profile.contentModel}
- **Posting Frequency:** ${profile.postingFrequency}
- **Content Categories:** ${finalCategories.join(", ")}
- **Competitors tracked:** ${profile.competitorChannelIds.length > 0 ? profile.competitorChannelIds.join(", ") : "None added yet"}

**One last step — add your YouTube API key:**

Open your Claude Project settings → Project Instructions, and paste this exactly:

\`YOUTUBE_API_KEY: your-key-here\`

Replace \`your-key-here\` with your actual key from console.cloud.google.com. Once that's done, you're ready to run your first YouTube research session.

If you don't have an API key yet, I can walk you through getting one — just ask.`,
      },
    ],
  };
}

export async function runOnboardingInterview(mode, answers) {
  if (mode === "start") {
    return buildStartResponse();
  }

  if (mode === "write") {
    if (!answers) {
      return {
        content: [
          {
            type: "text",
            text: "No answers provided. Call with mode='start' first, collect all responses, then call again with mode='write' and the completed answers object.",
          },
        ],
      };
    }
    try {
      return await buildWriteResponse(answers);
    } catch (err) {
      return {
        content: [
          {
            type: "text",
            text: `Failed to write Master Profile to Notion: ${err.message}\n\nCheck that your Notion token is set in .env and that the page ID is correct and shared with your integration.`,
          },
        ],
      };
    }
  }
}
