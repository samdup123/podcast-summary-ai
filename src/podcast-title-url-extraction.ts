import { extractDate } from "./date-extraction";

function extractPodcastTitleUrl(url: string, podcastTitleUrl: string): string | null {
  const titleMatch = url.match(podcastTitleUrl);
  const dateMatch = extractDate(url);

  if (titleMatch && dateMatch) {
    return url;
  }

  return null;
}

export { extractPodcastTitleUrl };
