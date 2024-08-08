function extractUrlWithDate(text: string): string | null {
  const urlRegex = new RegExp(`(https:\/\/wng\.org\/podcasts\/the-world-and-everything-in-it-)([a-z]+)(.*)"`);

  const match = urlRegex.exec(text);
  console.log('yolo', text, match)

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


    console.log('monaths', months, month, months.includes(month))

    if (months.includes(month)){
      console.log(urlBase + month + theRest)
      return urlBase + month + theRest;
    }
  }

  return null;
}

export { extractUrlWithDate };
