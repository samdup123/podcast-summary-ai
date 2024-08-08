import { extractUrlWithDate } from "../src/extractUrlWithDate";

import { expect, test, describe } from "bun:test"

const url = (podcastTitleUrl: string, date: string) => {
  return `${podcastTitleUrl}-${date}-1723048334`;
}

describe('Date Extraction', () => {

  const podcastTitleUrl = `https://wng.org/podcasts/the-world-and-everything-in-it-august-8-2024-1723048334`;

  test('should accept valid date', () => {
    expect(extractUrlWithDate('"' + podcastTitleUrl + '"')).
      toBe(podcastTitleUrl);
  })

  test('should only return the url', () => {
    expect(extractUrlWithDate('"more text here!: ' + podcastTitleUrl + ' and even more\nover here!"')).
      toBe(podcastTitleUrl);
  })

});
