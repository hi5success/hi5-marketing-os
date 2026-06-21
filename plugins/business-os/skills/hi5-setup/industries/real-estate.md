# Hi5 Setup — Real Estate Industry Flow

## Purpose
Capture the full identity and tools profile for a real estate agent, team, or broker. This data populates the Master Profile and is read by every other Hi5 skill.

## Rules
- One question at a time
- Multiple choice where provided — they can always add more detail
- Store every answer to Master Profile before moving to next question

---

## QUESTION FLOW

**Q1 — Name**
> "What is your full name?"
Store: PROFILE.name

**Q2 — Brand Name**
> "What is your business or brand name? If you operate under your personal name just say that."
Store: PROFILE.business_name

**Q3 — Brokerage**
> "What brokerage are you with?"
Store: PROFILE.brokerage

**Q4 — Role**
> "How do you operate your real estate business?"
>
> A) Solo agent — I run everything independently
> B) Spouse/Partner team — we work together as a unit
> C) On a team — I am part of someone else's team
> D) Team Leader — I run my own team
> E) Broker/Owner — I own the brokerage

Store: PROFILE.re_role

Branch follow-ups:
- Spouse/Partner → "Do you both create content together or separately?" + "Is your brand joint or individual?"
- On a team → "Does your team have a brand you operate under or do you build your personal brand alongside it?"
- Team Leader → "How many agents are on your team?" + "Are you still personally producing or focused purely on leading?"
- Broker/Owner → "How many agents are in your office?" + "Are you still actively selling or focused on recruiting and leadership?"

**Q5 — Experience**
> "How many years have you been a licensed real estate agent?"
Store: PROFILE.years_licensed

**Q6 — Market**
> "What city or market do you primarily serve?"
Store: PROFILE.primary_market

**Q7 — Surrounding Areas**
> "Do you serve any surrounding areas, counties, or neighborhoods worth mentioning?"
Store: PROFILE.surrounding_areas

**Q8 — Multi-State**
> "Are you licensed in multiple states or provinces?"
>
> A) No — just one state
> B) Yes — (ask which states)

Store: PROFILE.states_licensed

**Q9 — Languages**
> "Do you speak any languages other than English?"
>
> A) No — English only
> B) Yes — (ask which languages)

Store: PROFILE.languages

**Q10 — Website**
> "Do you have a website?"
>
> A) Yes — drop the URL
> B) No — not yet

Store: PROFILE.website

**Q11 — CRM**
> "What CRM are you using to manage your contacts and leads?"
>
> A) GoHighLevel
> B) Follow Up Boss
> C) KVCore
> D) CINC
> E) Spreadsheet or manual tracking
> F) No CRM yet

Store: PROFILE.crm

**Q12 — CRM Usage**
> "How are you currently using your CRM?"
>
> A) Barely scratching the surface
> B) Basic contact management
> C) Using automations and pipelines
> D) Using it to its full potential

Store: PROFILE.crm_usage

**Q13 — Calendar Software**
> "Do you use any calendar or scheduling software?"
>
> A) Calendly
> B) GHL Calendar
> C) Google Calendar
> D) Other — (ask which)
> E) No — I manage manually

Store: PROFILE.calendar_software

**Q14 — Social Platforms**
> "What social media platforms are you active on? Share your profile links for any you use."
>
> Select all that apply:
> A) YouTube
> B) Instagram
> C) Facebook
> D) TikTok
> E) LinkedIn
> F) Email list

Store: PROFILE.social_platforms (with URLs)

**Q15 — YouTube**
> "Do you have a YouTube channel?"
>
> A) Yes — drop the URL
> B) No, but I am interested in starting one
> C) No and not planning to

Store: PROFILE.youtube_url

**Q16 — Branding**
> "Where does your branding stand right now?"
>
> A) Fully branded — logo, colors, fonts, everything consistent
> B) Logo only — but inconsistent across platforms
> C) Needs a refresh — I have something but it feels outdated
> D) Starting from scratch — I need everything

Store: PROFILE.brand_status

**Q17 — Brand Color**
> "What is your primary brand color? If you know your hex code drop it here, otherwise just describe the color family and we will work with it."
Store: PROFILE.brand_color

**Q18 — Brand Font**
> "Do you have a primary font you use in your marketing? If you are not sure just say so."
Store: PROFILE.brand_font

**Q19 — Branding Help**
> "One last thing on branding — if you ever want professional help with your brand identity (logo, colors, fonts, full brand guide), our team at Hi5 Biz Solutions works specifically with real estate agents on this. Head over to the Hi5 Success community and drop a message in the services channel and we will get you the details on packages and pricing."
>
> "Would you like me to make a note of this in your profile so we follow up with you?"
>
> A) Yes please
> B) No thanks — I have got it covered

Store: PROFILE.branding_interest

---

## AFTER ALL QUESTIONS

> "Perfect — I have everything I need to build your workspace. Give me a moment."

→ Trigger workspace build (back in SKILL.md Phase 3)

Workspace sections to create:
1. 🏠 Dashboard
2. 👤 Master Profile — populated with all captured data
3. 📋 Content Planner database
4. 💼 Business OS page (sub-pages: Business Plan, Quarterly Goals, Business Reviews)
5. 📧 Marketing Hub database
6. 📖 Skill Guide

Dashboard quick start order:
1. Run /hi5-self — learn your personality profile so everything is tailored to you
2. Run /hi5-bizplan — generate your personalized real estate business plan
3. Run /hi5-goals — set your quarterly targets
4. Run /hi5-yt-setup — build your content workspace (if Content OS installed)
5. Run /hi5-email — build your first nurture sequence (if Marketing OS installed)

---

## WRAP UP MESSAGE

> "You are all set, [name]. Here is what was just created:
>
> ✅ Master Profile — saved with your business info
> ✅ Hi5 Workspace — built in [Notion/Google Drive/Project Instructions]
> ✅ Content Planner — ready for your first video ideas
> ✅ Business OS — ready for your business plan
> ✅ Marketing Hub — ready for your first campaign
> ✅ Skill Guide — your reference for every Hi5 skill
>
> **Your next step:** Run /hi5-self so I can learn how you think, communicate, and make decisions. This is what makes everything we create together feel like it was made specifically for you — because it will be.
>
> Ready?"
