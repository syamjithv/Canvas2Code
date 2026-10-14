import React, { useState, useMemo } from 'react';
import { Search, ArrowLeft, RotateCcw, BookOpen } from 'lucide-react';
import { CourseCard } from '../CourseCard';
import { coursesData } from '../../data/courses';

export function AllCoursesPage({ onSelectCourse, onBack }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = course.title.toLowerCase().includes(query);
        const matchesTeacher = course.teacher.toLowerCase().includes(query);
        const matchesBatch = course.batch.toLowerCase().includes(query);
        if (!matchesTitle && !matchesTeacher && !matchesBatch) return false;
      }
      if (selectedLevel && course.level !== selectedLevel) return false;
      if (selectedType && course.type !== selectedType) return false;
      if (selectedTime && course.time !== selectedTime) return false;
      return true;
    });
  }, [searchQuery, selectedLevel, selectedType, selectedTime]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedLevel('');
    setSelectedType('');
    setSelectedTime('');
  };

  const hasActiveFilters = searchQuery || selectedLevel || selectedType || selectedTime;

  return (
    <div className="catalogue-page-container">
      {/* Header with Back button and Title */}
      <div className="catalogue-header-row">
        <div className="catalogue-header-left">
          <button
            type="button"
            className="back-to-dashboard-btn"
            onClick={onBack}
            aria-label="Back to Dashboard"
          >
            <ArrowLeft size={18} strokeWidth={2.4} />
            <span>Back to Dashboard</span>
          </button>
          <div className="catalogue-title-stack">
            <h1 className="catalogue-main-title">All Courses</h1>
            <p className="catalogue-subtitle">
              Comprehensive curriculum catalogue for CSE B 2022 Batch • {coursesData.length} Subjects
            </p>
          </div>
        </div>

        <div className="catalogue-count-badge">
          <BookOpen size={16} />
          <span>{filteredCourses.length} of {coursesData.length} Courses</span>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="catalogue-controls-card">
        <div className="catalogue-search-wrapper">
          <Search size={18} className="catalogue-search-icon" />
          <input
            type="text"
            className="catalogue-search-input"
            placeholder="Search by course title, instructor, or batch..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="catalogue-dropdowns-row">
          <select
            className="catalogue-filter-select"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            aria-label="Filter by level"
          >
            <option value="">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <select
            className="catalogue-filter-select"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            aria-label="Filter by type"
          >
            <option value="">All Types</option>
            <option value="Core">Core</option>
            <option value="Elective">Elective</option>
          </select>

          <select
            className="catalogue-filter-select"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            aria-label="Filter by schedule"
          >
            <option value="">All Schedules</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>

          {hasActiveFilters && (
            <button
              type="button"
              className="catalogue-reset-btn"
              onClick={handleReset}
              aria-label="Reset all search filters"
            >
              <RotateCcw size={14} />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="courses-grid">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onSelect={onSelectCourse}
            />
          ))}
        </div>
      ) : (
        <div className="catalogue-empty-state">
          <BookOpen size={48} className="empty-icon text-muted" />
          <h2 className="empty-title">No matching courses found</h2>
          <p className="empty-desc">
            No subjects matched your current search &ldquo;{searchQuery}&rdquo; and filter criteria.
          </p>
          <button
            type="button"
            className="catalogue-reset-btn"
            style={{ margin: '14px auto 0 auto', padding: '8px 18px' }}
            onClick={handleReset}
          >
            <RotateCcw size={15} />
            <span>Clear Filters & Show All Courses</span>
          </button>
        </div>
      )}
    </div>
  );
}
