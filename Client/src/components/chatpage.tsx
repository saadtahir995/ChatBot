import * as React from "react";
import { useState } from "react";
import "./css/chatpage.css";

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { user: "You", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://chat-bot-backend-smoky.vercel.app/api/route/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);

        const aiMessage = { user: "AI", text: data.text };
        setMessages((prev) => [...prev, aiMessage]);
      } else {
        setMessages((prev) => [
          ...prev,
          { user: "AI", text: "Something went wrong. Please try again." },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { user: "AI", text: "Failed to connect to the server." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Chat with AI</div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.user === "You" ? "user" : "ai"}`}
          >
            <span className="message-author">{msg.user}:</span>
            <span className="message-text">{msg.text}</span>
          </div>
        ))}
        {loading && (
          <div className="chat-message ai typing">
            <span className="message-author">AI:</span>
            <span className="message-text">Typing...</span>
          </div>
        )}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSend} disabled={loading}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
