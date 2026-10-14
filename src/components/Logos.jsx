import React from 'react';

export function GoogleClassroomLogo({ className = '' }) {
  return (
    <div className={`google-classroom-logo ${className}`}>
      <svg
        className="classroom-icon"
        viewBox="0 0 48 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Yellow outer frame */}
        <rect
          x="2"
          y="2"
          width="44"
          height="34"
          rx="5"
          fill="#0f7a3f"
          stroke="#f9ab00"
          strokeWidth="4"
        />
        {/* Inner chalkboard frame edge */}
        <rect
          x="4.5"
          y="4.5"
          width="39"
          height="29"
          rx="3"
          fill="#137333"
        />
        {/* Left student chalk silhouette */}
        <circle cx="16" cy="15" r="3" fill="#ffffff" fillOpacity="0.85" />
        <path
          d="M10 26 C10 21, 13 19.5, 16 19.5 C19 19.5, 22 21, 22 26"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="#ffffff"
          fillOpacity="0.85"
        />
        {/* Right student chalk silhouette */}
        <circle cx="32" cy="15" r="3" fill="#ffffff" fillOpacity="0.85" />
        <path
          d="M26 26 C26 21, 29 19.5, 32 19.5 C35 19.5, 38 21, 38 26"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="#ffffff"
          fillOpacity="0.85"
        />
        {/* Center teacher chalk figure */}
        <circle cx="24" cy="13.5" r="4.2" fill="#ffffff" />
        <path
          d="M16.5 27 C16.5 21.5, 20 19, 24 19 C28 19, 31.5 21.5, 31.5 27"
          fill="#ffffff"
        />
      </svg>
      <div className="classroom-brand-text">
        <span className="brand-google">Google</span>
        <span className="brand-classroom">Classroom</span>
      </div>
    </div>
  );
}

export function VidyaLogo({ className = '', variant = 'transparent' }) {
  const logoSrc = variant === 'tile' ? '/vidya-logo.jpg' : '/vidya-logo-cropped.png';

  return (
    <div className={`vidya-official-brand ${variant === 'tile' ? 'has-tile' : ''} ${className}`}>
      <div className="vidya-logo-frame">
        <img
          src={logoSrc}
          alt="Vidya Academy of Science and Technology Official Logo"
          className="vidya-authentic-img"
          width="135"
          height="84"
          loading="eager"
        />
      </div>
    </div>
  );
}
