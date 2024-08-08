import extractUrlWithDate  from './src/extractUrlWithDate.js';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import os from 'os';
import path from 'path';

function readFileFromHomeDirectorySync(fileName) {
  const homeDirectory = os.homedir();
  const filePath = path.join(homeDirectory, fileName);

  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return data;
  } catch (err) {
    console.error('Error reading file:', err);
    throw err;
  }
}

const apiToken = readFileFromHomeDirectorySync('.hugging-face-credentials');

async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
		{
			headers: {
				Authorization: "Bearer " + apiToken,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

async function fetchHTML(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Network response was not ok: ${response.statusText}`);
		}
		const html = await response.text();

		return html;
	} catch (error) {
		console.error('Error fetching HTML:', error);
		return null;
	}

}

async function main() {
	const podcastUrl = 'https://wng.org/podcasts/the-world-and-everything-in-it';
	const podcastPageHtml = await fetchHTML(podcastUrl);
	if (!podcastPageHtml) {
		console.error('Failed to fetch HTML');
		return;
	}

	const episodeUrl = extractUrlWithDate(podcastPageHtml);
	if (episodeUrl) {
		const episodePageHtml = await fetchHTML(episodeUrl);
		if (!episodePageHtml) {
			console.error('Failed to fetch HTML');
			return;
		}

		function extractSectionTextDOM(html) {
			const dom = new JSDOM(html);
			const document = dom.window.document;
			const sections = document.querySelectorAll('section');

			return Array.from(sections).map(section => section.textContent || '')[0];
		}

		const podcastTranscript = extractSectionTextDOM(episodePageHtml);

		console.log(podcastTranscript)

		query({"inputs": podcastTranscript}).then((response) => {
			console.log(JSON.stringify(response));
		});
	}
}

main();
