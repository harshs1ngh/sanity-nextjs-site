import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "8b6y4rh4",
  dataset: "production",
  apiVersion: "2023-10-08",
  useCdn: false,
};

const client = createClient(config);

export default client;
