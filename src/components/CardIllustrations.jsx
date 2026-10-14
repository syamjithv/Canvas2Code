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
            <linearGradient id="os-grad-sun" x1="330" y1="20" x2="495" y2="190" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fe856e" />
              <stop offset="60%" stopColor="#fea558" />
              <stop offset="100%" stopColor="#fdbb68" />
            </linearGradient>
            <linearGradient id="os-grad-sand" x1="235" y1="160" x2="360" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fae1be" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#fcd8a4" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="os-grad-mint" x1="450" y1="35" x2="574" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#a3e8b0" />
              <stop offset="45%" stopColor="#85e2c5" />
              <stop offset="100%" stopColor="#62d8b2" />
            </linearGradient>
            <linearGradient id="os-grad-bean" x1="380" y1="110" x2="420" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7ce4c4" />
              <stop offset="100%" stopColor="#54d2a9" />
            </linearGradient>
          </defs>

          {/* Layer 1: Butter-sand mound at bottom-left */}
          <path
            d="M 235 245 C 240 195, 265 160, 310 165 C 335 170, 350 205, 360 245 Z"
            fill="url(#os-grad-sand)"
          />

          {/* Layer 2: Warm coral/golden sun circle in middle */}
          <circle cx="411" cy="106" r="86" fill="url(#os-grad-sun)" />

          {/* Layer 3: Main mint fluid wave wrapping edge and button */}
          <path
            d="M 450 35 C 482 38, 528 50, 560 80 C 574 115, 574 170, 560 205 L 574 245 L 450 245 C 405 245, 370 228, 385 192 C 398 157, 444 137, 456 96 C 463 56, 430 35, 450 35 Z"
            fill="url(#os-grad-mint)"
          />

          {/* Layer 4: Distinct floating curved mint crescent/bean inside circle */}
          <path
            d="M 398 109 C 411 111, 422 130, 415 157 C 407 177, 389 182, 384 167 C 376 147, 386 122, 398 109 Z"
            fill="url(#os-grad-bean)"
          />

          {/* Layer 5: Left flank mint bubbles */}
          <circle cx="235" cy="126" r="10.5" fill="#7be4c3" opacity="0.9" />
          <circle cx="230" cy="154" r="8" fill="#9ee6c7" opacity="0.85" />
          <circle cx="262" cy="144" r="7" fill="#b2eacc" opacity="0.8" />

          {/* Top-right coral bubbles */}
          <circle cx="515" cy="20" r="7" fill="#fda085" opacity="0.85" />
          <circle cx="538" cy="40" r="9.2" fill="#fe8b73" opacity="0.9" />
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
            <linearGradient id="web-grad-rose" x1="430" y1="0" x2="574" y2="130" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f6bcc8" />
              <stop offset="100%" stopColor="#e9a1b2" />
            </linearGradient>
            <linearGradient id="web-grad-amber" x1="310" y1="0" x2="500" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f9b678" />
              <stop offset="100%" stopColor="#f49852" />
            </linearGradient>
            <linearGradient id="web-grad-apricot" x1="282" y1="143" x2="504" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fce4cf" />
              <stop offset="100%" stopColor="#f8c8ae" />
            </linearGradient>
            <linearGradient id="web-grad-peach" x1="280" y1="75" x2="574" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f5bdc5" />
              <stop offset="45%" stopColor="#f2c7b5" />
              <stop offset="100%" stopColor="#f3c8cf" />
            </linearGradient>
            <linearGradient id="web-grad-ring" x1="237" y1="100" x2="269" y2="132" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f7bf9c" />
              <stop offset="100%" stopColor="#e89fae" />
            </linearGradient>
          </defs>

          {/* Layer 1: Bottom apricot underlayer */}
          <path
            d="M 282 245 C 282 184, 322 143, 390 143 C 457 143, 497 184, 504 245 Z"
            fill="url(#web-grad-apricot)"
          />

          {/* Layer 2: Warm apricot rounded mound (top center) */}
          <path
            d="M 310 0 C 310 40, 345 80, 405 80 C 465 80, 500 40, 500 0 Z"
            fill="url(#web-grad-amber)"
          />

          {/* Layer 3: Top-right dusty rose lobe */}
          <path
            d="M 430 0 C 470 0, 530 15, 574 55 L 574 130 C 574 110, 560 90, 530 60 C 495 25, 455 0, 430 0 Z"
            fill="url(#web-grad-rose)"
          />

          {/* Layer 4: Main peach-rose fluid blob */}
          <path
            d="M 280 140 C 275 105, 305 75, 350 75 C 410 75, 450 110, 480 140 C 520 180, 560 170, 574 185 L 574 245 L 430 245 C 380 245, 330 230, 295 195 C 280 180, 282 160, 280 140 Z"
            fill="url(#web-grad-peach)"
          />

          {/* Layer 5: Distinctive donut ring & accents below batch text */}
          <circle cx="253" cy="116" r="16" stroke="url(#web-grad-ring)" strokeWidth="6" fill="none" opacity="0.88" />
          <circle cx="258" cy="88" r="5" fill="#f7bca4" opacity="0.85" />
          <circle cx="226" cy="90" r="6" stroke="#f7bf9c" strokeWidth="2" fill="none" opacity="0.75" />

          {/* Bottom-right subtle sun ray petals */}
          <ellipse cx="538" cy="235" rx="5" ry="10" transform="rotate(-30 538 235)" fill="#f6b8c4" opacity="0.8" />
          <ellipse cx="558" cy="225" rx="5" ry="12" transform="rotate(-15 558 225)" fill="#f6b8c4" opacity="0.85" />
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
            <linearGradient id="cloud-grad-top" x1="410" y1="0" x2="574" y2="110" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#d6e2f7" />
              <stop offset="100%" stopColor="#b8cae8" />
            </linearGradient>
            <linearGradient id="cloud-grad-slate" x1="212" y1="135" x2="365" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#9ea4ca" />
              <stop offset="100%" stopColor="#8287b4" />
            </linearGradient>
            <linearGradient id="cloud-grad-bean" x1="175" y1="85" x2="235" y2="135" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#b5c4e2" />
              <stop offset="100%" stopColor="#95abd8" />
            </linearGradient>
            <linearGradient id="cloud-grad-lilac" x1="320" y1="25" x2="574" y2="240" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#dbaad5" />
              <stop offset="45%" stopColor="#c9b2d6" />
              <stop offset="100%" stopColor="#adb0d8" />
            </linearGradient>
            <radialGradient id="cloud-bubble-1" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#d5e0f5" stopOpacity="0.6" />
            </radialGradient>
            <radialGradient id="cloud-bubble-2" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#c0cdf0" stopOpacity="0.6" />
            </radialGradient>
          </defs>

          {/* Layer 1: Background periwinkle cloud curve (top-right) */}
          <path
            d="M 410 0 C 455 0, 515 15, 555 45 C 570 58, 574 75, 574 110 L 574 0 Z"
            fill="url(#cloud-grad-top)"
          />

          {/* Layer 2: Lower-left slate/periwinkle underlayer */}
          <path
            d="M 212 245 C 212 170, 250 135, 305 145 C 355 155, 375 195, 365 245 Z"
            fill="url(#cloud-grad-slate)"
            opacity="0.88"
          />

          {/* Layer 3: Floating blue cloud bean (below batch text) */}
          <path
            d="M 175 100 C 190 85, 225 90, 235 105 C 242 118, 232 134, 218 135 C 198 136, 172 125, 175 100 Z"
            fill="url(#cloud-grad-bean)"
          />

          {/* Layer 4: Main billowing lilac/pink cloud body */}
          <path
            d="M 345 45 C 385 25, 445 35, 495 65 C 545 95, 560 140, 530 185 C 500 225, 435 240, 385 225 C 340 210, 310 180, 320 140 C 328 105, 315 65, 345 45 Z"
            fill="url(#cloud-grad-lilac)"
          />

          {/* Layer 5: Accents on left flank */}
          <circle cx="278" cy="142" r="11" fill="url(#cloud-bubble-1)" stroke="#d5e0f5" strokeWidth="1" />
          <circle cx="262" cy="165" r="7" fill="url(#cloud-bubble-2)" stroke="#c0cdf0" strokeWidth="0.8" />
          <circle cx="286" cy="170" r="4" fill="#b5c4ea" fillOpacity="0.8" />
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
            <linearGradient id="se-grad-top" x1="350" y1="0" x2="574" y2="135" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f5b5bf" />
              <stop offset="100%" stopColor="#e9a1af" />
            </linearGradient>
            <linearGradient id="se-grad-lavender" x1="235" y1="155" x2="400" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#e89bb0" />
              <stop offset="100%" stopColor="#e28a9f" />
            </linearGradient>
            <linearGradient id="se-grad-bean" x1="165" y1="155" x2="222" y2="225" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f4beca" />
              <stop offset="100%" stopColor="#eba3b4" />
            </linearGradient>
            <linearGradient id="se-grad-orange" x1="310" y1="45" x2="574" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f99839" />
              <stop offset="50%" stopColor="#f7a748" />
              <stop offset="100%" stopColor="#fbb96b" />
            </linearGradient>
          </defs>

          {/* Layer 1: Top-right rose-pink lobe */}
          <path
            d="M 350 0 C 400 0, 480 15, 525 50 C 555 75, 574 100, 574 135 L 574 0 Z"
            fill="url(#se-grad-top)"
            opacity="0.88"
          />

          {/* Layer 2: Top edge floating rose petals */}
          <path
            d="M 310 15 C 310 5, 325 0, 340 5 C 350 12, 345 25, 330 25 C 318 25, 310 22, 310 15 Z"
            fill="#f6b8c4"
          />
          <path
            d="M 355 10 C 355 2, 368 0, 380 4 C 388 10, 384 20, 372 20 C 362 20, 355 16, 355 10 Z"
            fill="#f5bcc8"
          />

          {/* Layer 3: Bottom-left lavender-pink underlayer (behind Susan) */}
          <path
            d="M 235 245 C 235 180, 275 155, 335 160 C 375 165, 395 200, 400 245 Z"
            fill="url(#se-grad-lavender)"
            opacity="0.85"
          />

          {/* Layer 4: Soft pink bean to the left of Susan */}
          <path
            d="M 165 180 C 180 155, 215 160, 222 180 C 228 200, 205 225, 185 220 C 170 215, 155 195, 165 180 Z"
            fill="url(#se-grad-bean)"
          />

          {/* Layer 5: Main rich warm apricot-orange fluid blob */}
          <path
            d="M 375 62 C 430 45, 505 50, 550 85 C 574 105, 574 150, 555 185 C 530 225, 460 245, 400 235 C 345 225, 305 195, 310 155 C 315 120, 330 75, 375 62 Z"
            fill="url(#se-grad-orange)"
          />
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
            <linearGradient id="gd-grad-yellow" x1="375" y1="0" x2="574" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffd385" />
              <stop offset="60%" stopColor="#ffbe6f" />
              <stop offset="100%" stopColor="#ffa85c" />
            </linearGradient>
            <linearGradient id="gd-grad-apricot" x1="300" y1="155" x2="470" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffe1a0" />
              <stop offset="100%" stopColor="#ffd178" />
            </linearGradient>
            <linearGradient id="gd-grad-mint" x1="310" y1="0" x2="520" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#c7e8a3" />
              <stop offset="30%" stopColor="#b5e7ad" />
              <stop offset="65%" stopColor="#94e3be" />
              <stop offset="100%" stopColor="#7be0cb" />
            </linearGradient>
            <linearGradient id="gd-bubble-yellow" x1="280" y1="65" x2="305" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffe4a8" />
              <stop offset="100%" stopColor="#ffcc7a" />
            </linearGradient>
            <linearGradient id="gd-bubble-teal" x1="390" y1="205" x2="415" y2="225" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8ee4ce" />
              <stop offset="100%" stopColor="#6ae2c0" />
            </linearGradient>
          </defs>

          {/* Layer 1: Sunny apricot-yellow shape spanning top-right and behind button */}
          <path
            d="M 375 0 C 430 0, 515 20, 560 65 C 574 85, 574 125, 574 245 L 440 245 C 390 245, 345 210, 360 170 C 375 130, 400 110, 410 70 C 418 35, 395 10, 375 0 Z"
            fill="url(#gd-grad-yellow)"
            opacity="0.88"
          />

          {/* Layer 2: Sunny apricot underlayer lobe behind Betsy */}
          <path
            d="M 300 245 C 300 185, 345 155, 405 165 C 445 172, 465 205, 470 245 Z"
            fill="url(#gd-grad-apricot)"
            opacity="0.85"
          />

          {/* Layer 3: Main fresh mint-green fluid blob */}
          <path
            d="M 310 10 C 355 0, 420 8, 465 45 C 505 78, 510 120, 480 155 C 450 190, 405 180, 380 160 C 365 145, 345 155, 330 170 C 305 195, 295 215, 330 220 C 355 225, 405 215, 440 205 L 455 230 C 410 245, 350 242, 310 232 C 280 222, 285 182, 310 162 C 330 147, 350 137, 360 108 C 370 73, 335 38, 310 10 Z"
            fill="url(#gd-grad-mint)"
          />

          {/* Layer 4: Decorative accents */}
          {/* Waist indentation yellow bubble & dot */}
          <circle cx="290" cy="75" r="14" fill="url(#gd-bubble-yellow)" stroke="#ffd37a" strokeWidth="0.8" />
          <circle cx="288" cy="97" r="5.5" fill="#ffde97" />

          {/* Top-right corner turquoise open ring & triangle */}
          <circle cx="532" cy="28" r="12" stroke="#7be0cb" strokeWidth="3.2" fill="none" opacity="0.85" />
          <circle cx="548" cy="40" r="4" fill="#9ee5d2" opacity="0.8" />

          {/* Bottom edge turquoise droplet & dot */}
          <circle cx="400" cy="212" r="9.5" fill="url(#gd-bubble-teal)" stroke="#6ae2c0" strokeWidth="0.8" />
          <circle cx="414" cy="218" r="4" fill="#a4ecd4" />

          {/* Right edge mint leaf peeking out */}
          <ellipse cx="548" cy="125" rx="7" ry="12" transform="rotate(25 548 125)" fill="#8ae2c4" opacity="0.85" />
        </svg>
      );

    default:
      return null;
  }
}
