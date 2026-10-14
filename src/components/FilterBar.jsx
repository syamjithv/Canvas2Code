import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, X } from 'lucide-react';

export function FilterBar({ filters, setFilters, onResetFilters }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const containerRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filterConfigs = [
    {
      id: 'time',
      label: 'Time',
      options: ['All Times', 'Morning', 'Afternoon', 'Evening'],
      current: filters.time
    },
    {
      id: 'level',
      label: 'Level',
      options: ['All Levels', 'Beginner', 'Intermediate', 'Advanced'],
      current: filters.level
    },
    {
      id: 'language',
      label: 'Language',
      options: ['All Languages', 'English'],
      current: filters.language
    },
    {
      id: 'type',
      label: 'Type',
      options: ['All Types', 'Core', 'Elective'],
      current: filters.type
    }
  ];

  const handleSelect = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: value.startsWith('All') ? '' : value
    }));
    setActiveDropdown(null);
  };

  const hasActiveFilters = Object.values(filters).some(Boolean);

  return (
    <div className="filter-bar" ref={containerRef}>
      <span className="filter-label">Filter by:</span>

      <div className="filter-pills-list">
        {filterConfigs.map((cfg) => {
          const isOpen = activeDropdown === cfg.id;
          const isFiltered = Boolean(cfg.current);
          const displayLabel = cfg.current || cfg.label;

          return (
            <div key={cfg.id} className="filter-dropdown-container">
              <button
                type="button"
                className={`filter-pill-btn ${isFiltered ? 'pill-active' : ''} ${isOpen ? 'dropdown-open' : ''}`}
                onClick={() => setActiveDropdown(isOpen ? null : cfg.id)}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
              >
                <span>{displayLabel}</span>
                <ChevronDown size={14} className={`filter-chevron ${isOpen ? 'rotate' : ''}`} />
              </button>

              {isOpen && (
                <div className="filter-menu-popover" role="listbox">
                  {cfg.options.map((opt) => {
                    const isSelected = (!cfg.current && opt.startsWith('All')) || cfg.current === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        className={`filter-menu-item ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleSelect(cfg.id, opt)}
                        role="option"
                        aria-selected={isSelected}
                      >
                        <span>{opt}</span>
                        {isSelected && <Check size={14} className="filter-check-icon" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {hasActiveFilters && (
          <button
            type="button"
            className="filter-clear-btn"
            onClick={onResetFilters}
            aria-label="Clear active filters"
          >
            <X size={13} />
            <span>Reset</span>
          </button>
        )}
      </div>
    </div>
  );
}
