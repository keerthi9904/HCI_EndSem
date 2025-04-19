import React from "react";
import "./ChatbotGreeting.css";

function ChatbotGreeting() {
  return (
    <div className="chatbot-greeting">
      <img src="/chatbot.png" alt="Assistant" className="chatbot-avatar" />
      <div className="chatbot-text">
        Need help? I’m here to guide you!
      </div>
    </div>
  );
}

export default ChatbotGreeting;