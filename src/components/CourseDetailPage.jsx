import React, { useState } from 'react';
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  Circle,
  PlayCircle,
  FileText,
  Code2,
  X,
  ChevronRight,
  ChevronDown,
  GraduationCap,
  Sparkles,
  Award
} from 'lucide-react';
import { CardIllustration } from './CardIllustrations';
import { courseCurriculumData } from '../data/courseDetails';

export function CourseDetailPage({ course, onBack }) {
  const curriculum = courseCurriculumData[course.id] || {
    syllabus: course.description,
    prerequisites: 'Foundational Knowledge',
    credits: 3,
    totalHours: '36 Hours',
    modules: []
  };

  // State to track completed lesson IDs dynamically per course
  const [completedLessons, setCompletedLessons] = useState(() => {
    const initialCompleted = new Set();
    curriculum.modules.forEach((mod) => {
      mod.lessons.forEach((l) => {
        if (l.completed) initialCompleted.add(l.id);
      });
    });
    return initialCompleted;
  });

  // State for active lesson viewed in the demo panel
  const [activeLesson, setActiveLesson] = useState(null);

  // State for expanded module accordions
  const [expandedModules, setExpandedModules] = useState(() => {
    const initial = {};
    curriculum.modules.forEach((m) => {
      initial[m.id] = true; // All open by default
    });
    return initial;
  });

  // Calculate dynamic progress
  const totalLessons = curriculum.modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedCount = completedLessons.size;
  const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  const toggleLessonComplete = (lessonId, e) => {
    if (e) e.stopPropagation();
    setCompletedLessons((prev) => {
      const next = new Set(prev);
      if (next.has(lessonId)) {
        next.delete(lessonId);
      } else {
        next.add(lessonId);
      }
      return next;
    });
  };

  const toggleModule = (moduleId) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  // Flattened lessons for next/prev navigation inside the lesson panel
  const allLessons = curriculum.modules.flatMap((m) => m.lessons);
  const currentLessonIndex = activeLesson ? allLessons.findIndex((l) => l.id === activeLesson.id) : -1;

  const handleNextLesson = () => {
    if (currentLessonIndex >= 0 && currentLessonIndex < allLessons.length - 1) {
      setActiveLesson(allLessons[currentLessonIndex + 1]);
    }
  };

  const handlePrevLesson = () => {
    if (currentLessonIndex > 0) {
      setActiveLesson(allLessons[currentLessonIndex - 1]);
    }
  };

  const getLessonIcon = (type) => {
    switch (type) {
      case 'video':
        return <PlayCircle size={17} className="lesson-type-icon text-indigo" />;
      case 'reading':
        return <FileText size={17} className="lesson-type-icon text-amber" />;
      case 'interactive':
      default:
        return <Code2 size={17} className="lesson-type-icon text-teal" />;
    }
  };

  return (
    <div className="course-detail-view" style={{ '--course-accent': course.buttonColor, '--course-bg': course.bgColor }}>
      {/* Top Navigation Bar with Back Button */}
      <div className="detail-top-nav">
        <button
          type="button"
          className="back-to-dashboard-btn"
          onClick={onBack}
          aria-label="Back to Dashboard"
        >
          <ArrowLeft size={18} strokeWidth={2.4} />
          <span>Back to Dashboard</span>
        </button>

        <div className="detail-breadcrumb">
          <span className="crumb-root" onClick={onBack} role="button" tabIndex={0}>Courses</span>
          <span className="crumb-sep">/</span>
          <span className="crumb-active">{course.title}</span>
        </div>
      </div>

      {/* Course Hero Banner with Artwork */}
      <section className="course-hero-banner" style={{ backgroundColor: course.bgColor }}>
        <div className="hero-illustration-bg" aria-hidden="true">
          <CardIllustration theme={course.theme} />
        </div>

        <div className="hero-content">
          <div className="hero-tags-row">
            <span className="hero-badge hero-batch-badge">{course.batch}</span>
            <span className="hero-badge hero-type-badge">{course.type} Course</span>
            <span className="hero-badge hero-level-badge">{course.level}</span>
          </div>

          <h1 className="hero-course-title">{course.title}</h1>
          <p className="hero-course-desc">{course.description}</p>

          <div className="hero-meta-grid">
            <div className="hero-meta-item">
              <GraduationCap size={18} className="hero-meta-icon" />
              <div>
                <span className="meta-sub">Instructor</span>
                <strong className="meta-val">{course.teacher}</strong>
              </div>
            </div>

            <div className="hero-meta-item">
              <Clock size={18} className="hero-meta-icon" />
              <div>
                <span className="meta-sub">Schedule</span>
                <strong className="meta-val">{course.time}</strong>
              </div>
            </div>

            <div className="hero-meta-item">
              <Award size={18} className="hero-meta-icon" />
              <div>
                <span className="meta-sub">Credits & Total</span>
                <strong className="meta-val">{curriculum.credits} Credits • {curriculum.totalHours}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Progress Section */}
      <section className="detail-progress-card">
        <div className="detail-progress-header">
          <div>
            <h2 className="progress-card-title">Course Completion</h2>
            <p className="progress-card-sub">
              {completedCount} of {totalLessons} lessons completed
            </p>
          </div>
          <div className="progress-badge-large" style={{ color: course.buttonColor }}>
            {progressPercent}%
          </div>
        </div>

        <div className="progress-track-wrapper">
          <div
            className="progress-fill-bar"
            style={{
              width: `${progressPercent}%`,
              backgroundColor: course.buttonColor
            }}
          />
        </div>
      </section>

      {/* Main Content Layout: Syllabus info + Modules List */}
      <div className="detail-main-layout">
        <div className="detail-modules-column">
          <div className="section-title-row">
            <h2 className="section-heading">Course Curriculum</h2>
            <span className="modules-count-pill">{curriculum.modules.length} Modules</span>
          </div>

          <div className="modules-stack">
            {curriculum.modules.map((module) => {
              const isExpanded = !!expandedModules[module.id];
              const moduleLessonsCompleted = module.lessons.filter((l) => completedLessons.has(l.id)).length;

              return (
                <div key={module.id} className="module-card">
                  <button
                    type="button"
                    className="module-header-btn"
                    onClick={() => toggleModule(module.id)}
                    aria-expanded={isExpanded}
                  >
                    <div className="module-title-left">
                      <span className="module-expand-chevron">
                        {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                      </span>
                      <div>
                        <h3 className="module-title-text">{module.title}</h3>
                        <p className="module-subtext">{module.description}</p>
                      </div>
                    </div>

                    <div className="module-header-meta">
                      <span className="module-progress-chip">
                        {moduleLessonsCompleted}/{module.lessons.length} done
                      </span>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="module-lessons-list">
                      {module.lessons.map((lesson) => {
                        const isDone = completedLessons.has(lesson.id);
                        const isSelected = activeLesson?.id === lesson.id;

                        return (
                          <div
                            key={lesson.id}
                            className={`lesson-row-item ${isDone ? 'is-completed' : ''} ${isSelected ? 'is-selected' : ''}`}
                            onClick={() => setActiveLesson(lesson)}
                            tabIndex={0}
                            role="button"
                            aria-label={`Open lesson ${lesson.title}`}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                setActiveLesson(lesson);
                              }
                            }}
                          >
                            <button
                              type="button"
                              className="lesson-checkbox-btn"
                              onClick={(e) => toggleLessonComplete(lesson.id, e)}
                              aria-label={isDone ? 'Mark lesson incomplete' : 'Mark lesson complete'}
                            >
                              {isDone ? (
                                <CheckCircle2 size={20} className="check-icon-done" style={{ color: course.buttonColor }} />
                              ) : (
                                <Circle size={20} className="check-icon-todo" />
                              )}
                            </button>

                            <div className="lesson-info-content">
                              <div className="lesson-title-line">
                                <span className="lesson-type-badge">{getLessonIcon(lesson.type)}</span>
                                <span className="lesson-title-name">{lesson.title}</span>
                              </div>
                              <span className="lesson-duration-tag">
                                <Clock size={12} /> {lesson.duration}
                              </span>
                            </div>

                            <button
                              type="button"
                              className="lesson-open-arrow-btn"
                              aria-label="View lesson contents"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveLesson(lesson);
                              }}
                            >
                              <ChevronRight size={18} />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar Info Card: Overview, Prerequisites, Resources */}
        <aside className="detail-sidebar-column">
          <div className="detail-info-box">
            <h3 className="box-title">About this Course</h3>
            <p className="box-text">{curriculum.syllabus}</p>

            <div className="box-divider" />

            <h4 className="box-subtitle">Prerequisites</h4>
            <p className="box-text">{curriculum.prerequisites}</p>

            <div className="box-divider" />

            <h4 className="box-subtitle">Instructional Highlights</h4>
            <ul className="box-list">
              <li>Verified department syllabus aligned with batch CSE B 2022.</li>
              <li>Hands-on practical assessments and conceptual milestones.</li>
              <li>Interactive digital notes with self-paced progress tracking.</li>
            </ul>

            <button
              type="button"
              className="quick-resume-btn"
              style={{ backgroundColor: course.buttonColor }}
              onClick={() => {
                const firstIncomplete = allLessons.find((l) => !completedLessons.has(l.id)) || allLessons[0];
                if (firstIncomplete) setActiveLesson(firstIncomplete);
              }}
            >
              <Sparkles size={16} />
              <span>Continue Learning</span>
            </button>
          </div>
        </aside>
      </div>

      {/* Lesson View Interactive Panel (Modal Drawer) */}
      {activeLesson && (
        <div
          className="lesson-panel-backdrop"
          onClick={() => setActiveLesson(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lesson-panel-title"
        >
          <div
            className="lesson-panel-card"
            onClick={(e) => e.stopPropagation()}
            style={{ borderTop: `5px solid ${course.buttonColor}` }}
          >
            <div className="lesson-panel-header">
              <div className="panel-header-titles">
                <span className="panel-course-name">{course.title} • {course.batch}</span>
                <h3 id="lesson-panel-title" className="panel-lesson-title">
                  {activeLesson.title}
                </h3>
                <span className="panel-duration-pill">
                  <Clock size={13} /> {activeLesson.duration} • Demo Lesson
                </span>
              </div>

              <button
                type="button"
                className="panel-close-btn"
                onClick={() => setActiveLesson(null)}
                aria-label="Close lesson details"
              >
                <X size={20} />
              </button>
            </div>

            <div className="lesson-panel-body">
              <div className="lesson-content-block">
                <h4 className="content-block-heading">Overview & Summary</h4>
                <p className="content-block-p">{activeLesson.summary}</p>
              </div>

              <div className="lesson-content-block highlighted-notes">
                <h4 className="content-block-heading">Key Technical Takeaways</h4>
                <p className="content-block-p">{activeLesson.notes}</p>
              </div>

              <div className="lesson-content-block exercise-block">
                <h4 className="content-block-heading">Guided Practice Exercise</h4>
                <p className="content-block-p">{activeLesson.exercise}</p>
              </div>

              <div className="demo-notice-alert">
                <strong>Interactive Demo Note:</strong> This lesson view demonstrates student learning materials in the Canvas2Code prototype. Completing exercises dynamically updates your course completion percentage on the dashboard.
              </div>
            </div>

            <div className="lesson-panel-footer">
              <div className="footer-nav-buttons">
                <button
                  type="button"
                  className="lesson-nav-btn prev-btn"
                  onClick={handlePrevLesson}
                  disabled={currentLessonIndex <= 0}
                >
                  Previous Lesson
                </button>
                <button
                  type="button"
                  className="lesson-nav-btn next-btn"
                  onClick={handleNextLesson}
                  disabled={currentLessonIndex >= allLessons.length - 1}
                >
                  Next Lesson
                </button>
              </div>

              <button
                type="button"
                className={`lesson-toggle-completion-btn ${completedLessons.has(activeLesson.id) ? 'btn-is-complete' : ''}`}
                style={!completedLessons.has(activeLesson.id) ? { backgroundColor: course.buttonColor } : {}}
                onClick={() => toggleLessonComplete(activeLesson.id)}
              >
                {completedLessons.has(activeLesson.id) ? (
                  <>
                    <CheckCircle2 size={18} />
                    <span>Completed (Click to Mark Incomplete)</span>
                  </>
                ) : (
                  <>
                    <Circle size={18} />
                    <span>Mark Lesson Complete</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
