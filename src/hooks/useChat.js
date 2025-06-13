import { useState, useEffect, useRef } from 'react';
import { initialMessages, botReplies } from '../data/messages';

export const useChat = () => {
  const [selectedContact, setSelectedContact] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState(initialMessages);
  const [typingUsers, setTypingUsers] = useState({});
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getBotReply = () => {
    return botReplies[Math.floor(Math.random() * botReplies.length)];
  };

  const sendMessage = () => {
    if (newMessage.trim() === '') return;

    const userMessage = {
      id: Date.now(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    setMessages(prev => ({
      ...prev,
      [selectedContact]: [...(prev[selectedContact] || []), userMessage]
    }));

    setNewMessage('');

    // show typing dots while waiting for bot reply
    setTypingUsers(prev => ({ ...prev, [selectedContact]: true }));

    // adding delay to mimic real bot response timing
    setTimeout(() => {
      setTypingUsers(prev => ({ ...prev, [selectedContact]: false }));
      
      const botReply = {
        id: Date.now() + 1,
        text: getBotReply(),
        sender: 'contact',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'received'
      };

      setMessages(prev => ({
        ...prev,
        [selectedContact]: [...(prev[selectedContact] || []), botReply]
      }));
    }, 1000 + Math.random() * 2000);
  };

  return {
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
  };
};