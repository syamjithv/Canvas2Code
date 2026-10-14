import React from 'react';
import { CourseCard } from './CourseCard';
import { SearchX } from 'lucide-react';

export function CourseGrid({ courses, onSelectCourse, onResetFilters }) {
  if (courses.length === 0) {
    return (
      <div className="empty-courses-state">
        <SearchX size={44} className="empty-search-icon" />
        <h3 className="empty-title">No courses found</h3>
        <p className="empty-desc">
          We couldn't find any courses matching your search or active filters.
        </p>
        <button
          type="button"
          className="empty-reset-btn"
          onClick={onResetFilters}
        >
          Clear filters and search
        </button>
      </div>
    );
  }

  return (
    <div className="courses-grid" role="region" aria-label="Course Cards Grid">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          onSelect={onSelectCourse}
        />
      ))}
    </div>
  );
}
