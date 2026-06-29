import React, { useState, useEffect, useRef } from 'react';
import Dock from './components/Dock/Dock';
import { 
  User, 
  Code2, 
  Briefcase, 
  Mail, 
  Home, 
  GraduationCap, 
  Trophy, 
  Award, 
  FileText,
  Sun,
  Moon,
  Github,
  Linkedin,
  ArrowUpRight,
  Download,
  CheckCircle,
  Network,
  Radar,
  Eye,
  Database,
  ChevronDown,
  ChevronUp,
  Coffee,
  Cpu,
  MapPin,
  Palette,
  Flame,
  Sparkles,
  Heart,
  Puzzle,
  Compass,
  Quote,
  Instagram
} from 'lucide-react';
import Experiences from './components/Experiences';
import TopProjects from './components/TopProjects';
import ProjectsPage from './components/ProjectsPage';
import CertificationsPage from './components/CertificationsPage';
import skillsData from './data/skills.json';

const greetingWords = [
  "Hello",       // English
  "Bonjour",     // French
  "Hola",        // Spanish
  "Ciao",        // Italian
  "Konnichiwa",  // Japanese
  "Olá",         // Portuguese
  "Nǐ Hǎo",      // Chinese
  "Anyoung",     // Korean
  "Guten Tag",   // German
  "नमस्ते"       // Hindi (Namaste)
];

// ==========================================
// BENTO GRID PIXEL ART COMPONENTS
// ==========================================



const PixelPlane = () => {
  const planePixels = [
    [12, 3], [13, 3], [12, 4], [13, 4],
    [11, 4], [11, 5], [10, 5], [10, 6], [9, 6], [9, 7], [8, 7], [8, 8], [7, 8], [7, 9], [6, 9], [6, 10], [5, 10], [5, 11], [4, 11], [4, 12],
    [2, 12], [3, 12], [2, 13], [3, 13], [1, 14], [2, 14], [1, 15], [2, 15],
    [8, 3], [9, 3], [7, 4], [8, 4], [6, 5], [7, 5], [5, 6], [6, 6], [4, 7], [5, 7], [3, 8], [4, 8],
    [11, 7], [11, 8], [10, 8], [10, 9], [9, 9], [9, 10], [8, 10], [8, 11], [7, 11], [7, 12], [6, 12], [6, 13]
  ];
  return (
    <svg viewBox="0 0 16 16" className="pixel-plane" style={{ width: '56px', height: '56px', fill: 'var(--text-primary)' }}>
      {planePixels.map(([x, y], idx) => (
        <rect key={idx} x={x} y={y} width="1" height="1" />
      ))}
    </svg>
  );
};

const PixelIndiaMap = () => {
  const indiaOutline = [
    [14, 1], [15, 1], [14, 2], [15, 2], [16, 2], [13, 3], [14, 3], [15, 3], [16, 3], [14, 4], [15, 4],
    [13, 5], [13, 6], [12, 7], [12, 8], [11, 9], [11, 10], [10, 11], [10, 12], [9, 13], [8, 13], [7, 14], [8, 14], [9, 14], [7, 15], [8, 15], [9, 15],
    [10, 16], [11, 16], [11, 17], [12, 18], [12, 19], [12, 20], [13, 21], [13, 22], [14, 23], [14, 24], [14, 25],
    [15, 30],
    [16, 29], [16, 28], [17, 27], [17, 26], [17, 25], [18, 24], [18, 23], [19, 22], [19, 21], [20, 20], [20, 19], [21, 18], [21, 17], [22, 16], [22, 15],
    [23, 14], [24, 13], [25, 13], [26, 12], [27, 11], [28, 10], [28, 9], [27, 9], [26, 10], [25, 10], [24, 10],
    [23, 9], [22, 8], [21, 7], [20, 6], [19, 5], [18, 4], [17, 3]
  ];

  const keralaPixels = [
    [14, 26], [13, 27], [13, 28], [14, 29]
  ];

  return (
    <div className="pixel-map-container" style={{ position: 'relative', width: '100%', height: '140px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0.5rem' }}>
      <svg viewBox="0 0 30 32" style={{ width: '130px', height: '140px' }}>
        {indiaOutline.map(([x, y], idx) => (
          <rect key={`out-${idx}`} x={x} y={y} width="1" height="1" fill="var(--text-tertiary)" opacity="0.6" />
        ))}
        {keralaPixels.map(([x, y], idx) => (
          <rect key={`ker-${idx}`} x={x} y={y} width="1" height="1" fill="var(--accent-color)" />
        ))}
        <circle cx="13.5" cy="27.5" r="0.6" fill="#ff3300" className="pulsing-location-dot" />
      </svg>
    </div>
  );
};

const PixelF1Car = () => {
  const wheels = [
    [3, 6], [4, 6], [5, 6],
    [3, 7], [4, 7], [5, 7],
    [3, 8], [4, 8], [5, 8],
    [15, 7], [16, 7],
    [15, 8], [16, 8]
  ];
  
  const whiteBody = [
    [6, 7], [7, 7], [8, 7], [9, 7], [10, 7], [11, 7], [12, 7], [13, 7], [14, 7],
    [6, 8], [7, 8], [11, 8], [12, 8], [13, 8], [14, 8],
    [17, 7], [18, 7], [19, 7],
    [2, 5], [2, 6]
  ];

  const orangeBody = [
    [8, 6], [9, 6], [10, 6],
    [11, 6], [12, 6],
    [18, 8], [19, 8],
    [19, 9], [20, 9], [21, 9],
    [1, 4], [2, 4], [3, 4]
  ];

  const cockpit = [
    [10, 5], [11, 5],
    [13, 6]
  ];

  const trails = [
    [0, 5], [-1, 5], [-2, 5],
    [-1, 7], [-2, 7], [-3, 7],
    [-2, 8], [-3, 8], [-4, 8]
  ];

  return (
    <svg viewBox="-5 2 28 10" className="pixel-f1-car" style={{ width: '100%', maxHeight: '75px', marginTop: 'auto' }}>
      {wheels.map(([x, y], idx) => (
        <rect key={`w-${idx}`} x={x} y={y} width="1" height="1" fill="#2a2a2a" />
      ))}
      {whiteBody.map(([x, y], idx) => (
        <rect key={`b-w-${idx}`} x={x} y={y} width="1" height="1" fill="var(--text-primary)" />
      ))}
      {orangeBody.map(([x, y], idx) => (
        <rect key={`b-o-${idx}`} x={x} y={y} width="1" height="1" fill="var(--accent-color)" />
      ))}
      {cockpit.map(([x, y], idx) => (
        <rect key={`c-${idx}`} x={x} y={y} width="1" height="1" fill="#121212" />
      ))}
      {trails.map(([x, y], idx) => (
        <rect key={`t-${idx}`} x={x} y={y} width="1" height="1" fill="var(--accent-color)" opacity="0.6" className="f1-trail-line" />
      ))}
    </svg>
  );
};

const PixelCoffeeMug = () => {
  const mugOutline = [
    [4, 4], [5, 4], [6, 4], [7, 4], [8, 4], [9, 4], [10, 4], [11, 4],
    [4, 5], [4, 6], [4, 7], [4, 8], [4, 9], [4, 10], [4, 11], [4, 12],
    [11, 5], [11, 6], [11, 7], [11, 8], [11, 9], [11, 10], [11, 11], [11, 12],
    [5, 13], [6, 13], [7, 13], [8, 13], [9, 13], [10, 13],
    [12, 6], [13, 6], [14, 7], [14, 8], [14, 9], [14, 10], [13, 11], [12, 11]
  ];

  const coffeeFill = [
    [5, 5], [6, 5], [7, 5], [8, 5], [9, 5], [10, 5],
    [5, 6], [6, 6], [7, 6], [8, 6], [9, 6], [10, 6],
    [5, 7], [6, 7], [7, 7], [8, 7], [9, 7], [10, 7],
    [5, 8], [6, 8], [7, 8], [8, 8], [9, 8], [10, 8],
    [5, 9], [6, 9], [7, 9], [8, 9], [9, 9], [10, 9],
    [5, 10], [6, 10], [7, 10], [8, 10], [9, 10], [10, 10],
    [5, 11], [6, 11], [7, 11], [8, 11], [9, 11], [10, 11],
    [5, 12], [6, 12], [7, 12], [8, 12], [9, 12], [10, 12]
  ];

  const heart = [
    [7, 8], [8, 8],
    [6, 9], [7, 9], [8, 9], [9, 9],
    [7, 10], [8, 10]
  ];

  return (
    <div className="pixel-coffee-mug-container" style={{ position: 'relative', width: '90px', height: '90px' }}>
      <svg viewBox="0 0 16 16" style={{ width: '90px', height: '90px' }}>
        <path d="M 5 3 Q 4 2 5 1" stroke="var(--text-tertiary)" strokeWidth="0.8" fill="none" opacity="0.6" className="coffee-steam-1" />
        <path d="M 7.5 3 Q 8 2 7.5 1" stroke="var(--text-tertiary)" strokeWidth="0.8" fill="none" opacity="0.6" className="coffee-steam-2" />
        <path d="M 10 3 Q 9 2 10 1" stroke="var(--text-tertiary)" strokeWidth="0.8" fill="none" opacity="0.6" className="coffee-steam-3" />

        {mugOutline.map(([x, y], idx) => (
          <rect key={`o-${idx}`} x={x} y={y} width="1" height="1" fill="var(--text-primary)" />
        ))}
        {coffeeFill.map(([x, y], idx) => (
          <rect key={`f-${idx}`} x={x} y={y} width="1" height="1" fill="#4B2C20" />
        ))}
        {heart.map(([x, y], idx) => (
          <rect key={`h-${idx}`} x={x} y={y} width="1" height="1" fill="var(--accent-color)" />
        ))}
      </svg>
    </div>
  );
};

const PixelSkyline = () => {
  const buildings = [
    [1, 9], [2, 9], [3, 9], [4, 9],
    [1, 10], [2, 10], [3, 10], [4, 10],
    [1, 11], [2, 11], [3, 11], [4, 11],
    [1, 12], [2, 12], [3, 12], [4, 12],
    [1, 13], [2, 13], [3, 13], [4, 13],
    [1, 14], [2, 14], [3, 14], [4, 14],
    [1, 15], [2, 15], [3, 15], [4, 15],
    
    [5, 6], [6, 6], [7, 6], [8, 6],
    [5, 7], [6, 7], [7, 7], [8, 7],
    [5, 8], [6, 8], [7, 8], [8, 8],
    [5, 9], [6, 9], [7, 9], [8, 9],
    [5, 10], [6, 10], [7, 10], [8, 10],
    [5, 11], [6, 11], [7, 11], [8, 11],
    [5, 12], [6, 12], [7, 12], [8, 12],
    [5, 13], [6, 13], [7, 13], [8, 13],
    [5, 14], [6, 14], [7, 14], [8, 14],
    [5, 15], [6, 15], [7, 15], [8, 15],
    
    [9, 10], [10, 10], [11, 10], [12, 10], [13, 10],
    [9, 11], [10, 11], [11, 11], [12, 11], [13, 11],
    [9, 12], [10, 12], [11, 12], [12, 12], [13, 12],
    [9, 13], [10, 13], [11, 13], [12, 13], [13, 13],
    [9, 14], [10, 14], [11, 14], [12, 14], [13, 14],
    [9, 15], [10, 15], [11, 15], [12, 15], [13, 15],
    
    [14, 4], [15, 4], [16, 4], [17, 4], [18, 4],
    [14, 5], [15, 5], [16, 5], [17, 5], [18, 5],
    [14, 6], [15, 6], [16, 6], [17, 6], [18, 6],
    [14, 7], [15, 7], [16, 7], [17, 7], [18, 7],
    [14, 8], [15, 8], [16, 8], [17, 8], [18, 8],
    [14, 9], [15, 9], [16, 9], [17, 9], [18, 9],
    [14, 10], [15, 10], [16, 10], [17, 10], [18, 10],
    [14, 11], [15, 11], [16, 11], [17, 11], [18, 11],
    [14, 12], [15, 12], [16, 12], [17, 12], [18, 12],
    [14, 13], [15, 13], [16, 13], [17, 13], [18, 13],
    [14, 14], [15, 14], [16, 14], [17, 14], [18, 14],
    [14, 15], [15, 15], [16, 15], [17, 15], [18, 15],
    
    [19, 8], [20, 8], [21, 8], [22, 8],
    [19, 9], [20, 9], [21, 9], [22, 9],
    [19, 10], [20, 10], [21, 10], [22, 10],
    [19, 11], [20, 11], [21, 11], [22, 11],
    [19, 12], [20, 12], [21, 12], [22, 12],
    [19, 13], [20, 13], [21, 13], [22, 13],
    [19, 14], [20, 14], [21, 14], [22, 14],
    [19, 15], [20, 15], [21, 15], [22, 15]
  ];

  const windows = [
    [2, 11], [3, 13],
    [6, 8], [7, 11],
    [10, 12], [12, 14],
    [15, 6], [16, 10], [15, 13],
    [20, 10], [21, 12]
  ];

  return (
    <svg viewBox="0 0 24 16" className="pixel-skyline" style={{ width: '100%', maxHeight: '110px', marginTop: 'auto' }}>
      <rect x="2" y="2" width="1" height="1" fill="#fff" opacity="0.8" className="sky-star-1" />
      <rect x="7" y="3" width="1" height="1" fill="#fff" opacity="0.6" className="sky-star-2" />
      <rect x="12" y="2" width="1" height="1" fill="#fff" opacity="0.9" className="sky-star-3" />
      <rect x="20" y="3" width="1" height="1" fill="#fff" opacity="0.7" className="sky-star-4" />
      <rect x="22" y="1" width="1" height="1" fill="#fff" opacity="0.8" className="sky-star-1" />

      {buildings.map(([x, y], idx) => (
        <rect key={`b-${idx}`} x={x} y={y} width="1" height="1" fill="var(--text-secondary)" opacity="0.3" />
      ))}
      {windows.map(([x, y], idx) => (
        <rect key={`w-${idx}`} x={x} y={y} width="1" height="1" fill="#fbbf24" className="sky-window" style={{ animationDelay: `${idx * 0.3}s` }} />
      ))}
    </svg>
  );
};

const PixelCat = () => {
  const catOutline = [
    [4, 4], [5, 4], [4, 5], [5, 5], [6, 5],
    [10, 4], [11, 4], [9, 5], [10, 5], [11, 5],
    [6, 4], [7, 4], [8, 4], [9, 4],
    [3, 6], [4, 6], [5, 6], [6, 6], [7, 6], [8, 6], [9, 6], [10, 6], [11, 6], [12, 6],
    [3, 7], [4, 7], [5, 7], [6, 7], [7, 7], [8, 7], [9, 7], [10, 7], [11, 7], [12, 7], [13, 7],
    [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8], [9, 8], [10, 8], [11, 8], [12, 8], [13, 8],
    [2, 9], [3, 9], [4, 9], [5, 9], [6, 9], [7, 9], [8, 9], [9, 9], [10, 9], [11, 9], [12, 9], [13, 9],
    [3, 10], [4, 10], [5, 10], [6, 10], [7, 10], [8, 10], [9, 10], [10, 10], [11, 10], [12, 10],
    [4, 11], [5, 11], [6, 11], [7, 11], [8, 11], [9, 11], [10, 11], [11, 11],
    [4, 12], [5, 12], [6, 12], [7, 12], [8, 12], [9, 12], [10, 12], [11, 12],
    [3, 13], [4, 13], [5, 13], [6, 13], [7, 13], [8, 13], [9, 13], [10, 13], [11, 13], [12, 13],
    [3, 14], [4, 14], [5, 14], [6, 14], [7, 14], [8, 14], [9, 14], [10, 14], [11, 14], [12, 14],
    [2, 15], [3, 15], [4, 15], [5, 15], [6, 15], [7, 15], [8, 15], [9, 15], [10, 15], [11, 15], [12, 15], [13, 15],
    [2, 16], [3, 16], [4, 16], [5, 16], [6, 16], [7, 16], [8, 16], [9, 16], [10, 16], [11, 16], [12, 16], [13, 16],
    [4, 17], [5, 17], [10, 17], [11, 17],
    [1, 14], [1, 15], [1, 16], [2, 14],
    [13, 14], [14, 14], [14, 15], [14, 16], [15, 15], [15, 16]
  ];

  const nose = [[7, 9], [8, 9]];
  const eyes = [[4, 8], [11, 8]];
  const orangeStripes = [
    [6, 5], [7, 5], [8, 5],
    [7, 6], [8, 6],
    [2, 15], [3, 15],
    [12, 15], [13, 15],
    [14, 15], [15, 15]
  ];

  const whiteChest = [
    [7, 11], [8, 11],
    [6, 12], [7, 12], [8, 12], [9, 12],
    [6, 13], [7, 13], [8, 13], [9, 13],
    [7, 14], [8, 14]
  ];

  return (
    <div className="pixel-cat-container" style={{ position: 'relative', width: '90px', height: '90px' }}>
      <svg viewBox="0 0 17 18" style={{ width: '90px', height: '90px' }}>
        {catOutline.map(([x, y], idx) => (
          <rect key={`cat-${idx}`} x={x} y={y} width="1" height="1" fill="#FF8A00" />
        ))}
        {orangeStripes.map(([x, y], idx) => (
          <rect key={`str-${idx}`} x={x} y={y} width="1" height="1" fill="#D35400" />
        ))}
        {whiteChest.map(([x, y], idx) => (
          <rect key={`ch-${idx}`} x={x} y={y} width="1" height="1" fill="#FFFFFF" />
        ))}
        {eyes.map(([x, y], idx) => (
          <rect key={`eye-${idx}`} x={x} y={y} width="1" height="1" fill="#000000" />
        ))}
        {nose.map(([x, y], idx) => (
          <rect key={`nose-${idx}`} x={x} y={y} width="1" height="1" fill="#FFB6C1" />
        ))}
        <line x1="1" y1="9" x2="3" y2="9.5" stroke="#FFFFFF" strokeWidth="0.15" />
        <line x1="1" y1="10" x2="3" y2="10" stroke="#FFFFFF" strokeWidth="0.15" />
        <line x1="14" y1="9" x2="16" y2="9.5" stroke="#FFFFFF" strokeWidth="0.15" />
        <line x1="14" y1="10" x2="16" y2="10" stroke="#FFFFFF" strokeWidth="0.15" />
      </svg>
      <div className="floating-cat-heart h1">❤️</div>
      <div className="floating-cat-heart h2">❤️</div>
    </div>
  );
};

const BrowserWindow = () => (
  <svg viewBox="0 0 24 16" className="browser-window" style={{ width: '100%', maxHeight: '75px', marginTop: 'auto' }}>
    {/* Browser Window Box (White background with thin dark grey border) */}
    <rect x="1" y="1" width="22" height="14" rx="1.5" fill="#ffffff" stroke="#555555" strokeWidth="0.8" />
    {/* Header Divider Line */}
    <line x1="1" y1="4.5" x2="23" y2="4.5" stroke="#555555" strokeWidth="0.8" />
    {/* Window Buttons */}
    <circle cx="3.2" cy="2.8" r="0.6" fill="#ff5f56" />
    <circle cx="4.8" cy="2.8" r="0.6" fill="#ffbd2e" />
    <circle cx="6.4" cy="2.8" r="0.6" fill="#27c93f" />
    
    {/* Code lines (Orange and Light Grey pill shapes) */}
    {/* Row 1 */}
    <rect x="3" y="6.2" width="4" height="1" rx="0.5" fill="var(--accent-color)" />
    <rect x="7.8" y="6.2" width="7" height="1" rx="0.5" fill="#d1d1d6" />
    
    {/* Row 2 */}
    <rect x="4.5" y="8.2" width="5" height="1" rx="0.5" fill="#d1d1d6" />
    <rect x="10.2" y="8.2" width="6" height="1" rx="0.5" fill="var(--accent-color)" />
    
    {/* Row 3 */}
    <rect x="4.5" y="10.2" width="8" height="1" rx="0.5" fill="#d1d1d6" />
    <rect x="13.2" y="10.2" width="3" height="1" rx="0.5" fill="var(--accent-color)" />
    
    {/* Row 4 */}
    <rect x="3" y="12.2" width="5" height="1" rx="0.5" fill="var(--accent-color)" />
  </svg>
);

const OcdCrosshair = () => (
  <svg viewBox="0 0 24 24" className="ocd-crosshair" style={{ width: '100%', maxHeight: '90px', marginTop: 'auto' }}>
    <line x1="0" y1="6" x2="24" y2="6" stroke="var(--text-tertiary)" strokeWidth="0.3" strokeDasharray="1 1" opacity="0.3" />
    <line x1="0" y1="12" x2="24" y2="12" stroke="var(--text-tertiary)" strokeWidth="0.3" strokeDasharray="1 1" opacity="0.3" />
    <line x1="0" y1="18" x2="24" y2="18" stroke="var(--text-tertiary)" strokeWidth="0.3" strokeDasharray="1 1" opacity="0.3" />
    <line x1="6" y1="0" x2="6" y2="24" stroke="var(--text-tertiary)" strokeWidth="0.3" strokeDasharray="1 1" opacity="0.3" />
    <line x1="12" y1="0" x2="12" y2="24" stroke="var(--text-tertiary)" strokeWidth="0.3" strokeDasharray="1 1" opacity="0.3" />
    <line x1="18" y1="0" x2="18" y2="24" stroke="var(--text-tertiary)" strokeWidth="0.3" strokeDasharray="1 1" opacity="0.3" />

    <circle cx="12" cy="12" r="7" stroke="var(--text-secondary)" strokeWidth="0.8" fill="none" opacity="0.4" />
    <circle cx="12" cy="12" r="3" stroke="var(--accent-color)" strokeWidth="0.8" fill="none" opacity="0.6" />

    <line x1="2" y1="12" x2="9" y2="12" stroke="var(--accent-color)" strokeWidth="0.8" />
    <line x1="15" y1="12" x2="22" y2="12" stroke="var(--accent-color)" strokeWidth="0.8" />
    <line x1="12" y1="2" x2="12" y2="9" stroke="var(--accent-color)" strokeWidth="0.8" />
    <line x1="12" y1="15" x2="12" y2="22" stroke="var(--accent-color)" strokeWidth="0.8" />

    <path d="M 6 8 L 6 6 L 8 6" stroke="var(--text-secondary)" strokeWidth="0.8" fill="none" opacity="0.5" />
    <path d="M 18 8 L 18 6 L 16 6" stroke="var(--text-secondary)" strokeWidth="0.8" fill="none" opacity="0.5" />
    <path d="M 6 16 L 6 18 L 8 18" stroke="var(--text-secondary)" strokeWidth="0.8" fill="none" opacity="0.5" />
    <path d="M 18 16 L 18 18 L 16 18" stroke="var(--text-secondary)" strokeWidth="0.8" fill="none" opacity="0.5" />

    <circle cx="12" cy="12" r="0.8" fill="var(--accent-color)" />
  </svg>
);

const PixelPets = () => {
  const dogOutline = [
    [3, 6], [4, 6], [5, 6], [11, 6], [12, 6], [13, 6],
    [2, 7], [3, 7], [4, 7], [12, 7], [13, 7], [14, 7],
    [2, 8], [3, 8], [13, 8], [14, 8],
    [2, 9], [3, 9], [13, 9], [14, 9],
    [1, 7], [1, 8], [1, 9], [1, 10], [2, 10],
    [15, 7], [15, 8], [15, 9], [15, 10], [14, 10],
    [6, 6], [7, 6], [8, 6], [9, 6], [10, 6],
    [5, 7], [6, 7], [7, 7], [8, 7], [9, 7], [10, 7], [11, 7],
    [4, 8], [5, 8], [6, 8], [7, 8], [8, 8], [9, 8], [10, 8], [11, 8], [12, 8],
    [4, 9], [5, 9], [6, 9], [7, 9], [8, 9], [9, 9], [10, 9], [11, 9], [12, 9],
    [5, 10], [6, 10], [7, 10], [8, 10], [9, 10], [10, 10], [11, 10],
    [6, 11], [7, 11], [8, 11], [9, 11], [10, 11],
    [3, 12], [4, 12], [5, 12], [6, 12], [7, 12], [8, 12], [9, 12], [10, 12], [11, 12], [12, 12], [13, 12],
    [3, 13], [4, 13], [5, 13], [6, 13], [7, 13], [8, 13], [9, 13], [10, 13], [11, 13], [12, 13], [13, 13],
    [2, 14], [3, 14], [4, 14], [5, 14], [6, 14], [7, 14], [8, 14], [9, 14], [10, 14], [11, 14], [12, 14], [13, 14], [14, 14],
    [2, 15], [3, 15], [4, 15], [5, 15], [6, 15], [7, 15], [8, 15], [9, 15], [10, 15], [11, 15], [12, 15], [13, 15], [14, 15]
  ];

  const dogBrown = [
    [3, 6], [4, 6], [5, 6], [11, 6], [12, 6], [13, 6],
    [2, 7], [3, 7], [4, 7], [12, 7], [13, 7], [14, 7],
    [2, 8], [3, 8], [13, 8], [14, 8],
    [2, 9], [3, 9], [13, 9], [14, 9],
    [1, 7], [1, 8], [1, 9], [1, 10], [2, 10],
    [15, 7], [15, 8], [15, 9], [15, 10], [14, 10],
    [2, 14], [3, 14], [13, 14], [14, 14],
    [2, 15], [3, 15], [13, 15], [14, 15]
  ];

  const dogEyes = [[4, 8], [12, 8]];
  const dogNose = [[7, 9], [8, 9], [9, 9], [8, 10]];
  const dogTongue = [[8, 11]];

  const catOutline = [
    [19, 10], [20, 10], [21, 10], [22, 10], [23, 10],
    [18, 11], [19, 11], [20, 11], [21, 11], [22, 11], [23, 11], [24, 11],
    [18, 12], [19, 12], [20, 12], [21, 12], [22, 12], [23, 12], [24, 12],
    [19, 13], [20, 13], [21, 13], [22, 13], [23, 13],
    [19, 9], [23, 9],
    [19, 14], [20, 14], [21, 14], [22, 14], [23, 14],
    [18, 15], [19, 15], [20, 15], [21, 15], [22, 15], [23, 15], [24, 15]
  ];

  const catEyes = [[20, 11], [22, 11]];
  const catNose = [[21, 12]];

  return (
    <div className="pixel-pets-container" style={{ position: 'relative', width: '130px', height: '90px' }}>
      <svg viewBox="0 0 26 16" style={{ width: '130px', height: '90px' }}>
        {dogOutline.map(([x, y], idx) => (
          <rect key={`dw-${idx}`} x={x} y={y} width="1" height="1" fill="#FFFFFF" />
        ))}
        {dogBrown.map(([x, y], idx) => (
          <rect key={`db-${idx}`} x={x} y={y} width="1" height="1" fill="#8B5A2B" />
        ))}
        {dogEyes.map(([x, y], idx) => (
          <rect key={`de-${idx}`} x={x} y={y} width="1" height="1" fill="#000000" />
        ))}
        {dogNose.map(([x, y], idx) => (
          <rect key={`dn-${idx}`} x={x} y={y} width="1" height="1" fill="#000000" />
        ))}
        {dogTongue.map(([x, y], idx) => (
          <rect key={`dt-${idx}`} x={x} y={y} width="1" height="1" fill="#FFB6C1" />
        ))}

        {catOutline.map(([x, y], idx) => (
          <rect key={`c-${idx}`} x={x} y={y} width="1" height="1" fill="#8E8E93" />
        ))}
        {catEyes.map(([x, y], idx) => (
          <rect key={`ce-${idx}`} x={x} y={y} width="1" height="1" fill="#ADFF2F" />
        ))}
        {catNose.map(([x, y], idx) => (
          <rect key={`cn-${idx}`} x={x} y={y} width="1" height="1" fill="#FFB6C1" />
        ))}
      </svg>
      <div className="floating-pets-heart h1">❤️</div>
      <div className="floating-pets-heart h2">❤️</div>
    </div>
  );
};

const PotterheadGlasses = () => (
  <svg viewBox="0 0 24 16" className="potterhead-glasses" style={{ width: '100%', maxHeight: '80px', marginTop: 'auto' }}>
    <circle cx="8" cy="10" r="3" stroke="var(--text-primary)" strokeWidth="0.8" fill="none" />
    <circle cx="16" cy="10" r="3" stroke="var(--text-primary)" strokeWidth="0.8" fill="none" />
    <path d="M 11 10 Q 12 9.2 13 10" stroke="var(--text-primary)" strokeWidth="0.8" fill="none" />
    <path d="M 2 9.5 L 5 10" stroke="var(--text-primary)" strokeWidth="0.8" fill="none" />
    <path d="M 19 10 L 22 9.5" stroke="var(--text-primary)" strokeWidth="0.8" fill="none" />
    <path d="M 13 2 L 10 6 L 12.5 6 L 11 10 L 15 5.5 L 12.5 5.5 Z" fill="#eab308" className="lightning-bolt-anim" />
  </svg>
);

const RubiksCubeIsometric = () => {
  const topColors = [
    '#ff6b00', '#ff6b00', '#ffd700',
    '#ff6b00', '#ff8a00', '#ffd700',
    '#ff8a00', '#ffd700', '#ffd700'
  ];
  const leftColors = [
    '#3b82f6', '#3b82f6', '#1d4ed8',
    '#3b82f6', '#2563eb', '#1d4ed8',
    '#1d4ed8', '#1d4ed8', '#1e3a8a'
  ];
  const rightColors = [
    '#ffffff', '#ff6b00', '#ffffff',
    '#ff6b00', '#ffffff', '#ff6b00',
    '#ffffff', '#ff6b00', '#ffffff'
  ];

  const getTopPt = (r, c) => {
    const x = 20 - 4 * r + 4 * c;
    const y = 14 + 2 * r + 2 * c;
    return [x, y];
  };

  const getLeftPt = (r, c) => {
    const x = 8 + 4 * c;
    const y = 20 + 2 * c + 4 * r;
    return [x, y];
  };

  const getRightPt = (r, c) => {
    const x = 20 + 4 * c;
    const y = 26 - 2 * c + 4 * r;
    return [x, y];
  };

  const renderStickers = () => {
    const stickers = [];

    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const p1 = getTopPt(r, c);
        const p2 = getTopPt(r, c + 1);
        const p3 = getTopPt(r + 1, c + 1);
        const p4 = getTopPt(r + 1, c);
        const pts = `${p1[0]},${p1[1]} ${p2[0]},${p2[1]} ${p3[0]},${p3[1]} ${p4[0]},${p4[1]}`;
        stickers.push(
          <polygon
            key={`t-${r}-${c}`}
            points={pts}
            fill={topColors[r * 3 + c]}
            stroke="#121212"
            strokeWidth="0.4"
          />
        );
      }
    }

    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const p1 = getLeftPt(r, c);
        const p2 = getLeftPt(r, c + 1);
        const p3 = getLeftPt(r + 1, c + 1);
        const p4 = getLeftPt(r + 1, c);
        const pts = `${p1[0]},${p1[1]} ${p2[0]},${p2[1]} ${p3[0]},${p3[1]} ${p4[0]},${p4[1]}`;
        stickers.push(
          <polygon
            key={`l-${r}-${c}`}
            points={pts}
            fill={leftColors[r * 3 + c]}
            stroke="#121212"
            strokeWidth="0.4"
          />
        );
      }
    }

    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const p1 = getRightPt(r, c);
        const p2 = getRightPt(r, c + 1);
        const p3 = getRightPt(r + 1, c + 1);
        const p4 = getRightPt(r + 1, c);
        const pts = `${p1[0]},${p1[1]} ${p2[0]},${p2[1]} ${p3[0]},${p3[1]} ${p4[0]},${p4[1]}`;
        stickers.push(
          <polygon
            key={`r-${r}-${c}`}
            points={pts}
            fill={rightColors[r * 3 + c]}
            stroke="#121212"
            strokeWidth="0.4"
          />
        );
      }
    }

    return stickers;
  };

  return (
    <svg viewBox="2 2 36 36" className="rubiks-cube-isometric" style={{ width: '100%', maxHeight: '110px', marginTop: 'auto' }}>
      {renderStickers()}
    </svg>
  );
};

const PixelBrain = () => {
  const leftLobe = [
    [5, 4], [6, 4], [7, 4], [8, 4], [9, 4], [10, 4], [11, 4],
    [4, 5], [5, 5], [11, 5],
    [3, 6], [4, 6], [11, 6],
    [3, 7], [11, 7],
    [3, 8], [11, 8],
    [4, 9], [5, 9], [11, 9],
    [5, 10], [6, 10], [7, 10], [8, 10], [9, 10], [10, 10], [11, 10],
    [5, 11], [6, 11], [7, 11], [8, 11], [9, 11],
    [6, 12], [7, 12], [8, 12]
  ];

  const rightLobe = [
    [12, 4], [13, 4], [14, 4], [15, 4], [16, 4], [17, 4], [18, 4],
    [12, 5], [18, 5], [19, 5],
    [12, 6], [19, 6], [20, 6],
    [12, 7], [20, 7],
    [12, 8], [20, 8],
    [12, 9], [18, 9], [19, 9],
    [12, 10], [13, 10], [14, 10], [15, 10], [16, 10], [17, 10], [18, 10],
    [14, 11], [15, 11], [16, 11], [17, 11], [18, 11],
    [15, 12], [16, 12], [17, 12]
  ];

  const fissures = [
    [7, 6], [8, 6], [7, 7],
    [15, 7], [16, 7], [16, 8],
    [9, 9], [10, 9],
    [13, 9], [14, 9]
  ];

  return (
    <div className="pixel-brain-container" style={{ position: 'relative', width: '90px', height: '90px' }}>
      <svg viewBox="2 2 20 14" style={{ width: '90px', height: '90px' }}>
        {leftLobe.map(([x, y], idx) => (
          <rect key={`l-${idx}`} x={x} y={y} width="1" height="1" fill="#4ade80" />
        ))}
        {rightLobe.map(([x, y], idx) => (
          <rect key={`r-${idx}`} x={x} y={y} width="1" height="1" fill="#22c55e" />
        ))}
        {fissures.map(([x, y], idx) => (
          <rect key={`f-${idx}`} x={x} y={y} width="1" height="1" fill="#15803d" />
        ))}
      </svg>
      <span className="brain-cross c1">+</span>
      <span className="brain-cross c2">+</span>
    </div>
  );
};

const RadioTower = () => (
  <svg viewBox="0 0 24 24" className="radio-tower-svg" style={{ width: '100%', maxHeight: '95px', marginTop: 'auto' }}>
    <path d="M 8 3 A 4 4 0 0 0 8 9" stroke="#3b82f6" strokeWidth="0.8" fill="none" opacity="0.6" className="tower-wave-1" />
    <path d="M 5 1 A 7 7 0 0 0 5 11" stroke="#3b82f6" strokeWidth="0.8" fill="none" opacity="0.4" className="tower-wave-2" />

    <path d="M 16 3 A 4 4 0 0 1 16 9" stroke="#3b82f6" strokeWidth="0.8" fill="none" opacity="0.6" className="tower-wave-1" />
    <path d="M 19 1 A 7 7 0 0 1 19 11" stroke="#3b82f6" strokeWidth="0.8" fill="none" opacity="0.4" className="tower-wave-2" />

    <line x1="7" y1="22" x2="11" y2="6" stroke="var(--text-primary)" strokeWidth="1" />
    <line x1="17" y1="22" x2="13" y2="6" stroke="var(--text-primary)" strokeWidth="1" />
    <line x1="12" y1="6" x2="12" y2="3" stroke="var(--text-primary)" strokeWidth="1" />
    <circle cx="12" cy="3" r="0.8" fill="var(--accent-color)" />

    <line x1="8.5" y1="17" x2="15.5" y2="17" stroke="var(--text-primary)" strokeWidth="0.8" />
    <line x1="10" y1="11" x2="14" y2="11" stroke="var(--text-primary)" strokeWidth="0.8" />

    <line x1="8.5" y1="17" x2="14" y2="11" stroke="var(--text-primary)" strokeWidth="0.6" />
    <line x1="15.5" y1="17" x2="10" y2="11" stroke="var(--text-primary)" strokeWidth="0.6" />
    <line x1="10" y1="11" x2="12" y2="6" stroke="var(--text-primary)" strokeWidth="0.6" />
    <line x1="14" y1="11" x2="12" y2="6" stroke="var(--text-primary)" strokeWidth="0.6" />
  </svg>
);

const RocketMission = () => (
  <svg viewBox="0 0 32 16" className="rocket-mission-svg" style={{ width: '120px', height: '60px' }}>
    <path d="M 8 8 L 2 7 L 4 8 L 1 9 L 3 10 L 8 9 Z" fill="var(--accent-color)" className="rocket-flame-trail" />
    <path d="M 7 4 L 11 8 L 8 8 Z" fill="var(--accent-color)" />
    <path d="M 7 12 L 11 8 L 8 8 Z" fill="var(--accent-color)" />
    <rect x="9" y="5.5" width="12" height="5" rx="2.5" fill="var(--text-primary)" />
    <path d="M 21 5.5 Q 26 8 21 10.5 Z" fill="var(--accent-color)" />
    <circle cx="15" cy="8" r="1.2" fill="var(--bg-color)" />
  </svg>
);

export default function App() {
  // Theme state: default to system preference or saved value
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return 'light'; // Light mode is primary by default
  });

  const [activeSection, setActiveSection] = useState('home');
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [glareState, setGlareState] = useState('idle'); // 'idle' | 'swiping-down' | 'swiping-up'
  const [ocdValue, setOcdValue] = useState(30);
  const canvasRef = useRef(null);
  const gridPhasesRef = useRef(null);
  const contactCanvasRef = useRef(null);
  const contactGridPhasesRef = useRef(null);

  // Welcome screen loading states
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [startColumnsAnim, setStartColumnsAnim] = useState(false);
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  // Custom PDF zoom state
  const [pdfZoom, setPdfZoom] = useState(100);
  const zoomIn = () => setPdfZoom(prev => Math.min(200, prev + 15));
  const zoomOut = () => setPdfZoom(prev => Math.max(50, prev - 15));



  // Track expanded experiences descriptions
  const [expandedExperiences, setExpandedExperiences] = useState({});
  const toggleExperience = (key) => {
    setExpandedExperiences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Welcome screen greeting text transitions
  useEffect(() => {
    let wordIndex = 0;
    let timeoutId;

    const cycleGreeting = () => {
      if (wordIndex < greetingWords.length - 1) {
        wordIndex++;
        setCurrentWordIndex(wordIndex);
        
        // When it reaches Namaste (the last word), we hold it and trigger animation transitions
        if (wordIndex === greetingWords.length - 1) {
          // Wait 1000ms on Namaste, then slide up columns and text together
          timeoutId = setTimeout(() => {
            setStartColumnsAnim(true);
          }, 1000);

          // Wait 2700ms total from Namaste slide up to unmount overlay
          setTimeout(() => {
            setIsIntroComplete(true);
          }, 2700);
          return;
        }

        // Constant delay of 180ms for all other translation words (slightly slower)
        timeoutId = setTimeout(cycleGreeting, 180);
      }
    };

    // First word "Hello" is shown for 1000ms (1 second)
    timeoutId = setTimeout(cycleGreeting, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Apply theme to document root element (html)
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle theme handler
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Canvas grid animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Grid settings (slightly larger pixel size matching design texture: 4.5px cell size with 1.5px gap)
    const step = 6.0; 
    const cellSize = 4.5;
    let cols = 0;
    let rows = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.ceil(canvas.width / step);
      rows = Math.ceil(canvas.height / step);

      // Populate random phases for every single grid node to make them pulsate independently
      const totalCells = cols * rows;
      const phases = new Float32Array(totalCells);
      for (let i = 0; i < totalCells; i++) {
        phases[i] = Math.random() * Math.PI * 2;
      }
      gridPhasesRef.current = phases;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.022; // peaceful, slow pulsating rate

      const isDark = document.documentElement.classList.contains('dark-mode');
      const baseColor = isDark ? '242, 242, 245' : '18, 18, 18';

      // Draw up to 30 rows matching design height (~180px)
      const maxRows = Math.min(30, rows);
      
      // Optimize drawing by grouping paths by opacity buckets
      const opacityBuckets = Array.from({ length: 6 }, () => []);

      const phases = gridPhasesRef.current;
      if (!phases || phases.length === 0) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      for (let r = 0; r < maxRows; r++) {
        const y = r * step;
        const verticalFade = Math.max(0, 1 - (r / maxRows));

        for (let c = 0; c < cols; c++) {
          const x = c * step;
          const cellIndex = r * cols + c;
          const phase = phases[cellIndex] || 0;

          // Each pixel pulses independently using its unique phase offset, slowed down
          const wave = Math.sin(time * 1.0 + phase) * 0.5 + 0.5;
          const breathe = Math.cos(time * 0.75 + phase) * 0.2 + 0.8;
          
          // Maintain a slightly brighter baseline and pulsation range (max opacity 0.16)
          const opacity = (0.02 + wave * breathe * 0.14) * verticalFade;

          if (opacity < 0.005) continue;

          const bucketIndex = Math.min(5, Math.floor(opacity * 37.5));
          opacityBuckets[bucketIndex].push({ x, y });
        }
      }

      // Single path draw calls for optimized 60fps rendering
      opacityBuckets.forEach((points, index) => {
        if (points.length === 0) return;
        
        const opacity = (index + 1) / 37.5;
        ctx.fillStyle = `rgba(${baseColor}, ${opacity})`;
        
        ctx.beginPath();
        points.forEach(pt => {
          ctx.rect(pt.x, pt.y, cellSize, cellSize);
        });
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Contact Canvas grid animation effect
  useEffect(() => {
    const canvas = contactCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    const step = 6.0; 
    const cellSize = 4.5;
    let cols = 0;
    let rows = 0;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width || canvas.clientWidth || 300;
      canvas.height = rect.height || canvas.clientHeight || 400;
      cols = Math.ceil(canvas.width / step);
      rows = Math.ceil(canvas.height / step);

      const totalCells = cols * rows;
      const phases = new Float32Array(totalCells);
      for (let i = 0; i < totalCells; i++) {
        phases[i] = Math.random() * Math.PI * 2;
      }
      contactGridPhasesRef.current = phases;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let observer;
    if (window.ResizeObserver && canvas.parentElement) {
      observer = new ResizeObserver(() => {
        resizeCanvas();
      });
      observer.observe(canvas.parentElement);
    }

    let time = 0;
    const animate = () => {
      if (!canvas.width || !canvas.height) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.022;

      const isDark = document.documentElement.classList.contains('dark-mode');
      const baseColor = isDark ? '242, 242, 245' : '18, 18, 18';

      const opacityBuckets = Array.from({ length: 6 }, () => []);
      const phases = contactGridPhasesRef.current;
      
      if (!phases || phases.length === 0) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      for (let r = 0; r < rows; r++) {
        const y = r * step;
        const verticalFade = Math.max(0, 1 - (r / rows));

        for (let c = 0; c < cols; c++) {
          const x = c * step;
          const cellIndex = r * cols + c;
          if (cellIndex >= phases.length) continue;
          
          const phase = phases[cellIndex] || 0;
          const wave = Math.sin(time * 1.0 + phase) * 0.5 + 0.5;
          const breathe = Math.cos(time * 0.75 + phase) * 0.2 + 0.8;
          
          const opacity = (0.015 + wave * breathe * 0.105) * verticalFade;

          if (opacity < 0.005) continue;

          const bucketIndex = Math.min(5, Math.floor(opacity * 50));
          opacityBuckets[bucketIndex].push({ x, y });
        }
      }

      opacityBuckets.forEach((points, index) => {
        if (points.length === 0) return;
        
        const opacity = (index + 1) / 50;
        ctx.fillStyle = `rgba(${baseColor}, ${opacity})`;
        
        ctx.beginPath();
        points.forEach(pt => {
          ctx.rect(pt.x, pt.y, cellSize, cellSize);
        });
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (observer) observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeSection]);

  // Scroll-to-top on mount and loader end to ensure clean entrypoint loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isIntroComplete) {
      window.scrollTo(0, 0);
    }
  }, [isIntroComplete]);

  // Reset form status back to idle after 3 seconds on success (with bottom-to-top sweep)
  useEffect(() => {
    if (formStatus === 'success') {
      const resetTimer = setTimeout(() => {
        setGlareState('swiping-up');
        
        const swapTimer = setTimeout(() => {
          setFormStatus('idle');
        }, 300);
        
        const endTimer = setTimeout(() => {
          setGlareState('idle');
        }, 600);
        
        return () => {
          clearTimeout(swapTimer);
          clearTimeout(endTimer);
        };
      }, 3000);
      return () => clearTimeout(resetTimer);
    }
  }, [formStatus]);



  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.target);
    formData.append("access_key", "5553cafd-4b72-40a5-9f6e-d2c6cd7045e5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setGlareState('swiping-down');
        
        setTimeout(() => {
          setFormStatus('success');
          e.target.reset();
        }, 300);
        
        setTimeout(() => {
          setGlareState('idle');
        }, 600);
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  };

  const skillCategories = skillsData;

  const lucideSkillIcons = { Network, Radar, Eye, Database };
  const SkillIcon = ({ skill }) => {
    if (skill.iconType === 'lucide') {
      const IconComponent = lucideSkillIcons[skill.iconName];
      return IconComponent ? <IconComponent className="skill-icon" style={{ color: skill.iconColor }} /> : null;
    }
    return <img src={skill.iconUrl} alt={skill.name} className="skill-icon" />;
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleAwardsClick = () => {
    setActiveSection('certificates');
    setTimeout(() => {
      const element = document.getElementById('awards-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const navItems = [
    {
      icon: <Home />,
      label: 'Home',
      onClick: () => handleNavClick('home'),
      className: activeSection === 'home' ? 'active' : ''
    },
    {
      icon: <User />,
      label: 'About',
      onClick: () => handleNavClick('about'),
      className: activeSection === 'about' ? 'active' : ''
    },
    {
      icon: <Code2 />,
      label: 'Projects',
      onClick: () => handleNavClick('projects'),
      className: activeSection === 'projects' ? 'active' : ''
    },
    {
      icon: <Award />,
      label: 'Certifications',
      onClick: () => handleNavClick('certificates'),
      className: activeSection === 'certificates' ? 'active' : ''
    },
    {
      icon: <FileText />,
      label: 'Resume',
      onClick: () => handleNavClick('resume'),
      className: activeSection === 'resume' ? 'active' : ''
    },
    {
      type: 'divider'
    },
    {
      icon: <Github />,
      label: 'GitHub',
      onClick: () => window.open('https://github.com/alvinxsonny', '_blank', 'noopener,noreferrer')
    },
    {
      icon: <Linkedin />,
      label: 'LinkedIn',
      onClick: () => window.open('https://www.linkedin.com/in/alvinsonny/', '_blank', 'noopener,noreferrer')
    },
    {
      type: 'divider'
    },
    {
      icon: theme === 'light' ? <Moon /> : <Sun />,
      label: 'Toggle Theme',
      onClick: toggleTheme
    }
  ];

  return (
    <>
      {/* Welcome Screen overlay */}
      {!isIntroComplete && (
        <div className="welcome-screen">
          <div className={`welcome-counter ${startColumnsAnim ? 'slide-up' : ''}`}>
            <span className="welcome-led"></span>
            <span>{greetingWords[currentWordIndex]}</span>
          </div>
          <div className="welcome-columns-container">
            {[0, 1, 2, 3, 4, 5].map(index => (
              <div
                key={index}
                className={`welcome-column ${startColumnsAnim ? 'slide-up' : ''}`}
                style={{
                  left: `${index * 16.666}%`,
                  transitionDelay: `${index * 100}ms`
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Grainy Paper noise background & Blurry circles defined in CSS */}
      <div className="bg-blobs">
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
        <div className="bg-blob blob-3"></div>
      </div>

      {/* Falling pixels canvas waterfall */}
      <canvas ref={canvasRef} className="waterfall-canvas" />



      {/* Main Column Layout Container */}
      <div className="portfolio-container">
        
        {/* HOME VIEW */}
        {activeSection === 'home' && (
          <>
            {/* HERO SECTION */}
            <section id="home" className="hero-section">
              <div className="hero-top">
                <h1 className="hero-title">
                  Hey,<br />I'm Alvin.
                </h1>
                <div className="hero-pfp-wrapper">
                  <img 
                    src="/assets/website_assets/pfp.jpg" 
                    alt="Alvin's profile" 
                    className="hero-pfp" 
                  />
                </div>
              </div>
              <div className="hero-bio">
                <p className="hero-bio-line1" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
                  <img 
                    src={theme === 'dark' ? '/assets/website_assets/hacker-white.svg' : '/assets/website_assets/hacker-black.svg'} 
                    alt="Hacker icon" 
                    className="hero-hacking-icon" 
                  />
                  Ethical Hacker &amp; Red Teamer
                </p>
                <p className="hero-bio-line2">"I believe that the best way to defend a system is to understand the mindset of those who challenge it."</p>
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                  <button 
                    onClick={() => handleNavClick('resume')}
                    className="hero-resume-btn"
                    style={{ marginTop: 0 }}
                  >
                    RESUME
                    <ArrowUpRight />
                  </button>
                  <button 
                    onClick={() => handleNavClick('certificates')}
                    className="hero-resume-btn"
                    style={{ marginTop: 0 }}
                  >
                    CERTIFICATIONS
                    <ArrowUpRight />
                  </button>
                </div>
              </div>
            </section>

            {/* ABOUT ME SECTION */}
            <section id="about" className="section">
              <div className="section-icon">
                <User />
              </div>
              <h2 className="section-title">About Me</h2>
              <hr className="section-divider" />
              <p className="about-text">
                I'm a <u style={{ cursor: 'pointer' }} onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}>B.E Computer Science student at MVJ College of Engineering</u> with a strong passion for Cybersecurity, particularly Red Teaming and Offensive Security. Every vulnerability is an opportunity to build something stronger. My areas of focus include <u style={{ cursor: 'pointer' }} onClick={() => document.getElementById('top-projects')?.scrollIntoView({ behavior: 'smooth' })}>Red Team operations, network security, vulnerability assessment, web security, and security automation.</u> I'm always open to new opportunities, collaborations, and conversations - so if you'd <u style={{ cursor: 'pointer' }} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>like to connect, let's talk.</u>
              </p>
              <button 
                onClick={() => handleNavClick('about')}
                className="hero-resume-btn"
                style={{ marginTop: '1.2rem', alignSelf: 'flex-start' }}
              >
                MORE ABOUT ME
                <ArrowUpRight />
              </button>
            </section>

            {/* SKILLS SECTION */}
            <section id="skills" className="section">
              <div className="section-icon">
                <Code2 />
              </div>
              <h2 className="section-title">Skills</h2>
              <hr className="section-divider" />
              
              <div className="skills-categories" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', width: '100%', marginTop: '1rem' }}>
                {skillCategories.map((category, catIdx) => (
                  <div key={catIdx} className="skills-group">
                    <h3 className="skills-group-title" style={{ fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.6rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {category.title}
                    </h3>
                    <div className="badge-cloud">
                      {category.skills.map((skill, index) => (
                        <span key={index} className="badge">
                          <SkillIcon skill={skill} />
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* EXPERIENCES TIMELINE (Added back to Homepage) */}
            <Experiences 
              expandedExperiences={expandedExperiences}
              toggleExperience={toggleExperience}
            />

            {/* TOP PROJECTS SECTION */}
            <TopProjects handleNavClick={handleNavClick} />

            {/* EDUCATION SECTION */}
            <section id="education" className="section" style={{ width: '100%' }}>
              <div className="section-icon">
                <GraduationCap />
              </div>
              <h2 className="section-title">Education</h2>
              <hr className="section-divider" />
              <div className="education-content" style={{ width: '100%', marginTop: '1rem' }}>
                <div className="education-layout-row">
                  <img 
                    src="/assets/education/mvjce.png" 
                    alt="MVJ College of Engineering Logo" 
                    className="education-logo-squircle" 
                  />
                  <div className="education-details">
                    <p className="education-title">B.E in Computer Science &amp; Engineering</p>
                    <div className="education-header">
                      <a 
                        href="https://mvjce.edu.in/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="education-link"
                      >
                        MVJ College of Engineering (GPA: 9.05)
                        <ArrowUpRight className="education-arrow" />
                      </a>
                      <span className="education-separator">&bull;</span>
                      <span className="education-year">2023 - 2027</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CONTACT ME SECTION */}
            <section id="contact" className="section" style={{ width: '100%', alignItems: 'center' }}>
              <div className="contact-bubble">
                <div className="contact-badge">
                  <Mail style={{ width: '0.9rem', height: '0.9rem' }} />
                  <span>Contact</span>
                </div>
                <canvas ref={contactCanvasRef} className="contact-canvas" />
                {glareState !== 'idle' && (
                  <div className={`glare-swipe-overlay ${glareState}`} />
                )}

                {formStatus === 'success' ? (
                  <div className="success-message-container reveal-down">
                    <div className="success-icon-wrapper">
                      <CheckCircle className="success-icon" style={{ width: '3rem', height: '3rem' }} />
                    </div>
                    <h3 className="success-heading">Message sent successfully!</h3>
                    <p className="success-desc">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <div className="contact-main-content reveal-up">
                    <h2 className="contact-heading">Get in Touch</h2>
                    
                    <div className="contact-text-wrapper">
                      <p className="contact-line1">
                        Want to chat? Reach out via <a href="mailto:alvinxsonny@gmail.com" className="email-link">alvinxsonny@gmail.com <ArrowUpRight className="inline-arrow" /></a>
                      </p>
                      <p className="contact-line2">
                        Open to collaborations, building and securing digital platforms!
                      </p>
                    </div>

                    {/* Small Contact Form */}
                    <form onSubmit={handleFormSubmit} className="contact-form">
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="form-name" className="form-label">Name</label>
                          <input 
                            type="text" 
                            id="form-name" 
                            name="name" 
                            className="form-input" 
                            required 
                            placeholder="Name" 
                          />
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="form-email" className="form-label">Email</label>
                          <input 
                            type="email" 
                            id="form-email" 
                            name="email" 
                            className="form-input" 
                            required 
                            placeholder="Email" 
                          />
                        </div>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="form-message" className="form-label">Message</label>
                        <textarea 
                          id="form-message" 
                          name="message" 
                          className="form-textarea" 
                          required 
                          placeholder="Message..." 
                        />
                      </div>

                      {formStatus === 'error' && (
                        <div className="form-status error">
                          Failed to send. Please try again.
                        </div>
                      )}

                      <button 
                        type="submit" 
                        className="form-submit-btn"
                        disabled={formStatus === 'sending'}
                      >
                        {formStatus === 'sending' ? (
                          <div className="spinner-loader"></div>
                        ) : (
                          'Send'
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </section>
          </>
        )}

        {/* ABOUT VIEW (Standalone About Page) */}
        {activeSection === 'about' && (
          <section id="about" className="section" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <div className="section-icon" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <User size={32} strokeWidth={2.5} style={{ color: 'var(--text-primary)' }} />
              </div>
              <h2 className="section-title" style={{ fontSize: '1.65rem', fontWeight: '800', color: 'var(--text-primary)', textAlign: 'center', margin: '0.4rem 0 0.2rem 0' }}>About Me</h2>
              <hr className="section-divider" style={{ margin: '0 auto 1.5rem auto' }} />
            </div>


            {/* Paragraph Text (Middle) */}
            <p className="about-text" style={{ marginTop: '1rem' }}>
              I'm Alvin Sonny (alias. Martin Mathew), a curious creator who blends logic with imagination. Whether it's building tools or bringing quirky ideas to life, I love projects that make people think, smile, or say, "wait, that's clever." Passionate about ethical hacking, I'm driven to explore how tech can be both impactful and secure. I enjoy turning everyday problems into thoughtful, playful solutions. Let's connect, collaborate, and build something that leaves a mark.
            </p>

            {/* Social Media Buttons (Middle) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', margin: '1.5rem 0 2rem 0', alignItems: 'center', width: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Find me around the internet:</span>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                  <a 
                    href="https://www.instagram.com/_martin.max_/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="about-social-btn instagram-btn"
                  >
                    <Instagram size={15} />
                    <span>INSTAGRAM</span>
                    <ArrowUpRight size={13} className="social-arrow" />
                  </a>
                  <a 
                    href="https://x.com/martinxmathew" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="about-social-btn x-btn"
                  >
                    <svg viewBox="0 0 24 24" style={{ width: '0.9rem', height: '0.9rem', fill: 'currentColor' }}>
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>X.COM</span>
                    <ArrowUpRight size={13} className="social-arrow" />
                  </a>
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Achievements collected along the journey:</span>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                  <button 
                    onClick={handleAwardsClick}
                    className="about-social-btn awards-btn"
                  >
                    <Trophy size={15} />
                    <span>AWARDS</span>
                    <ArrowUpRight size={13} className="social-arrow" />
                  </button>
                </div>
              </div>
            </div>

            {/* Separator Divider Line */}
            <hr className="section-divider" style={{ width: '100%', maxWidth: '20rem', height: '1px', backgroundColor: 'var(--border-color)', border: 'none', margin: '0.5rem auto 1.5rem auto', opacity: 0.6 }} />

            {/* Bento Grid (Bottom) */}
            <div className="about-bento-grid">
              {/* 1. Fav Number - span 4 */}
              <div className="bento-card bento-fav-number bento-col-4">
                <div className="bento-header-label">Fav Number</div>
                <div className="bento-pixel-art-wrapper">
                  <img src="/assets/bento-grid_icons/fav_num.png" alt="Fav Number 5" className="bento-fav-num-png" style={{ width: '48px', height: '72px', objectFit: 'contain' }} />
                </div>
                <div className="bento-footer-label">
                  <span className="orange-arrow">&gt;</span> Exactly right.
                </div>
              </div>

              {/* 2. Fav Colour - span 4 */}
              <div className="bento-card bento-fav-colour bento-col-4">
                <div className="bento-header-label">Fav Colour & Fruit</div>
                <div className="bento-pixel-art-wrapper">
                  <img src="/assets/bento-grid_icons/fav_colour.png" alt="Fav Colour Orange" className="bento-fav-colour-png" style={{ width: '64px', height: '72px', objectFit: 'contain' }} />
                </div>
                <div className="bento-footer-label">
                  <span className="orange-arrow">&gt;</span> #FF6A00
                </div>
              </div>

              {/* 3. Location - span 4, row-span 2 */}
              <div className="bento-card bento-location bento-col-4 bento-row-2">
                <div className="bento-card-header">
                  <MapPin size={16} className="bento-icon-orange" />
                  <h4 className="bento-title">Location</h4>
                </div>
                <div className="bento-location-text">
                  <span className="bento-loc-city">Kozhikode,</span>
                  <span className="bento-loc-region">Kerala, India</span>
                </div>
                <div className="bento-map-wrapper">
                  <iframe 
                    src="https://maps.google.com/maps?q=Kozhikode,Kerala,India&t=&z=11&ie=UTF8&iwloc=&output=embed" 
                    allowFullScreen="" 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kozhikode, Kerala, India Map"
                  />
                </div>
              </div>

              {/* 4. Box Box! - span 8 */}
              <div className="bento-card bento-boxbox bento-col-8">
                <div className="bento-card-header-spaced">
                  <h4 className="bento-title" style={{ color: 'var(--accent-color)' }}>Box Box!</h4>
                  <img src="/assets/bento-grid_icons/f1_flag.png" alt="F1 Flag" className="bento-png-flag" />
                </div>
                <p className="bento-desc">
                  F1 Racing is my favourite sport.
                </p>
                <img src="/assets/bento-grid_icons/f1_car.png" alt="F1 Car" className="bento-f1-png" />
              </div>

              {/* 5. Coffee > Tea - span 4 */}
              <div className="bento-card bento-coffee-tea bento-col-4">
                <div className="bento-card-content-left">
                  <h4 className="bento-title"><span style={{ color: 'var(--accent-color)' }}>Coffee</span> &gt; Tea</h4>
                  <div className="bento-coffee-fuel">
                    Coffee it is!
                  </div>
                  <p className="bento-desc text-brewing">
                    Status: Always brewing
                  </p>
                </div>
                <div className="bento-card-graphic-right">
                  <img src="/assets/bento-grid_icons/coffee.png" alt="Coffee Cup" className="bento-coffee-png" />
                </div>
              </div>

              {/* 6. Night Owl - span 4 */}
              <div className="bento-card bento-night-owl bento-col-4">
                <div className="bento-card-header">
                  <img src="/assets/bento-grid_icons/night_owl_moon.png" alt="Moon" className="bento-night-owl-moon-icon" />
                  <h4 className="bento-title">Night Owl</h4>
                </div>
                <p className="bento-desc">
                  When the world sleeps, I come alive.
                </p>
                <img src="/assets/bento-grid_icons/night_owl_background.png" alt="Skyline" className="bento-night-owl-bg-png" />
              </div>

              {/* 7. Fav Transportation - span 4 */}
              <div className="bento-card bento-fav-trans bento-col-4">
                <div className="bento-header-label">Fav Transportation</div>
                <div className="bento-pixel-art-wrapper">
                  <img src="/assets/bento-grid_icons/fav_transportation.png" alt="Airplane" className="bento-trans-png" />
                </div>
                <div className="bento-footer-label">
                  <span className="orange-arrow">&gt;</span> To the clouds.
                </div>
              </div>

              {/* 8. Paws & Whiskers - span 12 */}
              <div className="bento-card bento-paws-whiskers bento-col-12">
                <div className="bento-card-content-left">
                  <div className="bento-card-header">
                    <Heart size={16} className="bento-icon-orange" />
                    <h4 className="bento-title">Paws &amp; Whiskers</h4>
                  </div>
                  <p className="bento-desc">
                    I love all kinds of cats and big dogs.
                  </p>
                  <p className="bento-desc-highlight">
                    Favourite: <span className="highlight-orange">St. Bernard</span>
                  </p>
                </div>
                <div className="bento-card-graphic-right">
                  <img src="/assets/bento-grid_icons/paws_&_whiskers.png" alt="Pets" className="bento-pets-png" />
                </div>
              </div>

              {/* 9. Minimal by Choice - span 3, row-span 2 */}
              <div className="bento-card bento-minimal bento-col-3 bento-row-2">
                <h4 className="bento-title">Minimal by Choice</h4>
                <p className="bento-desc">
                  Less clutter. More clarity.
                </p>
                <BrowserWindow />
              </div>

              {/* 10. Pixel Perfect - span 5 */}
              <div className="bento-card bento-pixel-perfect bento-col-5">
                <div className="bento-card-content-left">
                  <h4 className="bento-title">Pixel Perfect</h4>
                  <p className="bento-desc">
                    Big fan of pixel arts.
                  </p>
                  <p className="bento-desc-sub">
                    8-bit feels, modern hearts.
                  </p>
                </div>
                <div className="bento-card-graphic-right">
                  <img src="/assets/bento-grid_icons/pixel_perfect.png" alt="Pixel Perfect Cat" className="bento-pixel-perfect-png" />
                </div>
              </div>

              {/* 11. Potterhead - span 4 */}
              <div className="bento-card bento-potterhead bento-col-4">
                <h4 className="bento-title">Potterhead</h4>
                <p className="bento-desc">
                  Waiting for my Hogwarts letter.
                </p>
                <img src="/assets/bento-grid_icons/harry_potter.png" alt="Harry Potter" className="bento-potterhead-png" />
              </div>

              {/* 12. OCD: Level - span 4 */}
              <div className="bento-card bento-ocd-card bento-col-4">
                <div className="bento-card-header-spaced">
                  <h4 className="bento-title">OCD: Level ♾️</h4>
                </div>
                <p className="bento-desc">
                  Details matter. A lot.
                </p>
                <img src="/assets/bento-grid_icons/ocd.png" alt="OCD Grid" className="bento-ocd-png" />
              </div>

              {/* 13. Cube It! - span 5 */}
              <div className="bento-card bento-cube-it bento-col-5">
                <h4 className="bento-title">Cube It! ✨</h4>
                <p className="bento-desc">
                  Rubik's Cubes are my kind of therapy.
                </p>
                <img src="/assets/bento-grid_icons/rubiks_cube.png" alt="Rubik's Cube" className="bento-cube-png" />
              </div>

              {/* 14. Brain Workout - span 6 */}
              <div className="bento-card bento-brain bento-col-6">
                <div className="bento-card-content-left">
                  <h4 className="bento-title">Brain Workout</h4>
                  <p className="bento-desc">
                    Love solving brain teasers, newspaper puzzles and anything that makes me think.
                  </p>
                </div>
                <div className="bento-card-graphic-right">
                  <img src="/assets/bento-grid_icons/brain.png" alt="Brain" className="bento-brain-png" />
                </div>
              </div>

              {/* 15. Talk in Codes - span 6 */}
              <div className="bento-card bento-codes bento-col-6">
                <div className="bento-card-content-left">
                  <h4 className="bento-title">Talk in Codes</h4>
                  <p className="bento-desc">
                    Cryptic conversations hit different.
                  </p>
                  <ul className="bento-bullet-list">
                    <li>Morse Code <span className="morse-val">... --- ...</span></li>
                    <li>NATO Phonetic <span className="nato-val">ALPHA BRAVO CHARLIE</span></li>
                  </ul>
                </div>
                <div className="bento-card-graphic-right">
                  <img src="/assets/bento-grid_icons/radio_tower.png" alt="Radio Tower" className="bento-codes-png" />
                </div>
              </div>

              {/* 16. Current Mission - span 12 */}
              <div className="bento-card bento-mission bento-col-12">
                <div className="bento-mission-left">
                  <div className="bento-card-header">
                    <span className="mission-prompt">&gt;_</span>
                    <h4 className="bento-title">Current Mission</h4>
                  </div>
                  <p className="bento-desc mission-text">
                    Solve problems. Break assumptions. Build solutions. Make the digital world a safer place.
                  </p>
                </div>
                <div className="bento-mission-right">
                  <img src="/assets/bento-grid_icons/mission.png" alt="Rocket Mission" className="bento-mission-png" />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* PROJECTS VIEW (Standalone Projects Page) */}
        {activeSection === 'projects' && (
          <ProjectsPage />
        )}

        {/* CERTIFICATIONS VIEW */}
        {activeSection === 'certificates' && (
          <CertificationsPage />
        )}

        {/* RESUME VIEW */}
        {activeSection === 'resume' && (
          <section id="resume" className="section" style={{ width: '100%', gap: '1.5rem' }}>
            <div className="resume-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div className="section-icon" style={{ margin: 0, display: 'flex', alignItems: 'center' }}>
                  <FileText size={32} strokeWidth={2.5} style={{ color: 'var(--text-primary)' }} />
                </div>
                <h2 className="section-title" style={{ fontSize: '1.65rem', fontWeight: '800', color: 'var(--text-primary)', textAlign: 'left', margin: '0.4rem 0 0.2rem 0', alignSelf: 'flex-start' }}>Resume</h2>
                <p className="resume-subtitle" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0' }}>
                  Here's my latest Resume!
                </p>
              </div>
              <a 
                href="/assets/resume/alvin-sonny_resume.pdf" 
                download="Alvin_Sonny_Resume.pdf"
                className="minimal-download-btn"
              >
                <Download size={16} />
                <span>Download</span>
              </a>
            </div>
            
            <hr className="section-divider" style={{ margin: '0', width: '2.5rem', alignSelf: 'flex-start' }} />
            
            <div className="custom-pdf-viewer" style={{ width: '100%', border: '1px solid var(--border-color)', borderRadius: '8px', backgroundColor: 'var(--pill-bg)', overflow: 'hidden' }}>
              {/* Custom Minimalist Header Bar */}
              <div className="pdf-viewer-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1.25rem', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--pill-bg-hover)' }}>
                {/* Left empty spacer */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '30%' }}>
                  <FileText style={{ width: '0.95rem', height: '0.95rem', color: 'var(--text-secondary)' }} />
                </div>
                
                {/* Center File Name */}
                <div className="pdf-filename" style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-primary)', textAlign: 'center', width: '40%' }}>
                  Alvin Sonny - Resume
                </div>
                
                {/* Right Zoom Controls */}
                <div className="pdf-zoom-controls" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.75rem', width: '30%' }}>
                  <button 
                    onClick={zoomOut}
                    style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '0.2rem', display: 'flex', alignItems: 'center' }}
                    title="Zoom Out"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '1.05rem', height: '1.05rem' }}>
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                  <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-secondary)', minWidth: '2.5rem', textAlign: 'center' }}>
                    {pdfZoom}%
                  </span>
                  <button 
                    onClick={zoomIn}
                    style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '0.2rem', display: 'flex', alignItems: 'center' }}
                    title="Zoom In"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '1.05rem', height: '1.05rem' }}>
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* PDF Content Area with custom zoom parameters */}
              <iframe 
                src={`/assets/resume/alvin-sonny_resume.pdf#toolbar=0&navpanes=0&view=${pdfZoom === 100 ? 'FitH' : ''}&zoom=${pdfZoom}`}
                title="alvin-sonny_resume.pdf" 
                width="100%" 
                height="750px" 
                style={{ border: 'none', display: 'block', backgroundColor: 'var(--bg-color)' }}
              />
            </div>
          </section>
        )}

      </div>

      {/* FLOATING PILL-SHAPED BOTTOM NAVIGATION BAR */}
      <div className="nav-pill-wrapper">
        <Dock 
          items={navItems}
          panelHeight={54}
          baseItemSize={40}
          magnification={50}
          distance={140}
        />
      </div>
    </>
  );
}
