import React from 'react';

/**
 * CardIllustrations.jsx
 * Course-card SVG artwork, faithfully reconstructed from the original reference screenshots.
 * Every illustration is traced from its own reference—shapes, gradients, layering, and
 * decorative accents are matched individually.
 *
 * viewBox="0 0 574 245" — matches card aspect ratio; preserveAspectRatio="none"
 * lets the SVG fill the container exactly.
 */

export function CardIllustration({ theme }) {
  switch (theme) {

    /* =========================================================================
       1. ARTIFICIAL INTELLIGENCE — lavender / slate-blue / periwinkle
       Reference: large lavender blob (slight human-profile curve on left edge),
       light-blue periwinkle lobe behind it (upper-right), dark-slate underlayer
       (lower-left behind "Mr. Felix"), two glassy white bubbles on the left flank.
       ========================================================================= */
    case 'lavender':
      return (
        <svg className="card-abstract-svg" viewBox="0 0 574 245"
          fill="none" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none" aria-hidden="true">
          <defs>
            {/* Periwinkle-blue background lobe — top-right */}
            <linearGradient id="ai-bg" x1="330" y1="0" x2="574" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#c9daf5" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#a8c4ec" stopOpacity="0.75" />
            </linearGradient>
            {/* Slate-blue underlayer — lower-left */}
            <linearGradient id="ai-slate" x1="150" y1="140" x2="280" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8ea5c8" stopOpacity="0.88" />
              <stop offset="100%" stopColor="#738eb8" stopOpacity="0.9" />
            </linearGradient>
            {/* Main lavender-to-periwinkle organic blob */}
            <linearGradient id="ai-main" x1="200" y1="10" x2="530" y2="230" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#d4a8cc" />
              <stop offset="35%" stopColor="#c49bc5" />
              <stop offset="70%" stopColor="#b096c8" />
              <stop offset="100%" stopColor="#9aa4d0" />
            </linearGradient>
            {/* White glassy bubble fill */}
            <radialGradient id="ai-bubble" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.92" />
              <stop offset="60%" stopColor="#e8f2fc" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#ccdff5" stopOpacity="0.4" />
            </radialGradient>
          </defs>

          {/* Layer 1: Periwinkle background lobe — sweeps from upper-right down through right edge */}
          <path
            d="M 295 0 C 360 0 430 18 480 50 C 530 82 560 125 565 175 C 568 200 560 220 540 232
               C 515 245 480 242 450 240 L 574 240 L 574 0 Z"
            fill="url(#ai-bg)"
          />

          {/* Layer 2: Slate-blue underlayer — bottom-left, peeks behind instructor text */}
          <path
            d="M 145 245 C 148 210 158 182 175 162 C 190 145 207 138 222 150
               C 238 164 248 202 255 245 Z"
            fill="url(#ai-slate)"
          />

          {/* Layer 3: Main lavender fluid blob — large, profile-curve on left, fills card right */}
          <path
            d="M 248 18 C 295 14 348 26 392 46 C 450 72 500 112 530 158
               C 552 193 550 222 522 236 C 494 247 448 240 412 234
               C 372 228 328 236 292 240 C 254 244 238 230 235 210
               C 230 178 224 140 212 112 C 198 82 180 54 197 30 C 212 14 232 18 248 18 Z"
            fill="url(#ai-main)"
            fillOpacity="0.93"
          />

          {/* Layer 4: Large glassy white bubble — overlaps left edge of lavender blob */}
          <circle cx="200" cy="148" r="17" fill="url(#ai-bubble)" stroke="#d0e4f5" strokeWidth="1.5" />

          {/* Layer 5: Smaller glassy bubble below */}
          <circle cx="212" cy="186" r="12" fill="url(#ai-bubble)" stroke="#d0e4f5" strokeWidth="1" />

          {/* Layer 6: Tiny dot accent */}
          <circle cx="180" cy="168" r="5" fill="#deeaf8" fillOpacity="0.8" />
        </svg>
      );

    /* =========================================================================
       2. OPERATING SYSTEMS — peach / coral / mint-green / yellow-orange
       Reference: three distinct large organic overlapping blobs —
         • coral/orange-peach blob upper-left area
         • large mint/seafoam blob filling right side (S-curve waist)
         • yellow-orange underlayer peeking bottom
       Left cluster: 3 small teal-green dots. Upper-right: 2 small coral dots.
       Inside the mint: a darker teal curved bean/crescent.
       ========================================================================= */
    case 'peach':
    case 'yellow-mint':
      return (
        <svg className="card-abstract-svg" viewBox="0 0 574 245"
          fill="none" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none" aria-hidden="true">
          <defs>
            {/* Coral/peach blob */}
            <linearGradient id="os-coral" x1="260" y1="10" x2="420" y2="155" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f4a07a" />
              <stop offset="55%" stopColor="#f59070" />
              <stop offset="100%" stopColor="#f28060" />
            </linearGradient>
            {/* Yellow/apricot underlayer */}
            <linearGradient id="os-yellow" x1="300" y1="150" x2="574" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fdd080" />
              <stop offset="60%" stopColor="#fdbe68" />
              <stop offset="100%" stopColor="#fba850" />
            </linearGradient>
            {/* Mint/teal main blob */}
            <linearGradient id="os-mint" x1="360" y1="10" x2="540" y2="230" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#a8e6b4" />
              <stop offset="40%" stopColor="#88e0c8" />
              <stop offset="100%" stopColor="#62d4b5" />
            </linearGradient>
            {/* Darker teal crescent inside mint */}
            <linearGradient id="os-bean" x1="390" y1="100" x2="430" y2="175" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#5ecfb0" />
              <stop offset="100%" stopColor="#40c09e" />
            </linearGradient>
          </defs>

          {/* Layer 1: Yellow-orange underlayer — bottom strip, wide */}
          <path
            d="M 290 245 C 295 192 330 160 390 158 C 445 156 495 185 520 220 L 535 245 Z"
            fill="url(#os-yellow)"
            opacity="0.9"
          />

          {/* Layer 2: Coral/peach blob — upper-center-left, large rounded shape */}
          <path
            d="M 272 12 C 312 -2 360 8 390 38 C 418 66 422 108 404 140
               C 384 172 344 182 306 172 C 268 162 248 132 248 98
               C 248 64 250 26 272 12 Z"
            fill="url(#os-coral)"
          />

          {/* Layer 3: Main mint-teal fluid blob — fills right side with S-curve waist */}
          <path
            d="M 370 0 C 418 -4 470 12 504 44 C 538 76 544 122 524 158
               C 506 190 472 200 448 188 C 428 178 415 158 400 148
               C 382 136 360 148 348 170 C 332 198 352 228 390 238
               C 424 246 474 238 520 222 L 540 245 L 360 245
               C 328 245 310 220 322 190 C 334 160 360 146 366 118
               C 372 88 344 52 352 22 C 356 10 364 2 370 0 Z"
            fill="url(#os-mint)"
          />

          {/* Layer 4: Dark teal crescent inside mint blob */}
          <path
            d="M 402 106 C 416 106 428 122 424 148 C 420 168 406 176 400 162
               C 394 148 406 138 406 124 C 406 116 400 110 402 106 Z"
            fill="url(#os-bean)"
          />

          {/* Left cluster: 3 small teal-green dots */}
          <circle cx="298" cy="158" r="9" fill="#72dfc0" opacity="0.9" />
          <circle cx="316" cy="170" r="7" fill="#88e4c8" opacity="0.85" />
          <circle cx="300" cy="183" r="6" fill="#a0e8cc" opacity="0.8" />

          {/* Upper-right: 2 coral accent dots */}
          <circle cx="510" cy="18" r="7.5" fill="#f4a080" opacity="0.88" />
          <circle cx="536" cy="36" r="9.5" fill="#f29070" opacity="0.9" />
        </svg>
      );

    /* =========================================================================
       3. WEB PROGRAMMING — warm amber / rose-pink / apricot
       Reference:
         • Warm amber/orange circular lobe — upper right, partially clipped
         • Large soft rose/salmon fluid body — center and bottom right
         • Soft cream/apricot underlayer — bottom-left, peeking out
         • Small pink donut ring — left side at batch text height
         • Small dot above the ring
         • Two small petal/leaf shapes at bottom-right corner
       ========================================================================= */
    case 'yellow':
      return (
        <svg className="card-abstract-svg" viewBox="0 0 574 245"
          fill="none" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none" aria-hidden="true">
          <defs>
            {/* Warm amber/orange top lobe */}
            <linearGradient id="web-amber" x1="360" y1="0" x2="574" y2="130" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f9b870" />
              <stop offset="55%" stopColor="#f5a558" />
              <stop offset="100%" stopColor="#f09040" />
            </linearGradient>
            {/* Apricot/cream underlayer */}
            <linearGradient id="web-apricot" x1="230" y1="155" x2="500" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fde0c8" />
              <stop offset="100%" stopColor="#fac8aa" />
            </linearGradient>
            {/* Main rose-pink/salmon blob */}
            <linearGradient id="web-rose" x1="240" y1="60" x2="574" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f5bfc8" />
              <stop offset="45%" stopColor="#f0c8bc" />
              <stop offset="80%" stopColor="#edb8c0" />
              <stop offset="100%" stopColor="#f0c0c8" />
            </linearGradient>
            {/* Ring gradient */}
            <linearGradient id="web-ring" x1="224" y1="95" x2="265" y2="135" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f8c0a4" />
              <stop offset="100%" stopColor="#eda0b8" />
            </linearGradient>
          </defs>

          {/* Layer 1: Cream/apricot underlayer — bottom-left bulge */}
          <path
            d="M 234 245 C 238 188 270 152 330 152 C 388 152 428 186 438 230 L 445 245 Z"
            fill="url(#web-apricot)"
            opacity="0.88"
          />

          {/* Layer 2: Warm amber lobe — upper right, large circle partially clipped */}
          <path
            d="M 400 0 C 452 0 512 20 548 56 C 574 80 574 112 574 112 L 574 0 Z"
            fill="url(#web-amber)"
          />
          {/* Extend amber lower to create the full rounded lobe */}
          <ellipse cx="490" cy="64" rx="105" ry="92" fill="url(#web-amber)" />

          {/* Layer 3: Main rose-pink fluid blob — large, fills right center and bottom */}
          <path
            d="M 260 88 C 296 58 368 54 420 80 C 474 108 504 158 494 202
               C 480 244 422 252 372 242 C 326 232 286 202 270 162
               C 252 118 246 108 260 88 Z"
            fill="url(#web-rose)"
          />
          {/* Extend blob rightward to card edge */}
          <path
            d="M 420 80 C 474 108 504 158 494 202 L 574 202 L 574 60 C 548 56 512 20 420 80 Z"
            fill="url(#web-rose)"
            opacity="0.7"
          />

          {/* Layer 4: Donut ring — left side, at batch-text height */}
          <circle cx="252" cy="118" r="18" stroke="url(#web-ring)" strokeWidth="7" fill="none" opacity="0.85" />

          {/* Dot above the ring */}
          <circle cx="264" cy="92" r="6" fill="#f8c0a8" opacity="0.88" />

          {/* Petal accents — bottom-right corner */}
          <ellipse cx="548" cy="232" rx="7" ry="13" transform="rotate(-25 548 232)" fill="#f0b4c0" opacity="0.82" />
          <ellipse cx="566" cy="218" rx="6" ry="12" transform="rotate(-10 566 218)" fill="#f2b8c4" opacity="0.78" />
        </svg>
      );

    /* =========================================================================
       4. CLOUD COMPUTING — lavender / mauve-purple / periwinkle-blue
       Reference:
         • Large lavender/mauve main blob — fills right side, irregular bulging top
         • Periwinkle/steel-blue smaller backing lobe — upper-right behind main blob
         • Slate-periwinkle underlayer — bottom-left behind "Mr. Alex"
         • Small blue kidney-bean accent — left of batch text
         • Three glassy white/periwinkle bubbles — left flank of main blob
       ========================================================================= */
    case 'teal':
    case 'lavender-blue':
      return (
        <svg className="card-abstract-svg" viewBox="0 0 574 245"
          fill="none" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none" aria-hidden="true">
          <defs>
            {/* Periwinkle/steel-blue backing lobe */}
            <linearGradient id="cl-back" x1="360" y1="0" x2="574" y2="160" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#c4d0ee" />
              <stop offset="100%" stopColor="#a8bce0" />
            </linearGradient>
            {/* Slate underlayer bottom-left */}
            <linearGradient id="cl-slate" x1="165" y1="140" x2="360" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#9fa8cc" />
              <stop offset="100%" stopColor="#8590bc" />
            </linearGradient>
            {/* Blue kidney bean accent */}
            <linearGradient id="cl-bean" x1="165" y1="88" x2="230" y2="138" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#b0c4e0" />
              <stop offset="100%" stopColor="#94aed8" />
            </linearGradient>
            {/* Main lavender/mauve cloud blob */}
            <linearGradient id="cl-main" x1="280" y1="20" x2="574" y2="240" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#dfa8d8" />
              <stop offset="40%" stopColor="#ccaed8" />
              <stop offset="80%" stopColor="#b8b4d8" />
              <stop offset="100%" stopColor="#acacd4" />
            </linearGradient>
            {/* Glassy bubble */}
            <radialGradient id="cl-bubble" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.92" />
              <stop offset="70%" stopColor="#e0e8f8" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#c8d8f0" stopOpacity="0.35" />
            </radialGradient>
          </defs>

          {/* Layer 1: Periwinkle backing lobe — upper-right */}
          <path
            d="M 395 0 C 455 0 520 18 558 52 C 574 68 574 95 574 130 L 574 0 Z"
            fill="url(#cl-back)"
          />

          {/* Layer 2: Slate underlayer — bottom-left, peeks behind instructor line */}
          <path
            d="M 165 245 C 170 195 192 162 228 152 C 260 144 288 158 298 192 C 306 218 302 240 295 245 Z"
            fill="url(#cl-slate)"
            opacity="0.88"
          />

          {/* Layer 3: Blue kidney-bean accent — left of batch text */}
          <path
            d="M 168 96 C 182 82 218 86 228 102 C 236 116 226 134 210 136
               C 190 138 162 124 168 96 Z"
            fill="url(#cl-bean)"
          />

          {/* Layer 4: Main lavender/mauve cloud blob — large, fills card right */}
          <path
            d="M 310 32 C 354 14 422 20 472 52 C 524 86 548 142 530 188
               C 512 232 454 248 404 236 C 358 224 324 192 322 152
               C 320 114 306 50 310 32 Z"
            fill="url(#cl-main)"
          />

          {/* Layer 5: Glassy bubbles — left flank */}
          <circle cx="278" cy="145" r="13" fill="url(#cl-bubble)" stroke="#c8d8f0" strokeWidth="1.2" />
          <circle cx="264" cy="170" r="8" fill="url(#cl-bubble)" stroke="#b8ccec" strokeWidth="0.9" />
          <circle cx="288" cy="178" r="5" fill="#d0dff4" fillOpacity="0.82" />
        </svg>
      );

    /* =========================================================================
       5. SOFTWARE ENGINEERING — rose-pink / warm orange / peach / mauve
       Reference (THE HIGH-DETAIL REFERENCE from the new large uploads):
         • Top-right area: multiple overlapping pink/rose lobes clipped by card boundary
         • Large warm ORANGE blob — dominant, center-right
         • Soft peach/cream underlayer — bottom-left area, rounds out behind instructor
         • Small mauve/purple-pink bean — bottom-left, below instructor text
         • Donut ring with hollow center — left side near batch text (open circle)
         • Small dot above the ring
       ========================================================================= */
    case 'pink':
    case 'peach-orange':
      return (
        <svg className="card-abstract-svg" viewBox="0 0 574 245"
          fill="none" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none" aria-hidden="true">
          <defs>
            {/* Top-right rose-pink lobes */}
            <linearGradient id="se-toprose" x1="320" y1="0" x2="574" y2="150" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f5b0c0" />
              <stop offset="100%" stopColor="#eca0b0" />
            </linearGradient>
            {/* Peach/cream underlayer */}
            <linearGradient id="se-peach" x1="200" y1="155" x2="440" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fdd8b8" />
              <stop offset="100%" stopColor="#f8c4a0" />
            </linearGradient>
            {/* Mauve/pink bottom-left bean */}
            <linearGradient id="se-mauve" x1="148" y1="178" x2="225" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#d4a0c0" />
              <stop offset="100%" stopColor="#c88cb0" />
            </linearGradient>
            {/* Main warm orange blob */}
            <linearGradient id="se-orange" x1="300" y1="40" x2="574" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fab86a" />
              <stop offset="40%" stopColor="#f5a850" />
              <stop offset="100%" stopColor="#f09238" />
            </linearGradient>
            {/* Ring gradient */}
            <linearGradient id="se-ring" x1="238" y1="90" x2="278" y2="130" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f8c0a8" />
              <stop offset="100%" stopColor="#eea0b4" />
            </linearGradient>
          </defs>

          {/* Layer 1: Top-right rose-pink lobe — bleeds off top and right edge */}
          <path
            d="M 365 0 C 415 -8 490 10 536 48 C 560 68 574 96 574 130 L 574 0 Z"
            fill="url(#se-toprose)"
            opacity="0.9"
          />
          {/* Second overlapping pink lobe — slightly lower, softer */}
          <ellipse cx="480" cy="80" rx="130" ry="100" fill="url(#se-toprose)" opacity="0.55" />

          {/* Layer 2: Peach/cream underlayer — bottom, rounds behind text */}
          <path
            d="M 200 245 C 205 192 240 158 300 155 C 358 152 400 184 412 224 L 418 245 Z"
            fill="url(#se-peach)"
            opacity="0.88"
          />

          {/* Layer 3: Mauve/pink bean — bottom-left, below instructor */}
          <path
            d="M 148 200 C 160 178 198 180 208 200 C 216 218 196 244 175 242
               C 158 240 142 220 148 200 Z"
            fill="url(#se-mauve)"
            opacity="0.88"
          />

          {/* Layer 4: Main warm orange blob — large, center-right dominant */}
          <path
            d="M 338 52 C 385 32 462 40 512 72 C 558 102 568 156 548 196
               C 526 238 464 252 410 240 C 358 228 316 196 310 156
               C 304 116 300 68 338 52 Z"
            fill="url(#se-orange)"
          />

          {/* Layer 5: Donut ring — left side, near batch text height */}
          <circle cx="255" cy="112" r="17" stroke="url(#se-ring)" strokeWidth="6.5" fill="none" opacity="0.88" />

          {/* Dot above the ring */}
          <circle cx="268" cy="86" r="5.5" fill="#f8c0a8" opacity="0.88" />
        </svg>
      );

    /* =========================================================================
       6. GRAPHIC DESIGNING — mint-green / apricot-yellow / teal accents
       Reference (THE HIGH-DETAIL LARGE REFERENCE):
         • Large fresh mint-green blob — dominant, fills center-right,
           has a distinct large bottom lobe that sweeps low (duck-shape / kidney)
         • Warm apricot/yellow backing — right side behind mint blob
         • Yellow bubble cluster — two yellow circles left of the mint blob waist
         • Small open teal ring — upper-right corner
         • Small solid teal circle — bottom edge of card, below right lobe
       ========================================================================= */
    case 'light-green':
    case 'mint-yellow':
      return (
        <svg className="card-abstract-svg" viewBox="0 0 574 245"
          fill="none" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none" aria-hidden="true">
          <defs>
            {/* Apricot-yellow backing */}
            <linearGradient id="gd-apricot" x1="380" y1="0" x2="574" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffd07a" />
              <stop offset="55%" stopColor="#ffb85c" />
              <stop offset="100%" stopColor="#ffa040" />
            </linearGradient>
            {/* Main mint-green blob */}
            <linearGradient id="gd-mint" x1="290" y1="0" x2="530" y2="245" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#c0e890" />
              <stop offset="30%" stopColor="#a0e0a8" />
              <stop offset="65%" stopColor="#78dac0" />
              <stop offset="100%" stopColor="#5ad4bc" />
            </linearGradient>
            {/* Yellow bubble fill */}
            <radialGradient id="gd-ybubble" cx="38%" cy="35%" r="68%">
              <stop offset="0%" stopColor="#ffe898" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ffd060" stopOpacity="0.85" />
            </radialGradient>
            {/* Teal circle bottom */}
            <radialGradient id="gd-teal" cx="40%" cy="38%" r="65%">
              <stop offset="0%" stopColor="#70dcc0" />
              <stop offset="100%" stopColor="#48cca8" />
            </radialGradient>
          </defs>

          {/* Layer 1: Apricot/yellow backing — right side, partially behind mint */}
          <path
            d="M 415 0 C 468 0 530 22 562 60 C 580 82 574 115 574 145 L 574 245
               L 445 245 C 400 245 365 215 375 175 C 385 138 415 115 425 78
               C 432 48 412 16 415 0 Z"
            fill="url(#gd-apricot)"
            opacity="0.88"
          />

          {/* Layer 2: Main large mint-green blob — kidney/duck shape with big bottom lobe */}
          <path
            d="M 308 8 C 356 -4 428 6 472 42 C 514 76 518 126 492 160
               C 470 190 435 196 410 182 C 390 170 374 155 356 162
               C 334 172 320 198 346 220 C 365 236 406 235 445 226
               L 460 245 L 308 245 C 280 245 272 222 284 200
               C 296 178 322 165 330 142 C 340 114 318 74 308 8 Z"
            fill="url(#gd-mint)"
          />

          {/* Layer 3: Yellow bubble cluster — two circles left of waist */}
          <circle cx="296" cy="86" r="16" fill="url(#gd-ybubble)" />
          <circle cx="296" cy="115" r="11" fill="url(#gd-ybubble)" opacity="0.85" />

          {/* Layer 4: Small open teal ring — upper-right corner */}
          <circle cx="534" cy="32" r="13" stroke="#70dcc0" strokeWidth="3.5" fill="none" opacity="0.85" />
          <circle cx="550" cy="46" r="4.5" fill="#78dcc0" opacity="0.82" />

          {/* Layer 5: Solid teal circle — bottom edge below right lobe */}
          <circle cx="412" cy="237" r="11" fill="url(#gd-teal)" opacity="0.92" />
          <circle cx="430" cy="242" r="5" fill="#70dcc8" opacity="0.8" />
        </svg>
      );

    default:
      return null;
  }
}
