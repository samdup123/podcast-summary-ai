function extractDate(url: string): string | null {
  const dateRegex = /([a-zA-Z]+)-(\d{1,2})-(\d{4})/;
  const match = url.match(dateRegex);

  console.log(match, url);
  if (match) {
    const month = match[1].toLowerCase();
    const day = parseInt(match[2], 10);
    const year = parseInt(match[3], 10);

     const validMonths = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
     if (validMonths.includes(month) && day >= 1 && day <= 31 && year >= 1000 && year <= 9999) {
       return match[0];
     }
   }
   return null;
}

export { extractDate };
