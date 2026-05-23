import { Client } from "@notionhq/client";
import "dotenv/config";

if (!process.env.NOTION_TOKEN) {
  throw new Error(
    "NOTION_TOKEN is not set. Add it to your .env file:\nNOTION_TOKEN=your-token-here"
  );
}

export const notion = new Client({ auth: process.env.NOTION_TOKEN });
