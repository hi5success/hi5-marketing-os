# Hi5 Setup — Generic Industry Flow

## Purpose
Capture the full identity and tools profile for any industry not yet covered by a dedicated industry file. Same structure as real estate but with universal language.

## Rules
- One question at a time
- Multiple choice where provided
- Store every answer before moving on

---

## QUESTION FLOW

**Q1 — Name**
> "What is your full name?"
Store: PROFILE.name

**Q2 — Brand Name**
> "What is your business or brand name? If you operate under your personal name just say that."
Store: PROFILE.business_name

**Q3 — Role**
> "How do you operate your business?"
>
> A) Solo — I run everything myself
> B) Partner/Spouse team — we run it together
> C) Part of a larger organization
> D) I lead a team
> E) I own the company/agency

Store: PROFILE.role

**Q4 — Niche**
> "What is your specific niche or area of focus within [their industry]?"
Store: PROFILE.niche

**Q5 — Market**
> "Do you serve clients locally, regionally, nationally, or fully online?"
Store: PROFILE.market_reach

**Q6 — Location**
> "What city or area are you based in?"
Store: PROFILE.location

**Q7 — Experience**
> "How many years have you been in business?"
Store: PROFILE.years_in_business

**Q8 — Languages**
> "Do you speak any languages other than English?"
>
> A) No — English only
> B) Yes — (ask which)

Store: PROFILE.languages

**Q9 — Website**
> "Do you have a website?"
>
> A) Yes — drop the URL
> B) No — not yet

Store: PROFILE.website

**Q10 — CRM**
> "What CRM or tool do you use to manage your contacts and clients?"
>
> A) GoHighLevel
> B) HubSpot
> C) Salesforce
> D) Spreadsheet or manual
> E) No CRM yet
> F) Other — (ask which)

Store: PROFILE.crm

**Q11 — CRM Usage**
> "How are you currently using it?"
>
> A) Barely using it
> B) Basic contact management
> C) Automations and pipelines
> D) Full potential

Store: PROFILE.crm_usage

**Q12 — Calendar Software**
> "Do you use any scheduling software?"
>
> A) Calendly
> B) GHL Calendar
> C) Google Calendar
> D) Other
> E) No — I manage manually

Store: PROFILE.calendar_software

**Q13 — Social Platforms**
> "What social platforms are you active on? Drop your links."
>
> A) YouTube
> B) Instagram
> C) Facebook
> D) TikTok
> E) LinkedIn
> F) Email list

Store: PROFILE.social_platforms (with URLs)

**Q14 — YouTube**
> "Do you have a YouTube channel?"
>
> A) Yes — drop the URL
> B) Interested but not started
> C) Not planning to

Store: PROFILE.youtube_url

**Q15 — Branding**
> "Where does your branding stand?"
>
> A) Fully branded and consistent
> B) Logo only — inconsistent
> C) Needs a refresh
> D) Starting from scratch

Store: PROFILE.brand_status

**Q16 — Brand Color**
> "What is your primary brand color? Hex code if you know it, or just describe the color."
Store: PROFILE.brand_color

**Q17 — Brand Font**
> "Do you have a primary font? If not just say so."
Store: PROFILE.brand_font

**Q18 — Branding Help**
> "If you ever need help with brand identity — logo, colors, fonts, full brand guide — our team at Hi5 Biz Solutions handles this across multiple industries. Head to the Hi5 Success community and drop a message in the services channel for details on packages and pricing.
>
> Want me to note this in your profile?"
>
> A) Yes please
> B) No thanks

Store: PROFILE.branding_interest

---

## AFTER ALL QUESTIONS

→ Trigger workspace build

Wrap up same as real-estate.md but with generic language.

Next step prompt:
> "Run /hi5-self next so I can learn how you think and communicate. Everything we build together — your business plan, your content, your emails — will be tailored to your personality and goals."
