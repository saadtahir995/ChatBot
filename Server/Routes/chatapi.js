const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
app.post('/chat', async (req, res) => {
    const { message, userContext } = req.body; // Optionally pass user-specific context
    if (!message) return res.send('No prompt provided');

    const prompt = `
        You are a helpful chatbot for "Towing Guy," a service where drivers use trucks to tow cars.
        our goal is to provide excellent customer service and support to drivers who need towing services.
        Context: ${userContext || "general"}
        Respond to the following user message concisely, focusing on towing services and customer support:
        ${message}
    `;

    const result = await genAI.getGenerativeModel({ model: "gemini-2.0-flash" }).generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    res.send({ text });
});


module.exports = app

