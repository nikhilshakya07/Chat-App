import React from 'react';
import Message from './Message';
import TypingIndicator from './TypingIndicator';

const MessageList = ({ messages, isTyping, messagesEndRef }) => {
  return (
    <div className="message-list">
      {messages?.map((message, index) => (
        <Message key={message.id} message={message} index={index} />
      ))}
      {isTyping && <TypingIndicator />}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;