import { expect, test, describe } from "bun:test"
import { extractDate } from "../src/date-extraction";

const url = (date: string) => {
  return `https://podcast.org/the-world-and-everything-in-it-${date}-1723048334`;
}

describe('Date Extraction', () => {

  test('should accept valid date', () => {
    expect(extractDate(url('august-8-2024'))).toBe('august-8-2024');
  })

  test('should not accept invalid number date', () => {
    expect(extractDate(url('august-32-2024')) === null).toBe(true);
  })

  test('should not accept invalid month', () => {
    expect(extractDate(url('aug-32-2024')) === null).toBe(true);
  })
});
