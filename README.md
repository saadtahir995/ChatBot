# Generative AI Chatbot

This is a simple chatbot that uses the Google Generative AI to generate responses to user inputs. The chatbot runs in a Node.js environment and continuously prompts the user for input, generating responses using the specified AI model.

## Features

- Uses Google Generative AI for response generation
- Continuously prompts the user for input
- Easy to set up and run

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/saadtahir995/ChatBot.git
   cd ChatBot
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up your API key**:
   - Create a `.env` file in the root directory of your project.
   - Add your Google Generative AI API key to the `.env` file:
     ```
     API_KEY=your_api_key_here
     ```

## Usage

1. **Run the chatbot**:
   ```bash
   node bot.js
   ```

2. **Interact with the chatbot**:
   - Enter your prompts when prompted.
   - Type 'exit' to quit the chatbot.

## Example

Here's an example interaction with the chatbot:

```
Enter your prompt: Tell me a joke.
Why don't scientists trust atoms? Because they make up everything!

Enter your prompt: What's the weather like today?
I'm not sure, but you can check a weather website for the latest updates.

Enter your prompt: exit
Exiting...
```

## Error Handling

If there are any errors during the content generation process, they will be logged to the console.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

- [Google Generative AI](https://ai.google/tools/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [prompt-sync](https://www.npmjs.com/package/prompt-sync)

## Contact

If you have any questions or feedback, please open an issue or contact me directly at saadtahir5665@gmail.com.
