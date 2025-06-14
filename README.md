# Chatify - Responsive Chat Application

A modern, responsive chat application built with React and Vite featuring real-time messaging simulation, typing indicators, and mobile-first design.

![Chatify Screenshot](public/Screenshot%202025-06-14%20204208.png)

## 🚀 Live Demo

**[View Live Application](https://chat-app-rho-henna.vercel.app/)**

## ✨ Features

- **Fully Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Real-time Chat Simulation**: Interactive messaging with bot responses
- **Typing Indicators**: Animated typing feedback
- **Message Status**: Visual indicators for sent/delivered messages
- **Mobile Navigation**: Collapsible sidebar with hamburger menu
- **Online Status**: Live contact status indicators

## 🛠️ Technology Stack

- **React 18** with Hooks
- **Vite** (build tool)
- **Pure CSS** (responsive design)
- **Lucide React** (icons)

## 📁 Project Structure
```pgsql
src/
├── components/
│   ├── Chat/
│   │   ├── ChatHeader.jsx
│   │   ├── Message.jsx
│   │   ├── MessageInput.jsx
│   │   ├── MessageList.jsx
│   │   └── TypingIndicator.jsx
│   └── Sidebar/
│       ├── ContactItem.jsx
│       └── Sidebar.jsx
├── data/
│   ├── contacts.js
│   └── messages.js
├── hooks/
│   └── useChat.js
├── styles/
│   ├── components.css
│   └── globals.css
├── App.jsx
└── main.jsx
```

## 🚀 Getting Started

### Installation

### Clone the repository
```
git clone https://github.com/nikhilshakya07/Chat-App.git
cd Chat-App
```

### Install dependencies
```
npm install
```

### Start development server
```
npm run dev
```

### Open http://localhost:5173 in your browser.

### Build for Production
```
npm run build
```

## 📱 Responsive Design

- Desktop (1024px+): Full sidebar with chat area
- Tablet (768px-1023px): Collapsible sidebar
- Mobile (<768px): Hamburger menu with overlay

## 💡 Key Implementation

**Custom Hook: useChat.js**
Manages all chat functionality:

- Message state management
- Contact selection
- Typing indicators
- Bot response simulation

### Component Architecture

- Modular design with separate Chat and Sidebar components
- Responsive behavior handled through CSS media queries
- State management using React hooks

### 👨‍💻 Author
**Nikhil Shakya**

**GitHub**: https://github.com/nikhilshakya07
**LinkedIn**: https://www.linkedin.com/in/nikhil-shakya07/
**Repository**: https://github.com/nikhilshakya07/Chat-App


