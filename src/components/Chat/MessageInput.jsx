import React from 'react';
import { Send } from 'lucide-react';

const MessageInput = ({ value, onChange, onSend }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="message-input-container">
      <div className="message-input-wrapper">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          className="message-input"
        />
        <button onClick={onSend} className="send-button">
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;