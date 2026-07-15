const { Client } = require("@notionhq/client");

let notionClient;
const dataSourceIdPromises = new Map();

function normalizeNotionUrl(value) {
  if (typeof value !== "string") return value;

  const trimmedValue = value.trim();
  const wrappedUrl = trimmedValue.match(/^url=(["'])(https?:\/\/.*)\1$/i);

  return wrappedUrl ? wrappedUrl[2] : trimmedValue;
}

function normalizeNotionResult(result) {
  if (!result.properties) return result;

  const properties = Object.fromEntries(
    Object.entries(result.properties).map(([name, property]) => [
      name,
      property?.type === "url"
        ? { ...property, url: normalizeNotionUrl(property.url) }
        : property,
    ])
  );

  return { ...result, properties };
}

export function getNotionClient() {
  if (!notionClient) {
    notionClient = new Client({
      auth: process.env.NOTION_API_KEY,
      notionVersion: "2025-09-03",
    });
  }

  return notionClient;
}

async function getDataSourceId(databaseId) {
  if (!databaseId) {
    throw new Error("A Notion database ID is required.");
  }

  if (!dataSourceIdPromises.has(databaseId)) {
    const dataSourceIdPromise = getNotionClient()
      .databases.retrieve({ database_id: databaseId })
      .then((database) => {
        const dataSources = database.data_sources ?? [];

        if (dataSources.length !== 1) {
          throw new Error(
            `Expected one Notion data source for database ${databaseId}, found ${dataSources.length}.`
          );
        }

        return dataSources[0].id;
      })
      .catch((error) => {
        dataSourceIdPromises.delete(databaseId);
        throw error;
      });

    dataSourceIdPromises.set(databaseId, dataSourceIdPromise);
  }

  return dataSourceIdPromises.get(databaseId);
}

export async function queryNotionDatabase({ database_id, ...query }) {
  const data_source_id = await getDataSourceId(database_id);

  const response = await getNotionClient().dataSources.query({
    data_source_id,
    ...query,
  });

  return {
    ...response,
    results: response.results.map(normalizeNotionResult),
  };
}
