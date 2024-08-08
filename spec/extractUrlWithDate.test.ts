import { extractUrlWithDate } from "../src/extractUrlWithDate";

import { expect, test, describe } from "bun:test"

const url = (podcastTitleUrl: string, date: string) => {
  return `${podcastTitleUrl}-${date}-1723048334`;
}

describe('Date Extraction', () => {

  const baseUrl = `"https://podcast.org/the-world-and-everything-in-it"`;

  const podcastTitleUrl = `"https://podcast.org/the-world-and-everything-in-it-august-8-2024-1723048334"`;
  const differentPodcastTitleUrl = `"https://podcast.org/the-world-and-everything-in-it-2-august-8-2024-1723048334"`;
  const wrongPodcastTitleUrl = `"https://podcast.org/the-world-and-everything-in-that-august-8-2024-1723048334"`;


  test('should accept valid date', () => {
    expect(extractUrlWithDate(podcastTitleUrl, baseUrl)).
      toBe('https://podcast.org/the-world-and-everything-in-it-august-8-2024-1723048334');
  })

  test('should only return the url', () => {
    expect(extractUrlWithDate('more text here!: ' + podcastTitleUrl + ' and even more\nover here!', baseUrl)).
      toBe('https://podcast.org/the-world-and-everything-in-it-august-8-2024-1723048334');
  })

});
