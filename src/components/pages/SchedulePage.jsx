import React, { useState } from 'react';
import {
  ArrowLeft,
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  User,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  X
} from 'lucide-react';

const scheduleData = {
  Mon: [
    { id: 'sch-1', time: '09:00 AM - 10:30 AM', title: 'Artificial Intelligence', teacher: 'Mr. Felix', room: 'Computing Lab 3', type: 'Lecture & Lab', color: '#ac62d1', topic: 'State Space Search & A* Algorithm' },
    { id: 'sch-2', time: '10:45 AM - 12:15 PM', title: 'Operating Systems', teacher: 'Ms. Nancy', room: 'Lecture Hall B', type: 'Lecture', color: '#e87a79', topic: 'Process Scheduling & MLFQ Queues' },
    { id: 'sch-3', time: '01:15 PM - 02:45 PM', title: 'Web Programming', teacher: 'Ms. Williams', room: 'Terminal Room 1', type: 'Hands-on Lab', color: '#e87a79', topic: 'React Custom Hooks & Reducer Architecture' },
    { id: 'sch-4', time: '03:00 PM - 04:30 PM', title: 'Cloud Computing', teacher: 'Mr. Alex', room: 'Room 108', type: 'Tutorial', color: '#bc5be0', topic: 'Containerization & Dockerfile Layer Optimization' }
  ],
  Tue: [
    { id: 'sch-5', time: '09:00 AM - 10:30 AM', title: 'Software Engineering', teacher: 'Ms. Susan', room: 'Room 202', type: 'Lecture', color: '#e87a79', topic: 'SOLID Principles & Factory Pattern' },
    { id: 'sch-6', time: '10:45 AM - 12:15 PM', title: 'Graphic Designing', teacher: 'Ms. Betsy', room: 'Design Studio Lab', type: 'Studio Session', color: '#e87a79', topic: 'Vector Bézier Curves & Composition' },
    { id: 'sch-7', time: '01:15 PM - 02:45 PM', title: 'Artificial Intelligence', teacher: 'Mr. Felix', room: 'Room 204', type: 'Theory', color: '#ac62d1', topic: 'Propositional & First-Order Logic' },
    { id: 'sch-8', time: '03:00 PM - 04:30 PM', title: 'Operating Systems', teacher: 'Ms. Nancy', room: 'OS Systems Lab', type: 'Kernel Lab', color: '#e87a79', topic: 'Kernel Dual-Mode Context Switching' }
  ],
  Wed: [
    { id: 'sch-9', time: '09:00 AM - 10:30 AM', title: 'Cloud Computing', teacher: 'Mr. Alex', room: 'Cloud Innovation Center', type: 'Lab', color: '#bc5be0', topic: 'Kubernetes Pod Manifests & Rolling Updates' },
    { id: 'sch-10', time: '10:45 AM - 12:15 PM', title: 'Web Programming', teacher: 'Ms. Williams', room: 'Computing Lab 1', type: 'Workshop', color: '#e87a79', topic: 'RESTful API Integration & Client Caching' },
    { id: 'sch-11', time: '01:15 PM - 02:45 PM', title: 'Software Engineering', teacher: 'Ms. Susan', room: 'Room 202', type: 'Workshop', color: '#e87a79', topic: 'Unit Testing & Automated Test Pyramids' }
  ],
  Thu: [
    { id: 'sch-12', time: '09:00 AM - 10:30 AM', title: 'Operating Systems', teacher: 'Ms. Nancy', room: 'Lecture Hall B', type: 'Lecture', color: '#e87a79', topic: 'Concurrency & Deadlock Banker Algorithm' },
    { id: 'sch-13', time: '10:45 AM - 12:15 PM', title: 'Artificial Intelligence', teacher: 'Mr. Felix', room: 'AI Research Lab', type: 'Lab Session', color: '#ac62d1', topic: 'Multi-Layer Perceptron Backpropagation' },
    { id: 'sch-14', time: '01:15 PM - 02:45 PM', title: 'Graphic Designing', teacher: 'Ms. Betsy', room: 'Studio Lab', type: 'Practical', color: '#e87a79', topic: 'Color Harmonies & Contrast Ratios' }
  ],
  Fri: [
    { id: 'sch-15', time: '09:00 AM - 10:30 AM', title: 'Web Programming', teacher: 'Ms. Williams', room: 'Computing Lab 1', type: 'Project Review', color: '#e87a79', topic: 'Sprint Milestone Demo & Code Review' },
    { id: 'sch-16', time: '10:45 AM - 12:15 PM', title: 'Software Engineering', teacher: 'Ms. Susan', room: 'Room 202', type: 'Case Study', color: '#e87a79', topic: 'Architectural Styles & Microservices' },
    { id: 'sch-17', time: '01:15 PM - 02:45 PM', title: 'Cloud Computing', teacher: 'Mr. Alex', room: 'Room 108', type: 'Lecture', color: '#bc5be0', topic: 'Serverless Functions & Event-Driven Triggers' }
  ],
  Sat: [
    { id: 'sch-18', time: '09:30 AM - 11:30 AM', title: 'Graphic Designing', teacher: 'Ms. Betsy', room: 'Design Studio Lab', type: 'Portfolio Workshop', color: '#e87a79', topic: 'Design System Tokens & Brand Handoff' },
    { id: 'sch-19', time: '11:45 AM - 01:15 PM', title: 'Academic Mentorship', teacher: 'Faculty Advisor', room: 'Seminar Hall', type: 'Advisory Session', color: '#10b981', topic: 'Term Review & Capstone Preparation' }
  ]
};

const days = [
  { key: 'Mon', label: 'Monday', date: 'Dec 8' },
  { key: 'Tue', label: 'Tuesday', date: 'Dec 9' },
  { key: 'Wed', label: 'Wednesday', date: 'Dec 10' },
  { key: 'Thu', label: 'Thursday', date: 'Dec 11' },
  { key: 'Fri', label: 'Friday', date: 'Dec 12' },
  { key: 'Sat', label: 'Saturday', date: 'Dec 13' }
];

export function SchedulePage({ onBack, onSelectCourseTitle }) {
  const [selectedDay, setSelectedDay] = useState('Mon');
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedClass, setSelectedClass] = useState(null);

  const classesToday = scheduleData[selectedDay] || [];

  return (
    <div className="schedule-page-container">
      {/* Header */}
      <div className="schedule-header-row">
        <div className="schedule-header-left">
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
            <h1 className="schedule-main-title">Class Schedule & Timetable</h1>
            <p className="schedule-subtitle">
              Academic timetable for CSE B 2022 Batch • Semester 5
            </p>
          </div>
        </div>

        {/* Week Switcher */}
        <div className="week-switcher-box">
          <button
            type="button"
            className="week-nav-arrow"
            onClick={() => setWeekOffset((p) => p - 1)}
            aria-label="Previous week"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="week-label">
            {weekOffset === 0 ? 'Current Week (Dec 8 – 14, 2025)' : `Week ${14 + weekOffset}`}
          </span>
          <button
            type="button"
            className="week-nav-arrow"
            onClick={() => setWeekOffset((p) => p + 1)}
            aria-label="Next week"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Day Selector Tabs */}
      <div className="schedule-days-bar">
        {days.map((day) => {
          const isSelected = selectedDay === day.key;
          const count = scheduleData[day.key]?.length || 0;

          return (
            <button
              key={day.key}
              type="button"
              className={`schedule-day-tab ${isSelected ? 'day-is-active' : ''}`}
              onClick={() => setSelectedDay(day.key)}
            >
              <span className="day-name">{day.label}</span>
              <span className="day-date">{day.date}</span>
              <span className="day-classes-count">{count} Classes</span>
            </button>
          );
        })}
      </div>

      {/* Classes Timetable List */}
      <div className="classes-timeline-stack">
        {classesToday.length > 0 ? (
          classesToday.map((item) => (
            <div
              key={item.id}
              className="class-card-row"
              onClick={() => setSelectedClass(item)}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${item.title}`}
              style={{ borderLeft: `5px solid ${item.color}` }}
            >
              <div className="class-time-block">
                <Clock size={16} className="text-green" />
                <span className="class-time-text">{item.time}</span>
                <span className="class-type-pill">{item.type}</span>
              </div>

              <div className="class-info-block">
                <h3 className="class-title-text">{item.title}</h3>
                <p className="class-topic-sub">Topic: {item.topic}</p>
              </div>

              <div className="class-location-meta">
                <span className="class-instructor">
                  <User size={14} /> {item.teacher}
                </span>
                <span className="class-room">
                  <MapPin size={14} /> {item.room}
                </span>
              </div>

              <div className="class-action-link">
                <span>Class Details</span>
                <ChevronRight size={16} />
              </div>
            </div>
          ))
        ) : (
          <div className="no-classes-card">
            <CalendarIcon size={44} className="text-muted" />
            <h3>No classes scheduled for {days.find((d) => d.key === selectedDay)?.label}</h3>
            <p>Use this time for self-study and laboratory coursework reviews.</p>
          </div>
        )}
      </div>

      {/* Class Details Modal */}
      {selectedClass && (
        <div
          className="class-modal-backdrop"
          onClick={() => setSelectedClass(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="class-modal-title"
        >
          <div className="class-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="class-modal-header" style={{ borderTop: `5px solid ${selectedClass.color}` }}>
              <div>
                <span className="class-modal-tag">{selectedClass.type} • CSE B 2022</span>
                <h2 id="class-modal-title" className="class-modal-title">{selectedClass.title}</h2>
              </div>
              <button
                type="button"
                className="modal-close-icon-btn"
                onClick={() => setSelectedClass(null)}
                aria-label="Close details"
              >
                <X size={20} />
              </button>
            </div>

            <div className="class-modal-body">
              <div className="class-meta-grid">
                <div className="meta-tile">
                  <Clock size={18} style={{ color: selectedClass.color }} />
                  <div>
                    <span className="tile-label">Scheduled Time</span>
                    <strong>{selectedClass.time}</strong>
                  </div>
                </div>

                <div className="meta-tile">
                  <User size={18} style={{ color: selectedClass.color }} />
                  <div>
                    <span className="tile-label">Instructor</span>
                    <strong>{selectedClass.teacher}</strong>
                  </div>
                </div>

                <div className="meta-tile">
                  <MapPin size={18} style={{ color: selectedClass.color }} />
                  <div>
                    <span className="tile-label">Campus Room</span>
                    <strong>{selectedClass.room}</strong>
                  </div>
                </div>
              </div>

              <div className="class-topic-box">
                <h4>Today's Syllabus Topic</h4>
                <p>{selectedClass.topic}</p>
              </div>

              <div className="demo-notice-alert">
                <strong>Schedule Demonstration:</strong> Real-time classroom attendance, video conferencing links, and physical room sensors integrate automatically during active college sessions.
              </div>
            </div>

            <div className="class-modal-footer">
              <button
                type="button"
                className="modal-secondary-btn"
                onClick={() => setSelectedClass(null)}
              >
                Close
              </button>

              <button
                type="button"
                className="modal-primary-btn"
                style={{ backgroundColor: selectedClass.color }}
                onClick={() => {
                  const t = selectedClass.title;
                  setSelectedClass(null);
                  if (onSelectCourseTitle) onSelectCourseTitle(t);
                }}
              >
                <BookOpen size={16} />
                <span>Go to Course Details</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
