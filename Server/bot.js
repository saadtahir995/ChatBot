const prompt = require("prompt-sync")({ sigint: true });
require('dotenv').config();
/*const { GoogleGenerativeAI } = require("@google/generative-ai");


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

//run();*/

async function run() {
  while (true) {
    const userPrompt = prompt("Enter your prompt (or 'exit' to quit): ");
    if (userPrompt.toLowerCase() === 'exit') {
      console.log('Exiting...');
      break;
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + process.env.OPENROUTER_API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "deepseek/deepseek-r1:free",
        "messages": [
          {
            "role": "user",
            "content": userPrompt
          }
        ]
      })
    });

    // Check if the response is OK
    if (response.ok) {
      const data = await response.json();
      // Access the AI's reply
      const aiReply = data.choices[0].message.content; // Adjust this based on the actual structure
      console.log("AI Reply:", aiReply);
    } else {
      console.error("Error:", response.statusText);
    }
  }
}

run();
