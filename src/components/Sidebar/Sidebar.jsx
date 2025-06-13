import React from 'react';
import { X } from 'lucide-react';
import ContactItem from './ContactItem';
import { contacts } from '../../data/contacts';

const Sidebar = ({ isOpen, onClose, selectedContact, onContactSelect }) => {
  return (
    <>
      <div className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div className="logo-icon">logo</div>
          </div>
          <button onClick={onClose} className="sidebar-close lg:hidden">
            <X size={20} />
          </button>
        </div>

        {/* Chats Header */}
        <div className="sidebar-chats-header">
          <h2>Chats</h2>
        </div>

        {/* Contact List */}
        <div className="sidebar-contacts">
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              isSelected={selectedContact === contact.id}
              onSelect={() => {
                onContactSelect(contact.id);
                onClose();
              }}
            />
          ))}
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && <div className="sidebar-overlay lg:hidden" onClick={onClose} />}
    </>
  );
};

export default Sidebar;
