import React, { useEffect } from 'react';
import { X, Mail, MessageSquare, Award, BookOpen } from 'lucide-react';

export function UserModal({ user, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!user) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="user-modal-title">
      <div className="user-modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <div className="user-modal-top">
          <div className="user-modal-avatar-wrap">
            <img src={user.avatar} alt={user.name} className="user-modal-avatar" />
            <span className="user-modal-online-dot" />
          </div>
          <h2 id="user-modal-title" className="user-modal-name">{user.name}</h2>
          <span className="user-modal-id">ID: {user.id.replace('ID: ', '')}</span>
          <span className="user-modal-batch">CSE B 2022 BATCH • Active Now</span>
        </div>

        <div className="user-modal-actions">
          <button type="button" className="user-btn-primary" onClick={onClose}>
            <MessageSquare size={16} />
            <span>Send Message</span>
          </button>
          <button type="button" className="user-btn-secondary" onClick={onClose}>
            <Mail size={16} />
            <span>Email</span>
          </button>
        </div>

        <div className="user-modal-info">
          <div className="info-row">
            <BookOpen size={16} className="info-icon" />
            <span>Enrolled in 6 shared courses</span>
          </div>
          <div className="info-row">
            <Award size={16} className="info-icon" />
            <span>Class Representative • Group B</span>
          </div>
        </div>
      </div>
    </div>
  );
}
