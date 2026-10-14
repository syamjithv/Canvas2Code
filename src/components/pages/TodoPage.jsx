import React, { useState } from 'react';
import {
  ArrowLeft,
  Plus,
  Trash2,
  CheckCircle2,
  Circle,
  Calendar,
  AlertCircle,
  ListTodo
} from 'lucide-react';

const initialTasks = [
  { id: 'todo-1', title: 'Implement A* search with Manhattan heuristic', course: 'Artificial Intelligence', priority: 'High', due: 'Tomorrow, 11:59 PM', completed: false, color: '#ac62d1' },
  { id: 'todo-2', title: 'Write Banker deadlock safety algorithm simulation', course: 'Operating Systems', priority: 'High', due: 'Dec 11, 2025', completed: false, color: '#e87a79' },
  { id: 'todo-3', title: 'Complete custom hooks laboratory assignment', course: 'Web Programming', priority: 'Medium', due: 'Dec 12, 2025', completed: false, color: '#e87a79' },
  { id: 'todo-4', title: 'Deploy multi-stage Docker container locally', course: 'Cloud Computing', priority: 'Medium', due: 'Dec 13, 2025', completed: false, color: '#bc5be0' },
  { id: 'todo-5', title: 'Draft SOLID principles refactoring case study', course: 'Software Engineering', priority: 'Low', due: 'Dec 14, 2025', completed: true, color: '#e87a79' },
  { id: 'todo-6', title: 'Export harmonic color palette & typography tokens', course: 'Graphic Designing', priority: 'Low', due: 'Dec 15, 2025', completed: true, color: '#e87a79' }
];

export function TodoPage({ onBack }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('all'); // 'all', 'pending', 'completed', 'high'
  const [showAddForm, setShowAddForm] = useState(false);

  // Form State
  const [newTitle, setNewTitle] = useState('');
  const [newCourse, setNewCourse] = useState('Artificial Intelligence');
  const [newPriority, setNewPriority] = useState('Medium');
  const [newDue, setNewDue] = useState('Dec 15, 2025');

  // Stats
  const totalCount = tasks.length;
  const completedCount = tasks.filter((t) => t.completed).length;
  const pendingCount = totalCount - completedCount;
  const highPriorityCount = tasks.filter((t) => t.priority === 'High' && !t.completed).length;

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const handleCreateTask = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const courseColorMap = {
      'Artificial Intelligence': '#ac62d1',
      'Operating Systems': '#e87a79',
      'Web Programming': '#e87a79',
      'Cloud Computing': '#bc5be0',
      'Software Engineering': '#e87a79',
      'Graphic Designing': '#e87a79'
    };

    const newTask = {
      id: `todo-${Date.now()}`,
      title: newTitle.trim(),
      course: newCourse,
      priority: newPriority,
      due: newDue || 'Next Week',
      completed: false,
      color: courseColorMap[newCourse] || '#10b981'
    };

    setTasks((prev) => [newTask, ...prev]);
    setNewTitle('');
    setShowAddForm(false);
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === 'pending') return !t.completed;
    if (filter === 'completed') return t.completed;
    if (filter === 'high') return t.priority === 'High';
    return true;
  });

  return (
    <div className="todo-page-container">
      {/* Header */}
      <div className="todo-header-row">
        <div className="todo-header-left">
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
            <h1 className="todo-main-title">Academic To-Do & Assignments</h1>
            <p className="todo-subtitle">
              Track course deliverables, lab submissions, and study milestones
            </p>
          </div>
        </div>

        <button
          type="button"
          className="todo-create-btn"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <Plus size={16} />
          <span>{showAddForm ? 'Cancel Task' : 'New Task'}</span>
        </button>
      </div>

      {/* Task Metrics Bar */}
      <div className="todo-metrics-row">
        <div className="metric-box">
          <span className="metric-num">{totalCount}</span>
          <span className="metric-label">Total Tasks</span>
        </div>
        <div className="metric-box">
          <span className="metric-num text-amber">{pendingCount}</span>
          <span className="metric-label">Pending</span>
        </div>
        <div className="metric-box">
          <span className="metric-num text-green">{completedCount}</span>
          <span className="metric-label">Completed</span>
        </div>
        <div className="metric-box">
          <span className="metric-num text-rose">{highPriorityCount}</span>
          <span className="metric-label">High Priority Due</span>
        </div>
      </div>

      {/* Add Task Form Collapsible */}
      {showAddForm && (
        <form className="add-task-card" onSubmit={handleCreateTask}>
          <h3 className="add-task-heading">Create New Assignment or Task</h3>

          <div className="form-grid-inputs">
            <div className="form-group full-width">
              <label htmlFor="task-title" className="form-label">Task Title</label>
              <input
                id="task-title"
                type="text"
                placeholder="e.g. Complete Operating Systems Paging Exercise..."
                className="form-text-input"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="task-course" className="form-label">Course</label>
              <select
                id="task-course"
                className="form-select-input"
                value={newCourse}
                onChange={(e) => setNewCourse(e.target.value)}
              >
                <option value="Artificial Intelligence">Artificial Intelligence</option>
                <option value="Operating Systems">Operating Systems</option>
                <option value="Web Programming">Web Programming</option>
                <option value="Cloud Computing">Cloud Computing</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Graphic Designing">Graphic Designing</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="task-priority" className="form-label">Priority</label>
              <select
                id="task-priority"
                className="form-select-input"
                value={newPriority}
                onChange={(e) => setNewPriority(e.target.value)}
              >
                <option value="High">High Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="Low">Low Priority</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="task-due" className="form-label">Due Date</label>
              <input
                id="task-due"
                type="text"
                placeholder="e.g. Dec 16, 2025"
                className="form-text-input"
                value={newDue}
                onChange={(e) => setNewDue(e.target.value)}
              />
            </div>
          </div>

          <div className="form-actions-row">
            <button
              type="button"
              className="form-cancel-btn"
              onClick={() => setShowAddForm(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="form-submit-btn"
            >
              Save Task
            </button>
          </div>
        </form>
      )}

      {/* Filter Tabs */}
      <div className="todo-filter-tabs">
        <button
          type="button"
          className={`todo-tab-btn ${filter === 'all' ? 'active-tab' : ''}`}
          onClick={() => setFilter('all')}
        >
          All ({totalCount})
        </button>
        <button
          type="button"
          className={`todo-tab-btn ${filter === 'pending' ? 'active-tab' : ''}`}
          onClick={() => setFilter('pending')}
        >
          Pending ({pendingCount})
        </button>
        <button
          type="button"
          className={`todo-tab-btn ${filter === 'completed' ? 'active-tab' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed ({completedCount})
        </button>
        <button
          type="button"
          className={`todo-tab-btn ${filter === 'high' ? 'active-tab' : ''}`}
          onClick={() => setFilter('high')}
        >
          High Priority ({tasks.filter((t) => t.priority === 'High').length})
        </button>
      </div>

      {/* Tasks List */}
      <div className="tasks-items-stack">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className={`task-row-card ${task.completed ? 'task-is-completed' : ''}`}
            >
              <button
                type="button"
                className="task-toggle-checkbox"
                onClick={() => toggleTask(task.id)}
                aria-label={task.completed ? 'Mark pending' : 'Mark completed'}
              >
                {task.completed ? (
                  <CheckCircle2 size={22} className="text-green" />
                ) : (
                  <Circle size={22} className="text-muted" />
                )}
              </button>

              <div className="task-body-content">
                <span className={`task-title-text ${task.completed ? 'strike-through' : ''}`}>
                  {task.title}
                </span>

                <div className="task-tags-meta">
                  <span
                    className="task-course-chip"
                    style={{ borderColor: task.color, color: task.color }}
                  >
                    {task.course}
                  </span>

                  <span className={`task-priority-pill priority-${task.priority.toLowerCase()}`}>
                    <AlertCircle size={12} /> {task.priority}
                  </span>

                  <span className="task-due-date">
                    <Calendar size={12} /> {task.due}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="task-delete-btn"
                onClick={() => deleteTask(task.id)}
                aria-label={`Delete task ${task.title}`}
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))
        ) : (
          <div className="no-tasks-state">
            <ListTodo size={44} className="text-muted" />
            <h3>No tasks in this view</h3>
            <p>All items in this category are clear or no tasks have been created yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
