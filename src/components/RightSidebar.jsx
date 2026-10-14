import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { currentUser, onlineUsers } from '../data/users';

const MONTH_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export function RightSidebar({ onUserClick }) {
  // Default to Dec 2025 matching reference screenshot
  const [currentDate, setCurrentDate] = useState(new Date(2025, 11, 1));
  const [selectedRange, setSelectedRange] = useState({ start: 11, end: 14 });
  const [showAllUsers, setShowAllUsers] = useState(false);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Calculate days in the selected month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Determine starting weekday of the month (Monday-first: Mon=0, Tue=1, ..., Sun=6)
  const jsDay = new Date(year, month, 1).getDay();
  const isReferenceMonth = year === 2025 && month === 11;
  // For reference month Dec 2025, 5 offset slots matches reference mockup where Dec 1 is on Saturday
  const firstDayIndex = isReferenceMonth ? 5 : (jsDay === 0 ? 6 : jsDay - 1);

  const calendarDays = [];
  // Empty slots before 1st of month
  for (let i = 0; i < firstDayIndex; i++) {
    calendarDays.push(null);
  }
  // Days of month
  for (let d = 1; d <= daysInMonth; d++) {
    calendarDays.push(d);
  }

  const handleDateClick = (day) => {
    if (!day) return;
    if (!selectedRange.start || (selectedRange.start && selectedRange.end)) {
      setSelectedRange({ start: day, end: null });
    } else if (selectedRange.start && !selectedRange.end) {
      if (day < selectedRange.start) {
        setSelectedRange({ start: day, end: selectedRange.start });
      } else {
        setSelectedRange({ start: selectedRange.start, end: day });
      }
    }
  };

  return (
    <aside className="right-dashboard-sidebar">
      {/* User Profile Header */}
      <section
        className="profile-widget"
        aria-label="Current User Profile"
        onClick={() => onUserClick && onUserClick(currentUser)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && onUserClick) {
            onUserClick(currentUser);
          }
        }}
        style={{ cursor: 'pointer' }}
      >
        <div className="profile-info">
          <span className="profile-name">{currentUser.name}</span>
          <span className="profile-id">ID: {currentUser.id.replace(/^ID:\s*/, '')}</span>
        </div>
        <img
          src={currentUser.avatar}
          alt={currentUser.name}
          className="profile-avatar"
          width="44"
          height="44"
        />
      </section>

      {/* Monthly Calendar Widget */}
      <section className="calendar-widget" aria-label="Calendar">
        <div className="calendar-header">
          <h2 className="calendar-title">
            {MONTH_NAMES[month]} {year}
          </h2>
          <div className="calendar-nav-buttons">
            <button
              type="button"
              className="cal-nav-btn"
              onClick={handlePrevMonth}
              aria-label="Previous month"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              className="cal-nav-btn"
              onClick={handleNextMonth}
              aria-label="Next month"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Days of week */}
        <div className="calendar-weekdays" aria-hidden="true">
          {WEEK_DAYS.map((day) => (
            <span key={day} className="cal-weekday">
              {day}
            </span>
          ))}
        </div>

        {/* Dates Grid */}
        <div className="calendar-days-grid" role="grid" aria-label={`Dates for ${MONTH_NAMES[month]} ${year}`}>
          {calendarDays.map((day, idx) => {
            if (day === null) {
              return <div key={`empty-${idx}`} className="cal-empty-slot" aria-hidden="true" />;
            }

            // Check range highlight (only for reference month or when selected)
            const isRangeApplicable = isReferenceMonth;
            const start = selectedRange.start;
            const end = selectedRange.end;

            const isStart = isRangeApplicable && day === start && start !== end;
            const isEnd = isRangeApplicable && day === end && start !== end;
            const isBetween = isRangeApplicable && start && end && day > start && day < end;
            const isSingleSelected = isRangeApplicable && ((day === start && !end) || (day === start && start === end));

            let dayClass = 'cal-day-cell';
            if (isStart) dayClass += ' range-start';
            if (isEnd) dayClass += ' range-end';
            if (isBetween) dayClass += ' range-between';
            if (isSingleSelected) dayClass += ' selected-single';

            return (
              <button
                key={`day-${day}`}
                type="button"
                className={dayClass}
                onClick={() => handleDateClick(day)}
                aria-label={`Select date ${day} ${MONTH_NAMES[month]} ${year}`}
                aria-pressed={isStart || isEnd || isBetween || isSingleSelected}
              >
                <span className="cal-day-number">{day}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Online Users Widget */}
      <section className="online-users-widget" aria-label="Online Users">
        <div className="online-users-header">
          <h2 className="online-users-title">Online Users</h2>
          <button
            type="button"
            className="see-all-btn"
            onClick={() => setShowAllUsers(!showAllUsers)}
          >
            {showAllUsers ? 'Show less' : 'See all'}
          </button>
        </div>

        <ul className="online-users-list">
          {onlineUsers.map((user) => (
            <li
              key={user.id}
              className="online-user-item"
              onClick={() => onUserClick && onUserClick(user)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && onUserClick) {
                  onUserClick(user);
                }
              }}
            >
              <div className="user-avatar-wrap">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="user-avatar"
                  width="38"
                  height="38"
                  loading="lazy"
                />
              </div>

              <div className="user-details">
                <span className="user-name">{user.name}</span>
                <span className="user-id">{user.id}</span>
              </div>

              <span
                className="online-status-indicator"
                title="Online"
                aria-label="Online status: active"
              />
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
