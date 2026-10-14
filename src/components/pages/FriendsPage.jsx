import React, { useState } from 'react';
import {
  ArrowLeft,
  Search,
  MessageSquare,
  User,
  GraduationCap,
  Mail,
  ShieldCheck,
  X,
  BookOpen
} from 'lucide-react';
import { onlineUsers } from '../../data/users';

const classmatesData = [
  ...onlineUsers.map((u) => ({
    ...u,
    email: `${u.name.toLowerCase().replace(' ', '.')}@vidya.ac.in`,
    batch: 'CSE B 2022 BATCH',
    attendance: '94%',
    enrolledCourses: ['Artificial Intelligence', 'Operating Systems', 'Web Programming', 'Cloud Computing', 'Software Engineering', 'Graphic Designing']
  })),
  {
    id: '1094993005',
    name: 'David Reynolds',
    avatar: null,
    avatarInitial: 'D',
    status: 'offline',
    major: 'Computer Science',
    email: 'david.reynolds@vidya.ac.in',
    batch: 'CSE B 2022 BATCH',
    attendance: '88%',
    enrolledCourses: ['Artificial Intelligence', 'Operating Systems', 'Web Programming']
  },
  {
    id: '1094551004',
    name: 'Emily Watson',
    avatar: null,
    avatarInitial: 'E',
    status: 'offline',
    major: 'Computer Science',
    email: 'emily.watson@vidya.ac.in',
    batch: 'CSE B 2022 BATCH',
    attendance: '92%',
    enrolledCourses: ['Software Engineering', 'Graphic Designing', 'Cloud Computing']
  }
];

export function FriendsPage({ onBack, onNavigateToMessages }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all', 'online', 'offline'
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents = classmatesData.filter((student) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || student.name.toLowerCase().includes(q) || student.id.includes(q) || student.major.toLowerCase().includes(q);
    const matchesStatus = statusFilter === 'all' || student.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="friends-page-container">
      {/* Header */}
      <div className="friends-header-row">
        <div className="friends-header-left">
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
            <h1 className="friends-main-title">Classmates & Friends</h1>
            <p className="friends-subtitle">
              Connect with fellow students enrolled in CSE B 2022 Batch
            </p>
          </div>
        </div>

        <div className="friends-stats-pill">
          <User size={16} />
          <span>{classmatesData.filter((u) => u.status === 'online').length} Online Now</span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="friends-controls-bar">
        <div className="friends-search-box">
          <Search size={18} className="friends-search-icon" />
          <input
            type="text"
            className="friends-search-input"
            placeholder="Search classmates by name, student ID, or major..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="friends-filter-tabs">
          <button
            type="button"
            className={`filter-tab-pill ${statusFilter === 'all' ? 'is-active' : ''}`}
            onClick={() => setStatusFilter('all')}
          >
            All Classmates ({classmatesData.length})
          </button>
          <button
            type="button"
            className={`filter-tab-pill ${statusFilter === 'online' ? 'is-active' : ''}`}
            onClick={() => setStatusFilter('online')}
          >
            Online ({classmatesData.filter((u) => u.status === 'online').length})
          </button>
          <button
            type="button"
            className={`filter-tab-pill ${statusFilter === 'offline' ? 'is-active' : ''}`}
            onClick={() => setStatusFilter('offline')}
          >
            Offline ({classmatesData.filter((u) => u.status === 'offline').length})
          </button>
        </div>
      </div>

      {/* Friends Cards Grid */}
      <div className="friends-cards-grid">
        {filteredStudents.map((student) => (
          <div key={student.id} className="student-profile-card">
            <div className="student-card-top">
              <div className="student-avatar-box">
                {student.avatar ? (
                  <img src={student.avatar} alt={student.name} className="student-card-img" />
                ) : (
                  <div className="student-card-initial">
                    {student.avatarInitial || student.name.charAt(0)}
                  </div>
                )}
                <span className={`status-indicator-dot ${student.status === 'online' ? 'is-online' : 'is-offline'}`} />
              </div>

              <div className="student-card-text">
                <h3 className="student-name-heading">{student.name}</h3>
                <span className="student-id-tag">ID: {student.id}</span>
                <p className="student-major-sub">{student.major} • {student.batch}</p>
              </div>
            </div>

            <div className="student-card-footer">
              <button
                type="button"
                className="student-action-btn btn-view-profile"
                onClick={() => setSelectedStudent(student)}
              >
                <User size={15} />
                <span>View Profile</span>
              </button>

              <button
                type="button"
                className="student-action-btn btn-send-message"
                onClick={() => onNavigateToMessages && onNavigateToMessages(student)}
              >
                <MessageSquare size={15} />
                <span>Message</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Student Profile Detail Modal */}
      {selectedStudent && (
        <div
          className="student-modal-backdrop"
          onClick={() => setSelectedStudent(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="student-modal-name"
        >
          <div className="student-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="student-modal-header">
              <div className="modal-header-avatar">
                {selectedStudent.avatar ? (
                  <img src={selectedStudent.avatar} alt={selectedStudent.name} className="modal-profile-img" />
                ) : (
                  <div className="student-card-initial large">
                    {selectedStudent.avatarInitial || selectedStudent.name.charAt(0)}
                  </div>
                )}
                <span className={`status-indicator-dot large ${selectedStudent.status === 'online' ? 'is-online' : 'is-offline'}`} />
              </div>

              <div>
                <h2 id="student-modal-name" className="modal-student-name">{selectedStudent.name}</h2>
                <div className="modal-id-row">
                  <span className="student-id-badge">ID: {selectedStudent.id}</span>
                  <span className="student-batch-badge">{selectedStudent.batch}</span>
                </div>
              </div>

              <button
                type="button"
                className="modal-close-icon-btn"
                onClick={() => setSelectedStudent(null)}
                aria-label="Close profile"
              >
                <X size={20} />
              </button>
            </div>

            <div className="student-modal-body">
              <div className="profile-detail-row">
                <div className="detail-field">
                  <GraduationCap size={16} className="text-green" />
                  <div>
                    <span className="field-label">Department & Major</span>
                    <strong className="field-value">{selectedStudent.major}</strong>
                  </div>
                </div>

                <div className="detail-field">
                  <Mail size={16} className="text-green" />
                  <div>
                    <span className="field-label">College Email</span>
                    <strong className="field-value">{selectedStudent.email}</strong>
                  </div>
                </div>

                <div className="detail-field">
                  <ShieldCheck size={16} className="text-green" />
                  <div>
                    <span className="field-label">Term Attendance</span>
                    <strong className="field-value">{selectedStudent.attendance}</strong>
                  </div>
                </div>
              </div>

              <div className="enrolled-courses-section">
                <h3 className="enrolled-title">
                  <BookOpen size={16} />
                  <span>Enrolled Coursework</span>
                </h3>
                <div className="enrolled-chips-wrap">
                  {selectedStudent.enrolledCourses?.map((courseName) => (
                    <span key={courseName} className="course-enrolled-chip">
                      {courseName}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="student-modal-footer">
              <button
                type="button"
                className="modal-msg-btn"
                onClick={() => {
                  const s = selectedStudent;
                  setSelectedStudent(null);
                  if (onNavigateToMessages) onNavigateToMessages(s);
                }}
              >
                <MessageSquare size={16} />
                <span>Send Direct Message</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
