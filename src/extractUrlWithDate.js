function extractUrlWithDate(text) {
  const urlRegex = new RegExp(`(https:\/\/wng\.org\/podcasts\/the-world-and-everything-in-it-)([a-z]+)(.*)"`);

  const match = urlRegex.exec(text);
  if (match) {
    const urlBase = match[1];
    const month = match[2];
    const theRest = match[3];

    const months = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december"
    ];


    if (months.includes(month)){
      return urlBase + month + theRest;
    }
  }

  return null;
}

export default extractUrlWithDate;
