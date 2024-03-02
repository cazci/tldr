"use server";

export async function fetchConfigs(): Promise<{
  apiUrl: string;
  apiKey: string;
}> {
  return {
    apiUrl: process.env.API_URL || "",
    apiKey: process.env.API_KEY || "",
  };
}
