import React from 'react';
import { Menu, Phone, Video, MoreVertical } from 'lucide-react';

const ChatHeader = ({ contact, onMenuClick }) => {
  return (
    <div className="chat-header">
      <div className="chat-header-left">
        <button onClick={onMenuClick} className="menu-button lg:hidden">
          <Menu size={20} />
        </button>
        <div className={`chat-avatar ${contact?.color}`}>
          {contact?.avatar}
        </div>
        <div className="chat-contact-info">
          <h3 className="chat-contact-name">{contact?.name}</h3>
          {contact?.status === 'Online' ? (
            <div className="chat-contact-status">
              <div className="status-dot"></div>
              <span className="status-text">Online</span>
            </div>
          ) : (
            <span className="chat-contact-last-seen">{contact?.status}</span>
          )}
        </div>
      </div>
      
      <div className="chat-header-actions">
        <button className="action-button">
          <Phone size={20} />
        </button>
        <button className="action-button">
          <Video size={20} />
        </button>
        <button className="action-button">
          <MoreVertical size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
