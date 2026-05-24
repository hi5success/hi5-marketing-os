---
name: hi5-yt-setup
description: Walk through first-time setup and write your Master Profile to Notion. Run this once before using any other command.
---

# /hi5-yt-setup — First-Time Setup

Do NOT use a form or structured input UI. Ask each question as a plain conversational message and wait for the member's response before asking the next one.

You are running the Hi5 Marketing OS onboarding interview. This is the first
thing a new member does. It takes 5–10 minutes. At the end, their completed
Master Profile is written to Notion and they are ready to run /hi5-yt-research.

## Step 0 — Auto-Setup

Check whether `MASTER_PROFILE_ID` is set in the member's Claude Project Instructions.

**If MASTER_PROFILE_ID IS already set:**
Ask: "Would you like to update your profile or start working on content?" Wait
for their answer before continuing.

**If MASTER_PROFILE_ID is NOT set:**
Say: "I don't see a Notion workspace configured yet — let me set everything up
for you before we start the interview."

Use the Notion MCP to create the following automatically:

**1. Create top-level page**
Create a page at the root of their Notion workspace called "Hi5 Marketing OS".

**2. Create Master Profile sub-page**
Inside "Hi5 Marketing OS", create a page called "Master Profile". Capture its
page ID — this becomes `MASTER_PROFILE_ID`.

**3. Create Content Planner database**
Inside "Hi5 Marketing OS", create a database called "Content Planner" with
these columns:
- Video Title (title)
- Status (status)
- Publish Date (date)
- Record Date (date)
- Edit Due Date (date)
- Content Category (select)
- Content Type (select)
- Deliverable Type (select)
- Production Style (select)
- Goal (select)
- Primary Platform (select)
- Distribution (multi-select)
- Target Keyword (rich_text)
- Source (select)
- Trend Score (select)
- Assigned To (people)
- Asset Folder URL (url)
- Export / Deliverables URL (url)
- YouTube URL (url)
- Thumbnail URL (url)
- Views Total (number)
- Views Last 7 Days (number)
- Click-Through Rate % (number)
- Watch Time Avg % (number)
- Top Traffic Source (rich_text)
- Performance Tier (select)
- Repurpose Status (select)
- Last Analytics Pull (date)

Capture its database ID — this becomes `CONTENT_PLANNER_ID`.

**4. Create Keyword Tracker database**
Inside "Hi5 Marketing OS", create a database called "Keyword Tracker" with
these columns:
- Keyword (title)
- Status (select)
- Google Trends Score (number)
- Trend Direction (select)
- YouTube Video Count (number)
- Avg Views Top 10 (number)
- Competition Level (select)
- Opportunity Score (select)
- Last Updated (date)
- Notes (rich_text)

Capture its database ID — this becomes `KEYWORD_TRACKER_ID`.

Say: "Your Notion workspace is ready. Now let's build your profile."

Then proceed with the Interview Flow below.

## Interview Flow

IMPORTANT: Ask every question as a plain conversational message one at a time. Never use a structured form or elicitation UI. Wait for the member's response before asking the next question.

Ask one question at a time. Wait for the answer before asking the next. Do not
present the full list upfront.

**1. Welcome**
Say: "Welcome to Hi5 Marketing OS! I'm going to ask you about 15 questions to
build your Master Profile — the document I read before every session so I
always know who you are, what your goals are, and how you like to work. This
takes about 5–10 minutes. Let's start."

**2. Niche / industry**
"What space are you in? For example: real estate, GoHighLevel, fitness,
finance, e-commerce, cooking, or something else entirely."

Use their answer to inform category suggestions in step 13.

**3. Business name and what they sell**
"What's the name of your business, and what do you sell or offer?"

**4. Who they serve**
"Who is your target audience — who are you trying to reach with your channel?"

**5. Affiliate links or products** *(skippable)*
"Do you promote any affiliate links or products? If yes, which ones? If not,
just say skip."

**6. Overall channel goal**
"What's the main goal of your YouTube channel? For example: grow affiliate
revenue, drive community signups, attract real estate clients, build brand
awareness."

**7. Content model type**
"How would you describe your content model?
- **Lead Magnet** — your videos attract people who then convert to clients or
  buyers (common for real estate, coaches, service businesses)
- **Recurring Audience** — you build a loyal subscriber base who comes back
  for regular content (common for creators, educators, reviewers)
- **Hybrid** — a mix of both

Which fits you best, or is it somewhere in between?"

**8. Posting frequency**
"How often do you plan to post? For example: once a week, 3x per week, daily."

**8a. Multiple channels**
"Do you run multiple YouTube channels? If yes, how many and what is each one
focused on? Each channel will get its own Master Profile."

If they say yes: complete the full interview once per channel and write a
separate Master Profile page for each.

**9. Recording schedule**
"How do you typically record — do you batch record several videos in one
session, or do you record one video at a time as you go?"

**10. Editing turnaround** *(skippable)*
"How many days does it typically take you to go from recorded to published?
This helps me set accurate Edit Due Dates on your content calendar. If you're
not sure yet, say skip."

**11. Weekly content rhythm** *(skippable)*
"Do you have a weekly rhythm for which type of content you post on which days?
For example: Monday = tutorial, Wednesday = case study, Friday = affiliate
content. If you don't have one yet, say skip."

**12. Competitor channel IDs** *(skippable)*
"Do you want to track any competitor channels? If yes, share up to 5 YouTube
channel IDs. You can find a channel ID by going to the channel page, clicking
About, then More, then Copy Channel ID. If you'd rather skip this for now,
just say skip."

**13. Content categories**
Based on their niche, suggest a starting set:
- Real estate → Buyer Tips, Seller Tips, Market Update, Community Highlight,
  Agent Attraction
- GoHighLevel / GHL → GHL Tutorial, Affiliate Content, Tool Review, Case Study,
  GHL Update
- Lifestyle / cooking / creator → Tutorial, Behind the Scenes, Trending Topic,
  Day in My Life, Q&A
- Other → Tutorial, Behind the Scenes, Trending Topic, Case Study, Q&A

Say: "Based on your niche, here are some content category suggestions:
[list them]. You can keep these, swap any out, or add your own. What would you
like your categories to be?"

**14. Voice card** *(5 quick questions)*
"Just a few quick questions about your communication style — I'll use these to
match your voice when writing content."

- "How would you describe your vocabulary style? Casual and conversational,
  professional and polished, or somewhere in between?"
- "What's your energy level on camera? Calm and measured, high energy, or
  somewhere in between?"
- "How do you like to close your videos — what's your CTA style? Direct and
  assertive, soft and inviting, or conversational like you're talking to a
  friend?"
- "Are there any phrases you say constantly — things that are just very you?"
  *(skippable)*
- "Are there any phrases or words you'd never say — things that would sound
  off-brand for you?" *(skippable)*

**15. Operator preferences** *(6 quick questions)*
"Last section — this tells me how you like to work."

- "When I give you output, do you prefer **bullets** or **prose**?"
- "For scripts: do you want a full word-for-word script, or an outline with
  key points?"
- "When I give recommendations: one strong recommendation, or a few options to
  choose from?"
- "What platforms do you typically distribute your content to? Select all that
  apply: YouTube, Instagram, TikTok, Facebook, LinkedIn, X, Threads, Google
  Business Profile, Podcast. This becomes your default Distribution setting."
- "What type of content do you primarily create? Long Form video, Short Form,
  Blog, Podcast, or a mix?" *(sets default Deliverable Type)*
- "What is your primary platform — the main place you build your audience?"
  *(sets Primary Platform)*

## After Collecting All Answers

Say: "I have everything I need. Here's a summary of what I'm about to write
to your Notion Master Profile:" then display a clean summary of all their
answers.

Ask: "Does everything look right? Say yes to save, or tell me what to change."

Once confirmed, use the Notion MCP to write all sections to their Master Profile
page at `MASTER_PROFILE_ID`. Write each section as a heading_3 block followed
by a paragraph block.

After writing, confirm: "Your Master Profile is saved. You're ready to run
/hi5-yt-research whenever you want to start finding content ideas."

Then remind them: "One last thing — open your Claude Project settings, go to
Project Instructions, and add these four lines:

```
MASTER_PROFILE_ID: [the page ID from setup]
CONTENT_PLANNER_ID: [the database ID from setup]
KEYWORD_TRACKER_ID: [the database ID from setup]
YOUTUBE_API_KEY: [your YouTube Data API v3 key]
```

If you have a second or third channel, add their profile IDs as optional fields:

```
MASTER_PROFILE_ID_2: [second channel Master Profile page ID]
MASTER_PROFILE_ID_3: [third channel Master Profile page ID]
```

You can find the Notion IDs by opening each page, clicking Share, then Copy
Link — the long string of characters after the last slash is the ID."
