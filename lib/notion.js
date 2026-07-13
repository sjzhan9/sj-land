const { Client } = require("@notionhq/client");

let notionClient;

export function getNotionClient() {
  if (!notionClient) {
    notionClient = new Client({ auth: process.env.NOTION_API_KEY });
  }

  return notionClient;
}
