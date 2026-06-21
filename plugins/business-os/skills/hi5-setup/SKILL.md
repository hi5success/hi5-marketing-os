---
name: hi5-setup
description: Master onboarding skill for Hi5 Success OS. Sets up the member's storage, captures their industry, and routes to the correct industry-specific setup flow. Run this first before any other Hi5 skill. Triggers when the user runs /hi5-setup, says "set me up", "get started with Hi5", or "setup my workspace".
---

# Hi5 Success OS — Master Setup

## Purpose
Onboard a new Hi5 Success OS member. Get their storage preference, detect their industry, and hand off to the correct industry file for the full setup flow.

## Core Rules
- Ask ONE question at a time — never combine questions
- Be warm, encouraging, and conversational — not robotic
- Never rush — this is the foundation for everything
- Always explain WHY you are asking before sensitive questions
- Do not proceed to the next step until the current one is confirmed

---

## PHASE 0 — Welcome

> "Welcome to Hi5 Success OS. I'm glad you're here.
>
> Before we dive in I want to make sure everything is set up so Claude can work smarter for you — across every session, every tool, and every platform you use.
>
> Setup takes about 10 minutes. Here's what we'll do:
> 1. Choose where to store your business data
> 2. Tell me about your business
> 3. Build your personalized Hi5 workspace in Notion
> 4. Show you exactly how to use every skill available to you
>
> Let's start with the most important decision first."

---

## PHASE 1 — Storage Setup

Ask:
> "Where would you like to store your Hi5 OS data?
>
> I recommend **Notion** — it's free and it becomes your single source of truth for everything. Your Master Profile, content calendar, business plan, client notes, and tasks all live in one place. Every AI tool, every Claude surface, and every plugin reads from it without you ever having to re-explain who you are or what your business does. Think of it as your business brain that never forgets — one master file that connects every application and AI platform together automatically.
>
> Your options:
> 1. **Notion** ← recommended, free, connects everything
> 2. **Google Drive** ← works well, less structured for AI workflows
> 3. **Local only** ← stores in your Claude Project Instructions, great if you use Claude Code regularly, but won't sync across devices or other AI platforms
>
> Which would you like to use?"

### If Notion selected:
Check if Notion MCP is connected in Cowork.

If NOT connected:
> "Great choice. Before we continue you will need to connect Notion to Cowork. Here is how:
> 1. Click the plug icon in the top right of your Cowork session
> 2. Find Notion in the connectors list
> 3. Click Connect and follow the authorization steps
> 4. Come back and let me know when it is connected"

Wait for confirmation before continuing.

If connected:
> "Perfect — Notion is connected. I will build your workspace there as we go."

Store: STORAGE = notion

### If Google Drive selected:
Check if Google Drive MCP is connected. Walk through connection same as Notion if needed.
Store: STORAGE = google_drive

### If Local selected:
> "No problem — I will store your profile in your Claude Project Instructions so I always have context about your business.
>
> Just know that when you are ready to level up, run /hi5-setup again and I will migrate everything to Notion automatically. It is genuinely a game changer for working with AI — one master file that every tool, every platform, and every Claude session can reference without you ever having to explain yourself again. But local works great for now."

Store: STORAGE = local

---

## PHASE 2 — Industry Detection

Ask:
> "What industry are you in?"

Detect from their answer and route:
- Real estate agent / realtor / broker / agent → load `industries/real-estate.md`
- GHL / GoHighLevel / agency / marketing agency → load `industries/ghl-agency.md`
- Coach / consultant / trainer → load `industries/generic.md`
- Anything else → load `industries/generic.md`

If unclear:
> "Just so I can tailor everything to your business — would you say you are in real estate, a marketing or GHL agency, coaching or consulting, or something else entirely?"

---

## STORAGE REFERENCE
Check STORAGE before saving any output:
- notion → save to Notion using Notion MCP
- google_drive → save as Google Doc using Drive MCP
- local → output as markdown for user to copy into Project Instructions
