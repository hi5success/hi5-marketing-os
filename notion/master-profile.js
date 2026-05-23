import { notion } from "../config/notion.js";

// Section headers as they appear in the pre-templated Master Profile page.
// The write function locates each header block and replaces the paragraph beneath it.
const SECTION_MAP = {
  businessName:         "Business Name",
  whatYouSell:          "What You Sell / Offer",
  whoYouServe:          "Who You Serve",
  affiliateLinks:       "Affiliate Links or Products",
  channelGoal:          "Overall Channel Goal",
  contentModel:         "Content Model Type",
  niche:                "Niche / Industry",
  postingFrequency:     "Posting Frequency",
  weeklyRhythm:         "Weekly Content Rhythm",
  competitorChannelIds: "Competitor Channel IDs",
  contentCategories:    "Content Categories",
  vocabularyStyle:      "Vocabulary Style",
  sentenceRhythm:       "Sentence Length and Rhythm",
  phrasesUsed:          "Phrases Used Constantly",
  phrasesNeverUsed:     "Phrases Never Used",
  energyLevel:          "Energy Level",
  ctaStyle:             "CTA Style",
  outputFormat:         "Output Format",
  scriptDepth:          "Script Depth",
  numberOfOptions:      "Number of Options",
  explanationLevel:     "Explanation Level",
};

function profileToBlocks(profile) {
  const flat = {
    businessName:         profile.businessName,
    whatYouSell:          profile.whatYouSell,
    whoYouServe:          profile.whoYouServe,
    affiliateLinks:       profile.affiliateLinks || "None",
    channelGoal:          profile.channelGoal,
    contentModel:         profile.contentModel,
    niche:                profile.niche,
    postingFrequency:     profile.postingFrequency,
    weeklyRhythm:         profile.weeklyRhythm || "Not specified",
    competitorChannelIds: profile.competitorChannelIds.length > 0
                            ? profile.competitorChannelIds.join("\n")
                            : "None added yet",
    contentCategories:    profile.contentCategories.join(", "),
    vocabularyStyle:      profile.voice.vocabularyStyle,
    sentenceRhythm:       profile.voice.sentenceRhythm,
    phrasesUsed:          profile.voice.phrasesUsed || "Not specified",
    phrasesNeverUsed:     profile.voice.phrasesNeverUsed || "Not specified",
    energyLevel:          profile.voice.energyLevel,
    ctaStyle:             profile.voice.ctaStyle,
    outputFormat:         profile.operatorPreferences.outputFormat,
    scriptDepth:          profile.operatorPreferences.scriptDepth,
    numberOfOptions:      profile.operatorPreferences.numberOfOptions,
    explanationLevel:     profile.operatorPreferences.explanationLevel,
  };

  // Build a flat list of heading_3 + paragraph block pairs
  return Object.entries(SECTION_MAP).flatMap(([key, label]) => [
    {
      object: "block",
      type: "heading_3",
      heading_3: {
        rich_text: [{ type: "text", text: { content: label } }],
      },
    },
    {
      object: "block",
      type: "paragraph",
      paragraph: {
        rich_text: [{ type: "text", text: { content: flat[key] ?? "" } }],
      },
    },
  ]);
}

export async function writeToMasterProfile(pageId, profile) {
  // 1. Clear existing children from the page so we write fresh each time.
  //    Fetch all existing block IDs and delete them.
  let cursor;
  const blockIds = [];

  do {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
      page_size: 100,
    });
    blockIds.push(...response.results.map((b) => b.id));
    cursor = response.has_more ? response.next_cursor : undefined;
  } while (cursor);

  for (const id of blockIds) {
    await notion.blocks.delete({ block_id: id });
  }

  // 2. Append the new profile blocks in order.
  const blocks = profileToBlocks(profile);

  // Notion API accepts max 100 blocks per append call — chunk if needed.
  for (let i = 0; i < blocks.length; i += 100) {
    await notion.blocks.children.append({
      block_id: pageId,
      children: blocks.slice(i, i + 100),
    });
  }
}

export async function readMasterProfile(pageId) {
  const response = await notion.blocks.children.list({
    block_id: pageId,
    page_size: 100,
  });

  // Extract plain text from each paragraph block following a heading_3
  const result = {};
  const blocks = response.results;

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block.type === "heading_3") {
      const label = block.heading_3.rich_text.map((r) => r.plain_text).join("");
      const next = blocks[i + 1];
      if (next && next.type === "paragraph") {
        const value = next.paragraph.rich_text.map((r) => r.plain_text).join("");
        const key = Object.keys(SECTION_MAP).find((k) => SECTION_MAP[k] === label);
        if (key) result[key] = value;
      }
    }
  }

  return result;
}
