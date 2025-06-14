import React from 'react';

const ContactItem = ({ contact, isSelected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`contact-item ${isSelected ? 'contact-item--selected' : ''}`}
    >
      <div className={`contact-avatar ${contact.color}`}>
        {contact.avatar}
      </div>
      <div className="contact-info">
        <div className="contact-header">
          <h3 className="contact-name">{contact.name}</h3>
          <span className="contact-time">{contact.time}</span>
        </div>
        <p className="contact-message">{contact.lastMessage}</p>
        {contact.status === 'Online' && (
          <div className="contact-status">
            <div className="status-dot"></div>
            <span className="status-text">Online</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactItem;