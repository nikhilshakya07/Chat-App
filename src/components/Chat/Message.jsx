import React from 'react';

const Message = ({ message, index }) => {
  return (
    <div
      className={`message ${message.sender === 'user' ? 'message--user' : 'message--contact'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`message-bubble ${message.sender === 'user' ? 'message-bubble--user' : 'message-bubble--contact'}`}>
        <p className="message-text">{message.text}</p>
        <div className="message-footer">
          <span className="message-time">{message.timestamp}</span>
          {message.sender === 'user' && (
            <span className="message-status">
              {message.status === 'sent' ? '✓' : '✓✓'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;