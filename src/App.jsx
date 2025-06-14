import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import ChatHeader from './components/Chat/ChatHeader';
import MessageList from './components/Chat/MessageList';
import MessageInput from './components/Chat/MessageInput';
import { useChat } from './hooks/useChat';
import { contacts } from './data/contacts';
import './styles/globals.css';
import './styles/components.css';

const App = () => {
  const {
    selectedContact,
    setSelectedContact,
    sidebarOpen,
    setSidebarOpen,
    newMessage,
    setNewMessage,
    messages,
    typingUsers,
    messagesEndRef,
    sendMessage
  } = useChat();

  const currentContact = contacts.find(contact => contact.id === selectedContact);

  return (
    <div className="app">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        selectedContact={selectedContact}
        onContactSelect={setSelectedContact}
      />

      <div className="chat-container">
        <ChatHeader
          contact={currentContact}
          onMenuClick={() => setSidebarOpen(true)}
        />

        <MessageList
          messages={messages[selectedContact]}
          isTyping={typingUsers[selectedContact]}
          messagesEndRef={messagesEndRef}
        />

        <MessageInput
          value={newMessage}
          onChange={setNewMessage}
          onSend={sendMessage}
        />
      </div>
    </div>
  );
};

export default App;