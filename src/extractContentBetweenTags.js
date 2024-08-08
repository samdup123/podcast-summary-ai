function extractContentBetweenTags(html) {
  const sectionRegex = /<section>(.+)</;
  const matches = html.match(sectionRegex);

  console.log(html, 'matches yolo', matches)

  if (!matches) {
    return [];
  }

  return matches.map(match => match.replace(/<\/?section>/g, '').trim());
}

export default extractContentBetweenTags;
