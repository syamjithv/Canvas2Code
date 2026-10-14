import React, { useState } from 'react';
import {
  ArrowLeft,
  User,
  Bell,
  Palette,
  Shield,
  KeyRound,
  CheckCircle2,
  RotateCcw,
  Save,
  AlertTriangle
} from 'lucide-react';
import { currentUser } from '../../data/users';

const initialSettingsState = {
  name: currentUser.name,
  email: 'lena.williams@vidya.ac.in',
  department: currentUser.department,
  batch: currentUser.batch,
  bio: 'Undergraduate student in Computer Science & Engineering. Passionate about AI search algorithms, frontend systems, and distributed cloud computing.',
  notifyDeadline: true,
  notifySchedule: true,
  notifyMessages: true,
  notifyAnnouncements: true,
  appearanceTheme: 'default',
  compactMode: false,
  privacyShowOnline: true,
  privacyShowCourses: true,
  twoFactorAuth: false
};

export function SettingsPage({ onBack }) {
  const [activeTab, setActiveTab] = useState('profile'); // profile, notifications, appearance, privacy, account
  const [formData, setFormData] = useState(initialSettingsState);
  const [saveBanner, setSaveBanner] = useState(false);
  const [passwordState, setPasswordState] = useState({ current: '', newPass: '', confirmPass: '', message: '' });

  const handleFieldChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
    setSaveBanner(false);
  };

  const handleSave = (e) => {
    if (e) e.preventDefault();
    setSaveBanner(true);
    setTimeout(() => setSaveBanner(false), 3500);
  };

  const handleReset = () => {
    setFormData(initialSettingsState);
    setPasswordState({ current: '', newPass: '', confirmPass: '', message: '' });
    setSaveBanner(false);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (!passwordState.current || !passwordState.newPass) {
      setPasswordState((p) => ({ ...p, message: 'Please enter both current and new passwords.' }));
      return;
    }
    if (passwordState.newPass !== passwordState.confirmPass) {
      setPasswordState((p) => ({ ...p, message: 'New passwords do not match.' }));
      return;
    }
    setPasswordState({ current: '', newPass: '', confirmPass: '', message: 'Password updated successfully in local prototype session.' });
    setTimeout(() => {
      setPasswordState((p) => ({ ...p, message: '' }));
    }, 4000);
  };

  return (
    <div className="settings-page-container">
      {/* Header */}
      <div className="settings-header-row">
        <div className="settings-header-left">
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
            <h1 className="settings-main-title">Account & Application Settings</h1>
            <p className="settings-subtitle">
              Manage your profile, notification preferences, and interface customizations
            </p>
          </div>
        </div>

        <div className="settings-actions-group">
          <button
            type="button"
            className="settings-reset-btn"
            onClick={handleReset}
          >
            <RotateCcw size={15} />
            <span>Reset Defaults</span>
          </button>

          <button
            type="button"
            className="settings-save-btn"
            onClick={handleSave}
          >
            <Save size={15} />
            <span>Save Preferences</span>
          </button>
        </div>
      </div>

      {/* Success Notification Banner */}
      {saveBanner && (
        <div className="settings-success-alert" role="status">
          <CheckCircle2 size={18} />
          <span>All profile settings and preferences saved successfully for your current session!</span>
        </div>
      )}

      {/* Settings Split Layout */}
      <div className="settings-split-layout">
        {/* Navigation Sidebar */}
        <nav className="settings-nav-tabs" aria-label="Settings Categories">
          <button
            type="button"
            className={`settings-tab-link ${activeTab === 'profile' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <User size={18} />
            <span>Student Profile</span>
          </button>

          <button
            type="button"
            className={`settings-tab-link ${activeTab === 'notifications' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            <Bell size={18} />
            <span>Notifications</span>
          </button>

          <button
            type="button"
            className={`settings-tab-link ${activeTab === 'appearance' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('appearance')}
          >
            <Palette size={18} />
            <span>Appearance & Theme</span>
          </button>

          <button
            type="button"
            className={`settings-tab-link ${activeTab === 'privacy' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('privacy')}
          >
            <Shield size={18} />
            <span>Privacy & Sharing</span>
          </button>

          <button
            type="button"
            className={`settings-tab-link ${activeTab === 'account' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('account')}
          >
            <KeyRound size={18} />
            <span>Account Security</span>
          </button>
        </nav>

        {/* Content Pane */}
        <main className="settings-content-card">
          {/* 1. Student Profile */}
          {activeTab === 'profile' && (
            <div className="settings-section-pane">
              <div className="section-pane-header">
                <h2 className="pane-title">Student Profile Details</h2>
                <p className="pane-sub">Verify and update your academic identity information</p>
              </div>

              <div className="profile-identity-card">
                <img src={currentUser.avatar} alt={currentUser.name} className="profile-large-avatar" />
                <div className="profile-identity-meta">
                  <h3 className="profile-student-name">{currentUser.name}</h3>
                  <div className="id-pill-row">
                    <span className="protected-id-badge">Student ID: {currentUser.id} (Official)</span>
                    <span className="role-tag">{currentUser.role}</span>
                  </div>
                  <p className="profile-dept-sub">{currentUser.department} • {currentUser.batch}</p>
                </div>
              </div>

              <div className="settings-fields-grid">
                <div className="settings-field-group">
                  <label htmlFor="settings-full-name" className="field-label-text">Full Name</label>
                  <input
                    id="settings-full-name"
                    type="text"
                    className="settings-text-input"
                    value={formData.name}
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                  />
                </div>

                <div className="settings-field-group">
                  <label htmlFor="settings-college-email" className="field-label-text">College Email</label>
                  <input
                    id="settings-college-email"
                    type="email"
                    className="settings-text-input"
                    value={formData.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                  />
                </div>

                <div className="settings-field-group">
                  <label htmlFor="settings-academic-dept" className="field-label-text">Academic Department</label>
                  <input
                    id="settings-academic-dept"
                    type="text"
                    className="settings-text-input"
                    value={formData.department}
                    onChange={(e) => handleFieldChange('department', e.target.value)}
                  />
                </div>

                <div className="settings-field-group">
                  <label htmlFor="settings-class-batch" className="field-label-text">Batch & Section</label>
                  <input
                    id="settings-class-batch"
                    type="text"
                    className="settings-text-input"
                    value={formData.batch}
                    onChange={(e) => handleFieldChange('batch', e.target.value)}
                  />
                </div>

                <div className="settings-field-group full-span">
                  <label htmlFor="settings-bio-statement" className="field-label-text">Academic Bio & Goals</label>
                  <textarea
                    id="settings-bio-statement"
                    rows={3}
                    className="settings-textarea-input"
                    value={formData.bio}
                    onChange={(e) => handleFieldChange('bio', e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* 2. Notifications */}
          {activeTab === 'notifications' && (
            <div className="settings-section-pane">
              <div className="section-pane-header">
                <h2 className="pane-title">Notification Alerts & Channels</h2>
                <p className="pane-sub">Choose how and when you receive course alerts and deadline updates</p>
              </div>

              <div className="toggles-stack">
                <div className="toggle-row-item">
                  <div>
                    <strong className="toggle-title">Assignment Due Date Reminders</strong>
                    <p className="toggle-sub">Receive alerts 24 hours and 2 hours before submission deadlines</p>
                  </div>
                  <label className="switch-control">
                    <input
                      type="checkbox"
                      checked={formData.notifyDeadline}
                      onChange={(e) => handleFieldChange('notifyDeadline', e.target.checked)}
                    />
                    <span className="switch-slider" />
                  </label>
                </div>

                <div className="toggle-row-item">
                  <div>
                    <strong className="toggle-title">Class Schedule Updates & Cancellations</strong>
                    <p className="toggle-sub">Immediate push notifications when timetable timings or rooms change</p>
                  </div>
                  <label className="switch-control">
                    <input
                      type="checkbox"
                      checked={formData.notifySchedule}
                      onChange={(e) => handleFieldChange('notifySchedule', e.target.checked)}
                    />
                    <span className="switch-slider" />
                  </label>
                </div>

                <div className="toggle-row-item">
                  <div>
                    <strong className="toggle-title">Direct Messages from Classmates & Teachers</strong>
                    <p className="toggle-sub">Notify when an instructor replies to your course question</p>
                  </div>
                  <label className="switch-control">
                    <input
                      type="checkbox"
                      checked={formData.notifyMessages}
                      onChange={(e) => handleFieldChange('notifyMessages', e.target.checked)}
                    />
                    <span className="switch-slider" />
                  </label>
                </div>

                <div className="toggle-row-item">
                  <div>
                    <strong className="toggle-title">Campus & College Announcements</strong>
                    <p className="toggle-sub">Official notices from Vidya Academy academic administration</p>
                  </div>
                  <label className="switch-control">
                    <input
                      type="checkbox"
                      checked={formData.notifyAnnouncements}
                      onChange={(e) => handleFieldChange('notifyAnnouncements', e.target.checked)}
                    />
                    <span className="switch-slider" />
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* 3. Appearance */}
          {activeTab === 'appearance' && (
            <div className="settings-section-pane">
              <div className="section-pane-header">
                <h2 className="pane-title">Interface Appearance & Accessibility</h2>
                <p className="pane-sub">Customize the visual density and display options</p>
              </div>

              <div className="appearance-options-grid">
                <div className="appearance-theme-card active-card">
                  <div className="theme-preview-box default-theme" />
                  <strong>Forest Green & Soft Pastel (Official Default)</strong>
                  <p>Harmonized emerald green sidebar with floating white dashboard card</p>
                </div>

                <div className="appearance-theme-card">
                  <div className="theme-preview-box slate-theme" />
                  <strong>Midnight Contrast (Experimental)</strong>
                  <p>Dark mode variant for late-night laboratory study sessions</p>
                </div>
              </div>

              <div className="toggles-stack" style={{ marginTop: '20px' }}>
                <div className="toggle-row-item">
                  <div>
                    <strong className="toggle-title">Compact Card Density</strong>
                    <p className="toggle-sub">Condense padding and vertical margins to view more rows simultaneously</p>
                  </div>
                  <label className="switch-control">
                    <input
                      type="checkbox"
                      checked={formData.compactMode}
                      onChange={(e) => handleFieldChange('compactMode', e.target.checked)}
                    />
                    <span className="switch-slider" />
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* 4. Privacy & Sharing */}
          {activeTab === 'privacy' && (
            <div className="settings-section-pane">
              <div className="section-pane-header">
                <h2 className="pane-title">Student Privacy & Visibility</h2>
                <p className="pane-sub">Control what information your classmates and instructors can view</p>
              </div>

              <div className="toggles-stack">
                <div className="toggle-row-item">
                  <div>
                    <strong className="toggle-title">Show Active / Online Indicator</strong>
                    <p className="toggle-sub">Display the green dot in Friends and Online Users lists when you are active</p>
                  </div>
                  <label className="switch-control">
                    <input
                      type="checkbox"
                      checked={formData.privacyShowOnline}
                      onChange={(e) => handleFieldChange('privacyShowOnline', e.target.checked)}
                    />
                    <span className="switch-slider" />
                  </label>
                </div>

                <div className="toggle-row-item">
                  <div>
                    <strong className="toggle-title">Share Enrolled Courses on Student Profile</strong>
                    <p className="toggle-sub">Allow study group members to view common course enrollments</p>
                  </div>
                  <label className="switch-control">
                    <input
                      type="checkbox"
                      checked={formData.privacyShowCourses}
                      onChange={(e) => handleFieldChange('privacyShowCourses', e.target.checked)}
                    />
                    <span className="switch-slider" />
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* 5. Account Security (Demo) */}
          {activeTab === 'account' && (
            <div className="settings-section-pane">
              <div className="section-pane-header">
                <h2 className="pane-title">Account Security & Credentials</h2>
                <p className="pane-sub">Interactive demonstration of college identity security settings</p>
              </div>

              <div className="demo-notice-alert">
                <AlertTriangle size={16} className="text-amber" />
                <span>
                  <strong>Interactive Demo Note:</strong> This form demonstrates the password change workflow for the Canvas2Code user experience. No external authentication backend is connected.
                </span>
              </div>

              <form className="password-change-form" onSubmit={handlePasswordSubmit}>
                <div className="settings-field-group">
                  <label htmlFor="settings-curr-pass" className="field-label-text">Current Password</label>
                  <input
                    id="settings-curr-pass"
                    type="password"
                    placeholder="••••••••••••"
                    className="settings-text-input"
                    value={passwordState.current}
                    onChange={(e) => setPasswordState({ ...passwordState, current: e.target.value })}
                  />
                </div>

                <div className="settings-field-group">
                  <label htmlFor="settings-new-pass" className="field-label-text">New Password</label>
                  <input
                    id="settings-new-pass"
                    type="password"
                    placeholder="Enter at least 8 characters"
                    className="settings-text-input"
                    value={passwordState.newPass}
                    onChange={(e) => setPasswordState({ ...passwordState, newPass: e.target.value })}
                  />
                </div>

                <div className="settings-field-group">
                  <label htmlFor="settings-confirm-pass" className="field-label-text">Confirm New Password</label>
                  <input
                    id="settings-confirm-pass"
                    type="password"
                    placeholder="Repeat new password"
                    className="settings-text-input"
                    value={passwordState.confirmPass}
                    onChange={(e) => setPasswordState({ ...passwordState, confirmPass: e.target.value })}
                  />
                </div>

                {passwordState.message && (
                  <div className="password-status-message">
                    {passwordState.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="password-submit-btn"
                >
                  Update Password (Demo)
                </button>
              </form>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
