---
name: hi5-email
description: Builds email drip sequences and nurture campaigns tailored to the member's industry, niche, and brand voice. Reads from Master Profile and behavioral style. Triggers when the user runs /hi5-email, says "write an email sequence", "build a drip campaign", "nurture emails", or "email campaign".
---

# Hi5 Email — Email Sequence Builder

## Purpose
Build email sequences that sound like the member, speak directly to their audience, and move leads toward a decision. Not generic templates — personalized campaigns built on their Master Profile.

## Core Rules
- Read Master Profile first — never ask for info already captured
- Read behavioral style from hi5-self to match tone
- One question at a time
- Real estate agents get real estate specific sequences
- Save all sequences to Marketing Hub in Notion

---

## OPENING

Read from Master Profile:
- PROFILE.name
- PROFILE.industry
- PROFILE.niche
- PROFILE.primary_market
- PROFILE.behavioral_style
- PROFILE.crm

> "Let's build an email sequence that sounds like you and converts. I already know your market is [market] and you work with [niche]. A few quick questions and I will write the whole thing."

---

## SEQUENCE SELECTION

> "What type of email sequence do you need?"
>
> A) New lead nurture — someone just entered my database
> B) Buyer nurture — leads not ready to buy yet
> C) Seller nurture — homeowners thinking about selling
> D) Past client / sphere — staying top of mind
> E) Post-close follow up — after the transaction closes
> F) Open house follow up — leads from an open house
> G) Something else — I will describe it

---

## SEQUENCE DETAILS

**Q1 — Length**
> "How many emails in this sequence?"
>
> A) 3 emails — quick follow up series
> B) 5 emails — standard nurture
> C) 7 emails — full campaign
> D) 10+ emails — long term nurture

**Q2 — Timing**
> "How should the emails be spaced?"
>
> A) Daily for the first week
> B) Every 2-3 days
> C) Weekly
> D) Mix — frequent at first then taper off

**Q3 — Goal**
> "What is the goal of this sequence?"
>
> A) Book a call or consultation
> B) Get them to a showing or open house
> C) Stay top of mind until they are ready
> D) Get a referral or review

---

## OUTPUT

Generate the complete sequence. Each email includes:
- Subject line (primary + A/B alternative)
- Preview text
- Full email body
- CTA
- Suggested send timing

Tone tailored to behavioral style:
- High D → short, direct, results-focused
- High I → warm, story-driven, energetic
- High S → relationship-focused, reassuring, consistent
- High C → informative, detailed, credibility-forward

Real estate specific content by sequence type:
- New lead → market insight + value offer + consultation CTA
- Buyer nurture → market education + listings preview + readiness tips
- Seller nurture → market data + home value + success stories
- Sphere → personal touch + market update + referral ask
- Post close → check in + review request + referral program
- Open house → follow up + similar listings + consultation offer

---

## STORAGE

Save complete sequence to Notion Marketing Hub.

> "Your [sequence type] sequence is saved to your Marketing Hub in Notion. Ready to load it into your CRM? If you are using [PROFILE.crm] I can format it exactly the way you need to paste it in."

---

## NEXT STEP

> "Want to pair this with a newsletter so your database hears from you consistently every week or month? Run /hi5-newsletter and I will build it out."
