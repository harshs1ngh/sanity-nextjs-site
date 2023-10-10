import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "8b6y4rh4",
  dataset: "production",
  apiVersion: "2023-10-10",
  useCdn: false,
};

const client = createClient(config);

export default client;

//apiVersion:  The version of the Sanity API you're using. For the latest API version, use your current date in this format YYYY-MM-DD.
//useCdn is used to disable edge cases
