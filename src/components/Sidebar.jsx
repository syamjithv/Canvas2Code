import React from 'react';
import {
  LayoutGrid,
  Folder,
  MessageSquare,
  Users,
  Calendar,
  CheckSquare,
  Settings,
  X
} from 'lucide-react';
import { VidyaLogo } from './Logos';

export function Sidebar({ activeItem, setActiveItem, mobileOpen, setMobileOpen }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
    { id: 'courses', label: 'All Courses', icon: Folder },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'friends', label: 'Friends', icon: Users },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'todo', label: 'To-do', icon: CheckSquare },
  ];

  // Clicking the college logo navigates to Dashboard without altering brand assets
  const handleLogoClick = () => {
    setActiveItem('dashboard');
    if (setMobileOpen) setMobileOpen(false);
  };

  return (
    <aside className={`dashboard-sidebar ${mobileOpen ? 'sidebar-mobile-open' : ''}`}>
      {/* Mobile close button */}
      <button
        type="button"
        className="sidebar-close-btn"
        onClick={() => setMobileOpen(false)}
        aria-label="Close navigation menu"
      >
        <X size={20} />
      </button>

      {/* Top Brand Logo - Official Vidya Academy college logo */}
      <div
        className="sidebar-brand-wrapper"
        onClick={handleLogoClick}
        title="Vidya Academy of Science and Technology - Go to Dashboard"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleLogoClick();
          }
        }}
      >
        <VidyaLogo />
      </div>

      {/* Main Navigation Stack */}
      <nav className="sidebar-nav" aria-label="Main Navigation">
        <ul className="sidebar-nav-list">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            return (
              <li key={item.id} className="sidebar-nav-item">
                <button
                  type="button"
                  className={`sidebar-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setActiveItem(item.id);
                    if (setMobileOpen) setMobileOpen(false);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {/* Left white indicator tab for active state */}
                  {isActive && <span className="active-indicator-pill" aria-hidden="true" />}
                  <Icon className="nav-icon" size={20} strokeWidth={2.2} />
                  <span className="nav-label">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Settings Button */}
      <div className="sidebar-bottom">
        <button
          type="button"
          className={`sidebar-nav-link sidebar-settings-link ${activeItem === 'settings' ? 'active' : ''}`}
          onClick={() => {
            setActiveItem('settings');
            if (setMobileOpen) setMobileOpen(false);
          }}
          aria-current={activeItem === 'settings' ? 'page' : undefined}
        >
          {activeItem === 'settings' && <span className="active-indicator-pill" aria-hidden="true" />}
          <Settings className="nav-icon" size={20} strokeWidth={2.2} />
          <span className="nav-label">Settings</span>
        </button>
      </div>
    </aside>
  );
}
