import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { runOnboardingInterview } from "./tools/onboarding-interview.js";

const server = new McpServer({
  name: "hi5-marketing-os",
  version: "0.1.0",
});

// Tool 0 — Onboarding Interview
// Two-call pattern: mode "start" kicks off the interview, mode "write" commits answers to Notion.
server.tool(
  "onboarding_interview",
  "Walk a new member through setup and write their Master Profile to Notion. " +
    "Call with mode='start' first. Collect all answers conversationally, then call again with mode='write' and the completed answers object.",
  {
    mode: z.enum(["start", "write"]).describe(
      "'start' — returns the interview questions. 'write' — takes completed answers and writes Master Profile to Notion."
    ),
    answers: z
      .object({
        niche: z.string(),
        businessName: z.string(),
        whatYouSell: z.string(),
        whoYouServe: z.string(),
        affiliateLinks: z.string().optional().default(""),
        channelGoal: z.string(),
        contentModel: z.enum(["Lead Magnet", "Recurring Audience", "Hybrid"]),
        postingFrequency: z.string(),
        weeklyRhythm: z.string().optional().default(""),
        competitorChannelIds: z.array(z.string()).optional().default([]),
        contentCategories: z.array(z.string()).optional().default([]),
        vocabularyStyle: z.string(),
        sentenceRhythm: z.string(),
        phrasesUsed: z.string().optional().default(""),
        phrasesNeverUsed: z.string().optional().default(""),
        energyLevel: z.string(),
        ctaStyle: z.string(),
        outputFormat: z.enum(["Bullets", "Prose"]),
        scriptDepth: z.enum(["Outline only", "Full word-for-word script"]),
        numberOfOptions: z.enum(["One strong recommendation", "Multiple choices"]).optional().default("One strong recommendation"),
        explanationLevel: z.enum([
          "Just give me the answer",
          "Explain the reasoning",
        ]),
        notionPageId: z.string().describe("The Master Profile Notion page ID to write into."),
      })
      .optional()
      .describe("Required when mode='write'. Omit when mode='start'."),
  },
  async ({ mode, answers }) => runOnboardingInterview(mode, answers)
);

// Stubs for future tools — registered so the server lists them but they are not yet implemented.
const STUB_TOOLS = [
  ["youtube_research", "Search YouTube for top-performing videos by keyword."],
  ["competitor_pull", "Pull recent and top-performing videos from competitor channels."],
  ["keyword_tracker", "Score keyword competition and opportunity, update Keyword Tracker in Notion."],
  ["idea_generator", "Generate tailored video ideas from research results and push to Notion Idea Bank."],
  ["content_calendar", "Build the Notion Content Calendar from approved ideas."],
  ["analytics_pull", "Pull weekly YouTube analytics and update Published Video Library in Notion."],
  ["trend_monitor", "Monitor trending topics for the member's niche and surface opportunities."],
  ["script_writer", "Write a video script or outline in the member's voice and push to Notion."],
];

for (const [name, description] of STUB_TOOLS) {
  server.tool(name, description + " (Coming soon — not yet implemented.)", {}, async () => ({
    content: [{ type: "text", text: `${name} is not yet implemented. Check back in a future phase.` }],
  }));
}

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Hi5 Marketing OS MCP server running on stdio.");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
