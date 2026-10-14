import React from 'react';

/**
 * CardIllustrations.jsx
 * Custom vector artwork faithfully reproducing the course-card mockups.
 * Built with layered SVG paths, multi-stop organic gradients, controlled opacities,
 * and individual micro-accents tailored to each subject.
 *
 * Coordinate system: viewBox="0 0 574 245" matching the exact aspect ratio
 * and proportions of the reference design mockups.
 */

export function CardIllustration({ theme }) {
  switch (theme) {
    /* =========================================================================
       1. Artificial Intelligence (Lavender theme)
       ========================================================================= */
    case 'lavender':
      return (
        <svg
          className="card-abstract-svg"
          viewBox="0 0 574 245"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="ai-grad-main" x1="300" y1="20" x2="520" y2="220" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#e8a8cb" />
              <stop offset="45%" stopColor="#cf9fd4" />
              <stop offset="80%" stopColor="#a8b2d8" />
              <stop offset="100%" stopColor="#95abdb" />
            </linearGradient>
            <linearGradient id="ai-grad-top" x1="380" y1="0" x2="560" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f4dfee" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#e5d4ed" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#cdd4ee" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="ai-grad-slate" x1="240" y1="140" x2="350" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#a8b5d6" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#8b9ec7" stopOpacity="0.75" />
            </linearGradient>
            <linearGradient id="ai-grad-bean" x1="200" y1="45" x2="260" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#b5c4e2" />
              <stop offset="100%" stopColor="#98aed6" />
            </linearGradient>
            <linearGradient id="ai-grad-ring" x1="510" y1="60" x2="560" y2="130" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#d0bddf" />
              <stop offset="100%" stopColor="#a8b8df" />
            </linearGradient>
          </defs>

          {/* Top-right soft periwinkle/lavender lobe */}
          <path
            d="M380 0 C430 0, 500 5, 555 40 C570 50, 574 70, 574 100 L574 0 Z"
            fill="url(#ai-grad-top)"
          />

          {/* Bottom-left slate-blue organic underlayer */}
          <path
            d="M245 155 C238 125, 270 120, 305 130 C340 140, 360 175, 355 210 C350 240, 310 245, 280 245 C250 245, 248 180, 245 155 Z"
            fill="url(#ai-grad-slate)"
          />

          {/* Main lavender & periwinkle fluid organic blob */}
          <path
            d="M320 0 C300 0, 290 40, 295 90 C300 130, 275 145, 290 175 C305 205, 345 220, 385 225 C430 230, 480 235, 520 215 C550 200, 560 160, 545 125 C530 90, 520 60, 485 30 C450 0, 370 0, 320 0 Z"
            fill="url(#ai-grad-main)"
          />

          {/* Floating organic bean near batch text on left */}
          <path
            d="M210 50 C225 38, 255 42, 262 58 C268 72, 255 88, 240 90 C220 92, 202 82, 202 68 C202 58, 205 52, 210 50 Z"
            fill="url(#ai-grad-bean)"
          />

          {/* Concentric accent rings near the right edge */}
          <circle cx="536" cy="95" r="24" stroke="url(#ai-grad-ring)" strokeWidth="3" fill="none" opacity="0.8" />
          <circle cx="552" cy="110" r="14" stroke="#aab8de" strokeWidth="2.5" fill="none" opacity="0.65" />
        </svg>
      );

    /* =========================================================================
       2. Operating Systems (Peach / Yellow-Mint theme)
       ========================================================================= */
    case 'peach':
    case 'yellow-mint':
      return (
        <svg
          className="card-abstract-svg"
          viewBox="0 0 574 245"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="os-grad-coral" x1="280" y1="30" x2="350" y2="130" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fe846f" />
              <stop offset="60%" stopColor="#fd947f" />
              <stop offset="100%" stopColor="#fea78c" />
            </linearGradient>
            <linearGradient id="os-grad-mint" x1="390" y1="0" x2="480" y2="230" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#cbe6a8" />
              <stop offset="35%" stopColor="#b2e5b5" />
              <stop offset="70%" stopColor="#9ee4be" />
              <stop offset="100%" stopColor="#8ee2c8" />
            </linearGradient>
            <linearGradient id="os-grad-yellow" x1="380" y1="140" x2="560" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fdd98a" />
              <stop offset="50%" stopColor="#ffbf78" />
              <stop offset="100%" stopColor="#fe9d6a" />
            </linearGradient>
            <linearGradient id="os-grad-crescent" x1="410" y1="85" x2="435" y2="140" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7ce4c4" />
              <stop offset="100%" stopColor="#5ddba9" />
            </linearGradient>
          </defs>

          {/* Sunny yellow/apricot underlayer at bottom */}
          <path
            d="M370 245 C370 190, 410 150, 465 150 C515 150, 555 180, 574 210 L574 245 Z"
            fill="url(#os-grad-yellow)"
            opacity="0.85"
          />

          {/* Interlocking coral-orange blob on left */}
          <path
            d="M310 20 C340 0, 370 15, 375 55 C380 95, 345 130, 310 135 C280 140, 265 110, 270 80 C275 50, 290 30, 310 20 Z"
            fill="url(#os-grad-coral)"
          />

          {/* Main mint-green fluid organic blob */}
          <path
            d="M380 0 C430 -5, 480 10, 500 45 C520 80, 495 115, 470 130 C430 150, 410 120, 395 105 C380 90, 365 110, 355 140 C340 180, 365 220, 410 235 C450 248, 510 240, 545 225 L555 245 L380 245 C350 245, 335 220, 340 190 C345 155, 370 135, 375 100 C380 60, 345 30, 360 10 C365 3, 372 0, 380 0 Z"
            fill="url(#os-grad-mint)"
          />

          {/* Inner curved mint crescent/bean */}
          <path
            d="M415 88 C425 88, 434 100, 430 118 C426 134, 415 138, 412 128 C408 116, 420 112, 420 100 C420 94, 414 91, 415 88 Z"
            fill="url(#os-grad-crescent)"
            opacity="0.9"
          />

          {/* Mint floating dots on left */}
          <circle cx="328" cy="90" r="7.5" fill="#7ce4c4" opacity="0.9" />
          <circle cx="344" cy="96" r="6" fill="#9de6c7" opacity="0.85" />
          <circle cx="350" cy="116" r="5" fill="#5adca8" opacity="0.9" />
          <circle cx="332" cy="118" r="4.5" fill="#b1eacc" opacity="0.8" />

          {/* Coral/peach floating dots on right */}
          <circle cx="510" cy="102" r="6" fill="#fda085" opacity="0.85" />
          <circle cx="530" cy="108" r="8" fill="#fe8b73" opacity="0.9" />
          <circle cx="522" cy="126" r="4.5" fill="#fda990" opacity="0.75" />
        </svg>
      );

    /* =========================================================================
       3. Web Programming (Yellow / Blush-Peach theme)
       ========================================================================= */
    case 'yellow':
      return (
        <svg
          className="card-abstract-svg"
          viewBox="0 0 574 245"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="web-grad-rose" x1="380" y1="0" x2="574" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f4bdcb" />
              <stop offset="50%" stopColor="#eec0cc" />
              <stop offset="100%" stopColor="#e8a8b8" />
            </linearGradient>
            <linearGradient id="web-grad-peach" x1="300" y1="30" x2="500" y2="210" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fbc09a" />
              <stop offset="45%" stopColor="#f5c9b6" />
              <stop offset="80%" stopColor="#f2cac8" />
              <stop offset="100%" stopColor="#f4cec6" />
            </linearGradient>
            <linearGradient id="web-grad-apricot" x1="280" y1="140" x2="460" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fce3cf" />
              <stop offset="100%" stopColor="#f8c7ad" />
            </linearGradient>
            <linearGradient id="web-grad-ring" x1="220" y1="65" x2="270" y2="125" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f7bf9c" />
              <stop offset="100%" stopColor="#e89fae" />
            </linearGradient>
          </defs>

          {/* Top-right dusty rose lobe */}
          <path
            d="M380 0 C435 -5, 520 15, 560 55 C572 68, 574 85, 574 125 L574 0 Z"
            fill="url(#web-grad-rose)"
            opacity="0.88"
          />

          {/* Bottom apricot underlayer */}
          <path
            d="M280 245 C275 190, 310 145, 365 145 C415 145, 455 175, 465 215 C470 235, 460 245, 450 245 Z"
            fill="url(#web-grad-apricot)"
            opacity="0.8"
          />

          {/* Main peach-rose fluid blob */}
          <path
            d="M310 40 C345 10, 420 15, 465 50 C510 85, 525 140, 495 180 C465 215, 405 220, 355 210 C310 200, 280 160, 285 120 C290 80, 285 60, 310 40 Z"
            fill="url(#web-grad-peach)"
          />

          {/* Distinctive donut ring & dot below batch text */}
          <circle cx="244" cy="95" r="17" stroke="url(#web-grad-ring)" strokeWidth="7" fill="none" opacity="0.8" />
          <circle cx="258" cy="70" r="5.5" fill="#f7bca4" opacity="0.85" />
        </svg>
      );

    /* =========================================================================
       4. Cloud Computing (Teal / Lavender-Blue theme)
       ========================================================================= */
    case 'teal':
    case 'lavender-blue':
      return (
        <svg
          className="card-abstract-svg"
          viewBox="0 0 574 245"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="cloud-grad-top" x1="390" y1="0" x2="574" y2="85" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#d5e0f5" />
              <stop offset="100%" stopColor="#bcd0ea" />
            </linearGradient>
            <linearGradient id="cloud-grad-lilac" x1="320" y1="20" x2="520" y2="220" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#e2afd8" />
              <stop offset="45%" stopColor="#d1b7d8" />
              <stop offset="85%" stopColor="#c0b9db" />
              <stop offset="100%" stopColor="#b5b3db" />
            </linearGradient>
            <linearGradient id="cloud-grad-slate" x1="240" y1="150" x2="350" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#a4a7cd" />
              <stop offset="100%" stopColor="#878bb7" />
            </linearGradient>
          </defs>

          {/* Top-right soft periwinkle cloud curve */}
          <path
            d="M400 0 C450 -5, 520 10, 560 40 C570 50, 574 65, 574 95 L574 0 Z"
            fill="url(#cloud-grad-top)"
          />

          {/* Slate-blue organic underlayer at bottom-left */}
          <path
            d="M245 170 C240 140, 270 135, 305 145 C345 155, 365 190, 355 225 C345 245, 315 245, 285 245 C255 245, 250 200, 245 170 Z"
            fill="url(#cloud-grad-slate)"
            opacity="0.88"
          />

          {/* Main billowing lilac/lavender cloud blob */}
          <path
            d="M330 20 C365 0, 440 10, 485 45 C530 80, 545 140, 515 185 C485 225, 425 235, 375 220 C330 205, 305 165, 310 125 C315 85, 305 40, 330 20 Z"
            fill="url(#cloud-grad-lilac)"
          />

          {/* Floating cloud bubbles on the left */}
          <circle cx="272" cy="138" r="11" fill="#ffffff" fillOpacity="0.88" />
          <circle cx="258" cy="160" r="6.5" fill="#cad5f2" fillOpacity="0.8" />
          <circle cx="282" cy="164" r="3.5" fill="#b9c6ea" fillOpacity="0.75" />
        </svg>
      );

    /* =========================================================================
       5. Software Engineering (Pink / Peach-Orange theme)
       ========================================================================= */
    case 'pink':
    case 'peach-orange':
      return (
        <svg
          className="card-abstract-svg"
          viewBox="0 0 574 245"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="se-grad-top" x1="360" y1="0" x2="574" y2="110" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f6b6c0" />
              <stop offset="60%" stopColor="#edb0ba" />
              <stop offset="100%" stopColor="#e9a3b0" />
            </linearGradient>
            <linearGradient id="se-grad-peach" x1="300" y1="30" x2="510" y2="210" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f7be96" />
              <stop offset="45%" stopColor="#f5c7b3" />
              <stop offset="80%" stopColor="#f2cbc6" />
              <stop offset="100%" stopColor="#f3cdc6" />
            </linearGradient>
            <linearGradient id="se-grad-cream" x1="240" y1="120" x2="400" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fde4cd" />
              <stop offset="100%" stopColor="#f7ccb0" />
            </linearGradient>
            <linearGradient id="se-grad-ring" x1="240" y1="65" x2="280" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f6be98" />
              <stop offset="100%" stopColor="#e99fad" />
            </linearGradient>
          </defs>

          {/* Top-right soft rose-pink lobe */}
          <path
            d="M370 0 C425 -5, 510 15, 555 50 C570 65, 574 80, 574 120 L574 0 Z"
            fill="url(#se-grad-top)"
            opacity="0.88"
          />

          {/* Bottom-left warm vanilla-cream underlayer */}
          <path
            d="M250 245 C240 185, 275 130, 335 130 C385 130, 420 160, 430 200 C435 225, 420 245, 400 245 Z"
            fill="url(#se-grad-cream)"
            opacity="0.85"
          />

          {/* Main peach-rose fluid organic blob */}
          <path
            d="M315 35 C355 8, 435 12, 480 48 C525 82, 540 138, 510 180 C480 220, 415 228, 365 215 C315 200, 285 160, 290 115 C295 75, 290 55, 315 35 Z"
            fill="url(#se-grad-peach)"
          />

          {/* Soft petal peeking out to the right of the button */}
          <ellipse cx="538" cy="196" rx="9" ry="14" transform="rotate(30 538 196)" fill="#e88380" opacity="0.85" />

          {/* Distinctive donut ring & dot below batch text */}
          <circle cx="272" cy="85" r="16" stroke="url(#se-grad-ring)" strokeWidth="6.5" fill="none" opacity="0.8" />
          <circle cx="250" cy="62" r="5.5" fill="#f5b99e" opacity="0.85" />
        </svg>
      );

    /* =========================================================================
       6. Graphic Designing (Light-Green / Mint-Yellow theme)
       ========================================================================= */
    case 'light-green':
    case 'mint-yellow':
      return (
        <svg
          className="card-abstract-svg"
          viewBox="0 0 574 245"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="gd-grad-yellow" x1="450" y1="0" x2="574" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffd385" />
              <stop offset="60%" stopColor="#ffbf70" />
              <stop offset="100%" stopColor="#ffa85c" />
            </linearGradient>
            <linearGradient id="gd-grad-mint" x1="330" y1="10" x2="520" y2="230" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#c9e5a8" />
              <stop offset="30%" stopColor="#bde5b0" />
              <stop offset="65%" stopColor="#a0e4bb" />
              <stop offset="100%" stopColor="#8fe3cb" />
            </linearGradient>
            <linearGradient id="gd-grad-bubble" x1="320" y1="60" x2="355" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffe4a8" />
              <stop offset="100%" stopColor="#ffcc7a" />
            </linearGradient>
          </defs>

          {/* Sunny yellow/apricot backing shape on right */}
          <path
            d="M450 0 C490 0, 545 15, 574 55 L574 210 C550 215, 515 190, 495 150 C475 110, 480 50, 450 0 Z"
            fill="url(#gd-grad-yellow)"
            opacity="0.88"
          />

          {/* Main vivid fresh mint fluid blob with waist and extended bottom lobe */}
          <path
            d="M340 0 C385 -5, 450 8, 485 45 C520 80, 525 125, 495 160 C465 195, 420 185, 395 165 C380 150, 360 160, 345 175 C320 200, 310 220, 345 225 C370 230, 420 220, 455 210 L470 235 C425 248, 365 245, 325 235 C295 225, 300 185, 325 165 C345 150, 365 140, 375 110 C385 75, 350 40, 340 0 Z"
            fill="url(#gd-grad-mint)"
          />

          {/* Yellow bubble & dot in the waist indentation */}
          <circle cx="338" cy="72" r="14" fill="url(#gd-grad-bubble)" opacity="0.9" />
          <circle cx="336" cy="94" r="6" fill="#ffde97" opacity="0.85" />

          {/* Turquoise droplet & dot near bottom edge */}
          <circle cx="433" cy="230" r="9.5" fill="#7ce4c4" opacity="0.9" />
          <circle cx="450" cy="238" r="4" fill="#a4ecd4" opacity="0.8" />
        </svg>
      );

    default:
      return null;
  }
}
