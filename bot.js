const { GoogleGenerativeAI } = require("@google/generative-ai");
const prompt = require("prompt-sync")({ sigint: true });
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  while (true) {
    const prompttext = prompt("Enter your prompt (or 'exit' to quit): ");
    if (prompttext.toLowerCase() === 'exit') {
      console.log('Exiting...');
      break;
    }

    try {
      const result = await model.generateContent(prompttext);
      const response = await result.response;
      const text = await response.text();
      console.log(text);
    } catch (error) {
      console.error('Error generating content:', error);
    }
  }
}

run();
