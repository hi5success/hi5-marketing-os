---
name: hi5-newsletter
description: Builds a weekly or monthly newsletter for the member's database. Pulls from their content, market, and brand voice to create a consistent touchpoint that keeps them top of mind. Triggers when the user runs /hi5-newsletter, says "write my newsletter", "build a newsletter", or "monthly email".
---

# Hi5 Newsletter — Newsletter Builder

## Purpose
Create a consistent newsletter that keeps the member top of mind with their database. Each issue combines market insight, personal story or content, and a clear CTA — all in their voice.

## Core Rules
- Read Master Profile for market, niche, voice, and platforms
- Match behavioral style for tone
- One question at a time
- Real estate newsletters are local, personal, and market-aware
- Save to Notion Marketing Hub

---

## OPENING

> "A newsletter is one of the most underused tools in real estate. Let's build yours so your database hears from you consistently — in your voice, with value they actually want.
>
> A few quick questions and I will write the whole issue."

---

## NEWSLETTER SETUP (first time only)

If no newsletter template exists in Master Profile:

**Q1 — Frequency**
> "How often do you want to send your newsletter?"
>
> A) Weekly
> B) Bi-weekly
> C) Monthly

**Q2 — Name**
> "Does your newsletter have a name? For example — The [City] Market Report, or [Name]'s Real Estate Insider. If not I will suggest one."
Store: PROFILE.newsletter_name

**Q3 — Primary Audience**
> "Who is your newsletter primarily for?"
>
> A) My full database — buyers, sellers, and past clients
> B) Buyers specifically
> C) Sellers and homeowners
> D) Investors
> E) My sphere — friends, family, referral partners

---

## ISSUE GENERATION

**Q4 — This Issue**
> "What is the main topic or focus for this issue?"
>
> A) Local market update — what is happening with prices and inventory
> B) Home buying or selling tips
> C) A recent success story or client win
> D) Seasonal content — what homeowners should know right now
> E) Something from my YouTube or social content
> F) A personal story or update

**Q5 — Market Data** (if market update selected)
> "Drop any recent market stats you want to include — or I can write it in general terms and you can fill in the numbers."

---

## OUTPUT

Generate a complete newsletter issue:

### Structure:
- Subject line (3 options)
- Preview text
- Header / greeting (personal, first name basis)
- Main story or insight (300-500 words)
- Market snapshot section (3-5 bullet points)
- Feature listing or resource (optional placeholder)
- Personal note from the agent (short, warm, human)
- CTA (one clear action)
- Footer with contact info placeholder

Tone matched to behavioral style and newsletter audience.
Local market references pulled from PROFILE.primary_market.

---

## STORAGE

Save to Notion Marketing Hub with issue number and date.

> "Issue [number] of [newsletter name] is saved to your Marketing Hub. Want to repurpose this into social captions? Run /hi5-social and I will pull 3-4 posts from this issue."
