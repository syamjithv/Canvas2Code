import React from 'react';
import { ChevronRight } from 'lucide-react';
import { CardIllustration } from './CardIllustrations';

export function CourseCard({ course, onSelect }) {
  const { title, batch, teacher, buttonColor, theme, bgColor } = course;

  return (
    <article
      className="course-card"
      style={{ backgroundColor: bgColor }}
      onClick={() => onSelect(course)}
      tabIndex={0}
      role="button"
      aria-label={`Open course details for ${title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(course);
        }
      }}
    >
      {/* Abstract Pastel Illustration Area */}
      <div className="card-illustration-container" aria-hidden="true">
        <CardIllustration theme={theme} />
      </div>

      {/* Card Content Overlay */}
      <div className="card-top-content">
        <h2 className="course-title">{title}</h2>
        <p className="course-batch">{batch}</p>
      </div>

      <div className="card-bottom-content">
        <p className="course-teacher">
          Created by <span className="teacher-name">{teacher}</span>
        </p>

        <button
          type="button"
          className="course-action-btn"
          style={{ backgroundColor: buttonColor }}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(course);
          }}
          aria-label={`View ${title} course details`}
        >
          <ChevronRight size={20} strokeWidth={2.6} className="action-arrow" />
        </button>
      </div>
    </article>
  );
}
