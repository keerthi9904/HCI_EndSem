import React from "react";
import "./EmojiParade.css";

export default function EmojiParade() {
  const emojis = ["💊", "🩺", "🩹", "🧼", "🧴", "🧑‍⚕️", "🧬", "💉"]

  return (
    <div className="emoji-parade-container">
      <div className="emoji-parade">
        {emojis.map((emoji, index) => (
          <span key={index} className="emoji">
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}