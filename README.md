# Hi5 Marketing OS

Hi5 Marketing OS is a plugin for Claude that turns your AI assistant into a full YouTube content engine — without any extra tools or subscriptions. Connect it once, and Claude can research trending videos in your niche, generate content ideas tailored to your goals, build your content calendar in Notion, write scripts in your voice, and track your analytics — all from a single conversation. Everything saves directly to your own Notion workspace, so you always own your data.

---

## What You Need Before Starting

- **Claude paid plan** — Claude Pro or higher at claude.ai
- **Node.js 18 or newer** — free download at [nodejs.org](https://nodejs.org)
- **Free Notion account** — at [notion.so](https://www.notion.so)
- **Free YouTube Data API key** — from [Google Cloud Console](https://console.cloud.google.com) (no credit card required for the free tier)

---

## How to Set It Up (5 Steps)

**Step 1 — Download the project**

Click the green "Code" button at the top of this page and choose "Download ZIP." Unzip it somewhere easy to find, like your Desktop.

**Step 2 — Install the required files**

Open Terminal (Mac) or Command Prompt (Windows), navigate to the folder you just unzipped, and run:

```
npm install
```

This downloads everything the plugin needs to run. It takes about 30 seconds.

**Step 3 — Add your Notion token**

- In your Notion account, go to [notion.so/my-integrations](https://www.notion.so/my-integrations) and create a new integration. Copy the token it gives you.
- In the project folder, find the file called `.env.example`. Make a copy of it and rename the copy to `.env`.
- Open `.env` and replace `your-notion-integration-token-here` with the token you just copied.

**Step 4 — Connect to Claude**

In Claude, open your Project settings and add Hi5 Marketing OS as an MCP server. Point it to the `index.js` file inside the folder you downloaded. Claude will detect the plugin automatically the next time you start a conversation in that Project.

**Step 5 — Run the setup interview**

In Claude, type:

> Run the onboarding interview

Claude will walk you through a short setup process — about 5–10 minutes — and save your personal profile to Notion. You only do this once.

---

## What's Included

| Tool | What It Does | Status |
|---|---|---|
| **Setup Interview** | Walks you through setup and builds your personal profile in Notion | ✅ Live |
| **YouTube Research** | Searches YouTube for top-performing videos in your niche | 🔜 Coming Soon |
| **Competitor Research** | Pulls recent videos from competitor channels you choose | 🔜 Coming Soon |
| **Keyword Tracker** | Scores keyword competition and opportunity so you know what to target | 🔜 Coming Soon |
| **Idea Generator** | Turns research results into video ideas tailored to your goals | 🔜 Coming Soon |
| **Content Calendar** | Builds your posting schedule in Notion from your approved ideas | 🔜 Coming Soon |
| **Analytics Pull** | Updates your Notion workspace with views, watch time, and CTR weekly | 🔜 Coming Soon |
| **Trend Monitor** | Watches for trending topics in your niche and surfaces new opportunities | 🔜 Coming Soon |
| **Script Writer** | Writes video scripts or outlines in your voice using your profile | 🔜 Coming Soon |

---

## Questions or Support

Visit us at [hi5success.com](https://hi5success.com) or reach out directly through the site.
