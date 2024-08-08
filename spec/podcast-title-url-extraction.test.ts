import { expect, test, describe } from "bun:test"
import { extractPodcastTitleUrl } from "../src/podcast-title-url-extraction";

const podcastTitleUrl = "https://podcast.org/the-world-and-everything-in-it";
const differentPodcastTitleUrl = "https://podcast.org/the-world-and-everything-in-it-2";
const wrongPodcastTitleUrl = "https://podcast.org/the-world-and-everything-in-that";

const url = (podcastTitleUrl: string, date: string) => {
  return `${podcastTitleUrl}-${date}-1723048334`;
}

describe('Date Extraction', () => {

  test('should accept valid date', () => {
    expect(extractPodcastTitleUrl(url(podcastTitleUrl, 'august-8-2024'), podcastTitleUrl)).
    toBe('https://podcast.org/the-world-and-everything-in-it-august-8-2024-1723048334');
  })

  test('should accept valid date', () => {
    expect(extractPodcastTitleUrl(url(differentPodcastTitleUrl, 'august-8-2024'), podcastTitleUrl)).
    toBe('https://podcast.org/the-world-and-everything-in-it-2-august-8-2024-1723048334');
  })

  test('should accept valid date', () => {
    expect(extractPodcastTitleUrl(url(wrongPodcastTitleUrl, 'august-8-2024'), podcastTitleUrl) === null).
    toBe(true);
  })
});
