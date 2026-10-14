import React, { useState } from 'react';
import { Search, Bell, Menu, X } from 'lucide-react';

const DEFAULT_NOTIFICATIONS = [
  {
    id: 1,
    course: 'Artificial Intelligence',
    text: 'Assignment 4 due on Dec 14',
    time: '2 hours ago',
    read: false
  },
  {
    id: 2,
    course: 'Web Programming',
    text: 'Lab notes uploaded by Ms. Williams',
    time: 'Yesterday',
    read: false
  }
];

export function Header({
  searchQuery,
  setSearchQuery,
  coursesCount,
  totalCount,
  setMobileOpen
}) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState(DEFAULT_NOTIFICATIONS);

  const unreadCount = notifications.filter((n) => !n.read).length;
  const hasUnread = unreadCount > 0;

  const handleToggleNotifications = () => {
    if (!notifOpen) {
      setNotifOpen(true);
      // When user opens notification panel, mark displayed notifications as read
      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    } else {
      setNotifOpen(false);
    }
  };

  return (
    <header className="main-content-header">
      <div className="header-left">
        <button
          type="button"
          className="mobile-menu-trigger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
        >
          <Menu size={22} />
        </button>
        <div className="title-wrapper">
          <h1 className="main-title">My Courses</h1>
          {coursesCount !== totalCount && (
            <span className="search-count-badge" aria-live="polite">
              ({coursesCount} of {totalCount})
            </span>
          )}
        </div>
      </div>

      <div className="header-right">
        {/* Search button / input */}
        <div className={`search-container ${searchOpen ? 'open' : ''}`}>
          {searchOpen && (
            <input
              type="text"
              className="search-input"
              placeholder="Search courses or teachers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              aria-label="Search courses"
            />
          )}
          <button
            type="button"
            className={`header-icon-btn ${searchOpen ? 'active' : ''}`}
            onClick={() => {
              if (searchOpen && searchQuery) {
                setSearchQuery('');
              }
              setSearchOpen(!searchOpen);
            }}
            aria-label={searchOpen ? 'Close search' : 'Search courses'}
            title="Search courses"
          >
            {searchOpen ? <X size={20} /> : <Search size={20} />}
          </button>
        </div>

        {/* Notifications */}
        <div className="notification-wrapper">
          <button
            type="button"
            className="header-icon-btn notification-btn"
            onClick={handleToggleNotifications}
            aria-label="View notifications"
            aria-expanded={notifOpen}
          >
            <Bell size={20} />
            {hasUnread && <span className="notification-dot" aria-hidden="true" />}
          </button>

          {notifOpen && (
            <div className="notification-popover" role="dialog" aria-label="Notifications">
              <div className="notification-header">
                <h3>Notifications</h3>
                <span className="notif-badge">
                  {unreadCount > 0 ? `${unreadCount} new` : 'All read'}
                </span>
              </div>
              <ul className="notification-list">
                {notifications.map((item) => (
                  <li key={item.id} className={`notif-item ${item.read ? 'read' : 'unread'}`}>
                    {!item.read && <span className="notif-indicator" aria-hidden="true" />}
                    <div>
                      <p className="notif-text"><strong>{item.course}</strong>: {item.text}</p>
                      <span className="notif-time">{item.time}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
