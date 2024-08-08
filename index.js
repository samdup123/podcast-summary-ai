import extractUrlWithDate  from './src/extractUrlWithDate.js';
import { JSDOM } from 'jsdom';
import { pipeline } from '@xenova/transformers';

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

		const text = extractSectionTextDOM(episodePageHtml);
		console.log(text);
	}
}

main();
