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
            {/* Main lavender & dusty periwinkle gradient */}
            <linearGradient id="ai-grad-main" x1="220" y1="20" x2="520" y2="220" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#d5a5cf" />
              <stop offset="30%" stopColor="#c598c8" />
              <stop offset="65%" stopColor="#b293c6" />
              <stop offset="90%" stopColor="#9ea4cf" />
              <stop offset="100%" stopColor="#92a0cb" />
            </linearGradient>

            {/* Upper-right periwinkle background gradient */}
            <linearGradient id="ai-grad-bg" x1="320" y1="0" x2="574" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#e2ecf9" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#cbdaf2" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#b0c5e7" stopOpacity="0.8" />
            </linearGradient>

            {/* Bottom-left slate blue gradient */}
            <linearGradient id="ai-grad-slate" x1="180" y1="140" x2="240" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#98a8cb" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#7e92ba" stopOpacity="0.95" />
            </linearGradient>

            {/* Translucent bubble radial gradients */}
            <radialGradient id="ai-bubble-large" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#eaf3fb" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#d4e5f7" stopOpacity="0.45" />
            </radialGradient>
            <radialGradient id="ai-bubble-med" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#edf5fc" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#d8e8f8" stopOpacity="0.55" />
            </radialGradient>
          </defs>

          {/* Layer 1: Background periwinkle shape spanning upper-right & right edge */}
          <path
            d="M 288.4 0.0 C 343.3 45.5, 398.2 41.2, 453.2 21.7 C 494.4 10.8, 542.4 8.7, 574.0 13.0 L 574.0 245.0 L 453.2 245.0 C 412.0 195.1, 343.3 97.6, 288.4 0.0 Z"
            fill="url(#ai-grad-bg)"
          />

          {/* Layer 2: Lower-left slate-blue organic underlayer (behind Felix) */}
          <path
            d="M 164.8 245.0 C 164.8 211.4, 173.0 184.3, 189.5 162.6 C 203.2 145.3, 217.0 138.8, 228.0 149.6 C 238.9 164.8, 247.2 206.0, 254.0 245.0 Z"
            fill="url(#ai-grad-slate)"
          />

          {/* Layer 3: Main foreground lavender & periwinkle organic shape */}
          <path
            d="M 260.9 15.2 C 309.0 17.3, 357.0 28.2, 398.2 43.4 C 453.2 65.0, 501.2 103.0, 532.8 146.3 C 556.1 182.1, 556.1 211.4, 528.7 229.8 C 501.2 240.7, 453.2 236.3, 418.8 232.0 C 377.6 227.7, 329.6 236.3, 295.2 240.7 C 254.0 242.8, 240.3 229.8, 238.9 211.4 C 236.2 178.9, 230.7 140.9, 219.7 113.8 C 206.0 84.6, 189.5 56.4, 203.2 30.4 C 217.0 13.0, 240.3 13.0, 260.9 15.2 Z"
            fill="url(#ai-grad-main)"
            fillOpacity="0.94"
          />

          {/* Layer 4: Floating translucent accents & bubbles on the left flank */}
          {/* Large bubble overlapping lavender and slate layer */}
          <circle cx="200.5" cy="149.6" r="14.2" fill="url(#ai-bubble-large)" stroke="#d2e3f5" strokeWidth="1.2" />

          {/* Medium bubble directly above Mr. Felix */}
          <circle cx="210.1" cy="185.4" r="10.8" fill="url(#ai-bubble-med)" stroke="#d2e3f5" strokeWidth="0.8" />

          {/* Small micro-accent droplet */}
          <circle cx="182.6" cy="169.1" r="4.2" fill="#eaf3fb" fillOpacity="0.75" />

          {/* Top-right delicate splashing droplet near card top boundary */}
          <path
            d="M 470 28 C 470 25, 476 23, 482 25 C 488 27, 490 31, 486 33 C 481 35, 473 32, 470 28 Z"
            fill="#e2ecf9"
            fillOpacity="0.8"
          />
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
