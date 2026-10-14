import React, { useState } from 'react';
import {
  ArrowLeft,
  Search,
  Send,
  MessageSquare,
  CheckCheck,
  UserCheck
} from 'lucide-react';
import { onlineUsers } from '../../data/users';

const initialConversations = [
  {
    id: 'conv-felix',
    contactName: 'Mr. Felix',
    role: 'Instructor • Artificial Intelligence',
    avatar: null,
    avatarInitial: 'F',
    avatarBg: '#ac62d1',
    status: 'online',
    lastMessage: 'Your A* search heuristic implementation for the 8-puzzle problem looks very solid. Keep it up!',
    timestamp: '10:42 AM',
    unread: true,
    messages: [
      { id: 'm1', sender: 'them', text: 'Hello Lena, please ensure your lab assignment for heuristic search is committed before Thursday.', time: 'Yesterday 04:15 PM' },
      { id: 'm2', sender: 'me', text: 'Good evening Mr. Felix, I have just completed the Manhattan distance implementation and pushed the test cases.', time: 'Yesterday 06:30 PM' },
      { id: 'm3', sender: 'them', text: 'Your A* search heuristic implementation for the 8-puzzle problem looks very solid. Keep it up!', time: '10:42 AM' }
    ]
  },
  {
    id: 'conv-sophia',
    contactName: 'Sophia Chen',
    role: 'Student • ID: 1094882001',
    avatar: onlineUsers[0]?.avatar,
    avatarInitial: 'S',
    avatarBg: '#10b981',
    status: 'online',
    lastMessage: 'Hey Lena! Are we meeting in Computing Lab 1 at 2 PM for the Web Programming team project?',
    timestamp: '09:15 AM',
    unread: true,
    messages: [
      { id: 'm4', sender: 'them', text: 'Hi Lena! Did you finish module 2 of Web Programming?', time: 'Yesterday 02:00 PM' },
      { id: 'm5', sender: 'me', text: 'Hey Sophia! Yes, I just finished the custom hooks and state management section.', time: 'Yesterday 02:20 PM' },
      { id: 'm6', sender: 'them', text: 'Hey Lena! Are we meeting in Computing Lab 1 at 2 PM for the Web Programming team project?', time: '09:15 AM' }
    ]
  },
  {
    id: 'conv-williams',
    contactName: 'Ms. Williams',
    role: 'Instructor • Web Programming',
    avatar: null,
    avatarInitial: 'W',
    avatarBg: '#e87a79',
    status: 'offline',
    lastMessage: 'Great job in today’s frontend architecture review. The component hierarchy is very clean.',
    timestamp: 'Yesterday',
    unread: false,
    messages: [
      { id: 'm7', sender: 'me', text: 'Ms. Williams, should our REST endpoints follow strict JSON-API conventions?', time: '2 days ago' },
      { id: 'm8', sender: 'them', text: 'Standard RESTful JSON with clear resource URIs is sufficient for this coursework.', time: '2 days ago' },
      { id: 'm9', sender: 'them', text: 'Great job in today’s frontend architecture review. The component hierarchy is very clean.', time: 'Yesterday' }
    ]
  },
  {
    id: 'conv-james',
    contactName: 'James Miller',
    role: 'Student • ID: 1094672000',
    avatar: onlineUsers[1]?.avatar,
    avatarInitial: 'J',
    avatarBg: '#3b82f6',
    status: 'online',
    lastMessage: 'Thanks for sharing the Operating Systems scheduling notes!',
    timestamp: 'Oct 12',
    unread: false,
    messages: [
      { id: 'm10', sender: 'them', text: 'Hey Lena, do you have the formulas for Multi-Level Feedback Queue scheduling?', time: 'Oct 11' },
      { id: 'm11', sender: 'me', text: 'Sent! Check the shared drive under OS-Module-1.', time: 'Oct 11' },
      { id: 'm12', sender: 'them', text: 'Thanks for sharing the Operating Systems scheduling notes!', time: 'Oct 12' }
    ]
  },
  {
    id: 'conv-alex',
    contactName: 'Mr. Alex',
    role: 'Instructor • Cloud Computing',
    avatar: null,
    avatarInitial: 'A',
    avatarBg: '#bc5be0',
    status: 'offline',
    lastMessage: 'Remember to stop your container instances after completing the Docker lab exercises.',
    timestamp: 'Oct 10',
    unread: false,
    messages: [
      { id: 'm13', sender: 'them', text: 'Remember to stop your container instances after completing the Docker lab exercises.', time: 'Oct 10' }
    ]
  }
];

export function MessagesPage({ onBack }) {
  const [conversations, setConversations] = useState(initialConversations);
  const [activeConvId, setActiveConvId] = useState('conv-felix');
  const [searchQuery, setSearchQuery] = useState('');
  const [replyText, setReplyText] = useState('');

  const activeConv = conversations.find((c) => c.id === activeConvId) || conversations[0];

  const filteredConversations = conversations.filter((c) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return c.contactName.toLowerCase().includes(q) || c.role.toLowerCase().includes(q) || c.lastMessage.toLowerCase().includes(q);
  });

  const handleSelectConv = (id) => {
    setActiveConvId(id);
    // Mark conversation as read
    setConversations((prev) =>
      prev.map((c) => (c.id === id ? { ...c, unread: false } : c))
    );
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    const newMsg = {
      id: `msg-${Date.now()}`,
      sender: 'me',
      text: replyText.trim(),
      time: 'Just now'
    };

    setConversations((prev) =>
      prev.map((c) => {
        if (c.id === activeConvId) {
          return {
            ...c,
            lastMessage: replyText.trim(),
            timestamp: 'Just now',
            messages: [...c.messages, newMsg]
          };
        }
        return c;
      })
    );

    setReplyText('');
  };

  return (
    <div className="messages-page-container">
      {/* Top Header */}
      <div className="messages-header-row">
        <div className="messages-header-left">
          <button
            type="button"
            className="back-to-dashboard-btn"
            onClick={onBack}
            aria-label="Back to Dashboard"
          >
            <ArrowLeft size={18} strokeWidth={2.4} />
            <span>Back to Dashboard</span>
          </button>
          <div>
            <h1 className="messages-main-title">Messages & Inbox</h1>
            <p className="messages-subtitle">
              Communicate with instructors and classmates in your academic network
            </p>
          </div>
        </div>

        <div className="messages-status-badge">
          <MessageSquare size={16} />
          <span>{conversations.filter((c) => c.unread).length} Unread Messages</span>
        </div>
      </div>

      {/* Main Split Chat Layout */}
      <div className="chat-split-layout">
        {/* Left: Conversations List */}
        <aside className="chat-conversations-sidebar">
          <div className="chat-search-box">
            <Search size={16} className="chat-search-icon" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="chat-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="conversations-scroll-list">
            {filteredConversations.map((conv) => {
              const isSelected = conv.id === activeConvId;

              return (
                <div
                  key={conv.id}
                  className={`conversation-item-card ${isSelected ? 'active-conv' : ''}`}
                  onClick={() => handleSelectConv(conv.id)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Open conversation with ${conv.contactName}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectConv(conv.id);
                    }
                  }}
                >
                  <div className="conv-avatar-wrapper">
                    {conv.avatar ? (
                      <img src={conv.avatar} alt={conv.contactName} className="conv-avatar-img" />
                    ) : (
                      <div className="conv-avatar-initial" style={{ backgroundColor: conv.avatarBg }}>
                        {conv.avatarInitial}
                      </div>
                    )}
                    <span className={`conv-status-dot ${conv.status === 'online' ? 'status-online' : 'status-offline'}`} />
                  </div>

                  <div className="conv-preview-info">
                    <div className="conv-name-row">
                      <strong className="conv-contact-name">{conv.contactName}</strong>
                      <span className="conv-timestamp">{conv.timestamp}</span>
                    </div>
                    <span className="conv-role-sub">{conv.role}</span>
                    <p className="conv-last-snippet">{conv.lastMessage}</p>
                  </div>

                  {conv.unread && <span className="conv-unread-pill" aria-label="Unread message" />}
                </div>
              );
            })}
          </div>
        </aside>

        {/* Right: Active Message Thread */}
        <main className="chat-thread-container">
          {activeConv ? (
            <>
              {/* Thread Header */}
              <div className="thread-header-bar">
                <div className="thread-contact-meta">
                  <div className="conv-avatar-wrapper">
                    {activeConv.avatar ? (
                      <img src={activeConv.avatar} alt={activeConv.contactName} className="conv-avatar-img" />
                    ) : (
                      <div className="conv-avatar-initial" style={{ backgroundColor: activeConv.avatarBg }}>
                        {activeConv.avatarInitial}
                      </div>
                    )}
                    <span className={`conv-status-dot ${activeConv.status === 'online' ? 'status-online' : 'status-offline'}`} />
                  </div>

                  <div>
                    <h2 className="thread-contact-title">{activeConv.contactName}</h2>
                    <span className="thread-contact-status">
                      <UserCheck size={13} /> {activeConv.role} • {activeConv.status === 'online' ? 'Active Now' : 'Offline'}
                    </span>
                  </div>
                </div>

                <span className="demo-indicator-pill">Live Demo Chat</span>
              </div>

              {/* Thread Messages List */}
              <div className="thread-messages-scroll">
                {activeConv.messages.map((msg) => {
                  const isMe = msg.sender === 'me';

                  return (
                    <div key={msg.id} className={`chat-bubble-row ${isMe ? 'bubble-outgoing' : 'bubble-incoming'}`}>
                      <div className="chat-bubble-box">
                        <p className="chat-bubble-text">{msg.text}</p>
                        <span className="chat-bubble-time">
                          {msg.time}
                          {isMe && <CheckCheck size={14} className="bubble-check-icon" />}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Message Composer */}
              <form className="thread-compose-bar" onSubmit={handleSendMessage}>
                <input
                  type="text"
                  placeholder={`Write a reply to ${activeConv.contactName}...`}
                  className="thread-input-field"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />

                <button
                  type="submit"
                  className="thread-send-btn"
                  disabled={!replyText.trim()}
                  aria-label="Send message"
                >
                  <Send size={16} />
                  <span>Send</span>
                </button>
              </form>
            </>
          ) : (
            <div className="no-chat-selected">
              <MessageSquare size={48} className="text-muted" />
              <p>Select a conversation from the left to start messaging.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
