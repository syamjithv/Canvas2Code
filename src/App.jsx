import React, { useState, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { CourseGrid } from './components/CourseGrid';
import { RightSidebar } from './components/RightSidebar';
import { CourseDetailPage } from './components/CourseDetailPage';
import { CourseModal } from './components/CourseModal';
import { UserModal } from './components/UserModal';
import { coursesData } from './data/courses';
import './App.css';

export function App() {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    time: '',
    level: '',
    language: '',
    type: ''
  });
  const [activeCourseDetail, setActiveCourseDetail] = useState(null);
  const [selectedCourseModal, setSelectedCourseModal] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Filter courses based on search query and filter criteria
  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      // Search matching
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = course.title.toLowerCase().includes(query);
        const matchesTeacher = course.teacher.toLowerCase().includes(query);
        const matchesBatch = course.batch.toLowerCase().includes(query);
        if (!matchesTitle && !matchesTeacher && !matchesBatch) {
          return false;
        }
      }

      // Dropdown filters
      if (filters.time && course.time !== filters.time) return false;
      if (filters.level && course.level !== filters.level) return false;
      if (filters.language && course.language !== filters.language) return false;
      if (filters.type && course.type !== filters.type) return false;

      return true;
    });
  }, [searchQuery, filters]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setFilters({
      time: '',
      level: '',
      language: '',
      type: ''
    });
  };

  const handleSelectCourse = (course) => {
    // Open dedicated course-detail page
    setActiveCourseDetail(course);
  };

  const handleBackToDashboard = () => {
    setActiveCourseDetail(null);
  };

  const handleSidebarNav = (navId) => {
    setActiveNav(navId);
    // Clicking navigation items like Dashboard or All Courses returns to dashboard view
    setActiveCourseDetail(null);
  };

  return (
    <div className="dashboard-viewport">
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Left Green Sidebar - integrated directly into the full-page green background */}
      <Sidebar
        activeItem={activeNav}
        setActiveItem={handleSidebarNav}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Standalone Floating White Panel - sits to the right of the green sidebar */}
      <div className="dashboard-floating-panel">
        {/* Central Courses Section */}
        <main className="dashboard-main-content">
          {activeCourseDetail ? (
            <CourseDetailPage
              course={activeCourseDetail}
              onBack={handleBackToDashboard}
            />
          ) : (
            <>
              <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                coursesCount={filteredCourses.length}
                totalCount={coursesData.length}
                setMobileOpen={setMobileOpen}
              />

              <FilterBar
                filters={filters}
                setFilters={setFilters}
                onResetFilters={handleResetFilters}
              />

              <CourseGrid
                courses={filteredCourses}
                onSelectCourse={handleSelectCourse}
                onResetFilters={handleResetFilters}
              />
            </>
          )}
        </main>

        {/* Right Sidebar: Profile, Calendar, Online Users */}
        <RightSidebar onUserClick={setSelectedUser} />
      </div>

      {/* Interactive Quick Modal fallback if triggered */}
      {selectedCourseModal && (
        <CourseModal
          course={selectedCourseModal}
          onClose={() => setSelectedCourseModal(null)}
        />
      )}

      {selectedUser && (
        <UserModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
}

export default App;
