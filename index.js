import extractUrlWithDate from "./src/extractUrlWithDate.js";
import { JSDOM } from "jsdom";
import fs from "fs";
import os from "os";
import path from "path";
import axios from "axios";

function readFileFromHomeDirectorySync(fileName) {
  const homeDirectory = os.homedir();
  const filePath = path.join(homeDirectory, fileName);

  try {
    const data = fs.readFileSync(filePath, "utf8");
    return data;
  } catch (err) {
    console.error("Error reading file:", err);
    throw err;
  }
}

function trimNewlines(str) {
	return str.replace(/[\n\r]+$/, '');
}

const apiToken = trimNewlines(readFileFromHomeDirectorySync(".openai-credentials"));
console.log(apiToken);
const endpoint = 'https://api.openai.com/v1/chat/completions'; // Define the endpoint
const model = 'gpt-4'; // or 'gpt-4-turbo' depending on the model you want to use

async function invokeChatGPT(prompt) {
  try {
    const response = await axios.post(
      endpoint,
      {
        model: model,
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${apiToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    const completion = response.data.choices[0].message.content;
    console.log("ChatGPT response:", completion);
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
  }
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
    console.error("Error fetching HTML:", error);
    return null;
  }
}

async function main() {
  const podcastUrl = "https://wng.org/podcasts/the-world-and-everything-in-it";
  const podcastPageHtml = await fetchHTML(podcastUrl);
  if (!podcastPageHtml) {
    console.error("Failed to fetch HTML");
    return;
  }

  const episodeUrl = extractUrlWithDate(podcastPageHtml);
  if (episodeUrl) {
    const episodePageHtml = await fetchHTML(episodeUrl);
    if (!episodePageHtml) {
      console.error("Failed to fetch HTML");
      return;
    }

    function extractSectionTextDOM(html) {
      const dom = new JSDOM(html);
      const document = dom.window.document;
      const sections = document.querySelectorAll("section");

      return Array.from(sections).map(
        (section) => section.textContent || ""
      )[0];
    }

    const podcastTranscript = extractSectionTextDOM(episodePageHtml);

    invokeChatGPT('Can you summarize the following podcast transcript?\n\n' + podcastTranscript);
  }
}

main();
