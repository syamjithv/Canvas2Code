import React, { useEffect } from 'react';
import { X, BookOpen, Clock, BarChart, CheckCircle } from 'lucide-react';
import { CardIllustration } from './CardIllustrations';

export function CourseModal({ course, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!course) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div
        className="course-modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ borderTop: `6px solid ${course.buttonColor}` }}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-illustration-thumb">
            <CardIllustration theme={course.theme} />
          </div>
          <div className="modal-header-text">
            <span className="modal-batch-tag">{course.batch}</span>
            <h2 id="modal-title" className="modal-title">{course.title}</h2>
            <p className="modal-teacher">Created by {course.teacher}</p>
          </div>
        </div>

        <div className="modal-body">
          <p className="modal-desc">{course.description}</p>

          <div className="modal-grid-stats">
            <div className="stat-card">
              <Clock size={18} className="stat-icon" />
              <div>
                <span className="stat-label">Schedule</span>
                <span className="stat-value">{course.time}</span>
              </div>
            </div>
            <div className="stat-card">
              <BarChart size={18} className="stat-icon" />
              <div>
                <span className="stat-label">Level</span>
                <span className="stat-value">{course.level}</span>
              </div>
            </div>
            <div className="stat-card">
              <BookOpen size={18} className="stat-icon" />
              <div>
                <span className="stat-label">Modules</span>
                <span className="stat-value">{course.modules} Units</span>
              </div>
            </div>
            <div className="stat-card">
              <CheckCircle size={18} className="stat-icon" />
              <div>
                <span className="stat-label">Progress</span>
                <span className="stat-value">{course.progress}%</span>
              </div>
            </div>
          </div>

          <div className="modal-progress-container">
            <div className="modal-progress-label">
              <span>Course Completion</span>
              <span>{course.progress}%</span>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{
                  width: `${course.progress}%`,
                  backgroundColor: course.buttonColor
                }}
              />
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button
            type="button"
            className="modal-action-btn"
            style={{ backgroundColor: course.buttonColor }}
            onClick={onClose}
          >
            Enter Classroom
          </button>
        </div>
      </div>
    </div>
  );
}
