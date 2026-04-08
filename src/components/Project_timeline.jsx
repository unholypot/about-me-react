import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  defaultViewport,
} from "../utils/motion";

/* ── REDUCED MOTION ─────────────────────────────────────── */
const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── ANIMATION VARIANTS ─────────────────────────────────── */
/* Hover preview: lighter, faster */
const previewVariants = {
  hidden: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: prefersReducedMotion ? 0.01 : 0.18, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    y: prefersReducedMotion ? 0 : -6,
    transition: { duration: prefersReducedMotion ? 0.01 : 0.14, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/* Full detail panel: deliberate, stable */
const panelVariants = {
  hidden: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: prefersReducedMotion ? 0.01 : 0.25,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: prefersReducedMotion ? 0 : -10,
    transition: {
      duration: prefersReducedMotion ? 0.01 : 0.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/* ── TIMELINE DATA ──────────────────────────────────────────
   Edit this array to add / remove / reorder entries.
   Fields:
     year        – displayed on the timeline node
     title       – card heading
     description – short summary shown on the collapsed card
     tags        – array of tech / category labels
     overview    – detailed project overview for the expanded panel
     role        – what you did / your contribution
     highlights  – array of key technical bullet points
     outcome     – optional result or status string
     links       – { github, liveDemo, report } — set to null to hide
   ────────────────────────────────────────────────────────── */
const timelineEntries = [
  {
    year: "2026",
    title: "Honours Research",
    description:
      "Investigating the use of artificial intelligence and computer vision techniques to analyse bubble formation and behaviour in engineering systems. The research explores how machine learning models can be used to detect, track, and characterise bubbles from visual data for improved monitoring and analysis.",
    tags: ["Research", "Computer Vision", "AI/ML"],
    overview:
      "This honours research project explores the application of AI and computer vision for analysing bubble dynamics in experimental systems. The aim is to develop algorithms capable of detecting bubbles, tracking their motion, and extracting meaningful physical parameters from visual data. The work will involve literature review, dataset preparation, model experimentation, and evaluation of different approaches for reliable bubble identification and analysis.",
    role:
      "Honours researcher – responsible for conducting literature review, designing the research methodology, developing AI-based detection models, analysing results, and documenting findings for the final thesis.",
    highlights: [
    "Literature review on bubble detection and computer vision techniques (in progress)",
    "Dataset exploration and preparation (planned)",
    "Model development and experimentation (to be continued)"
  ],
    outcome: "Ongoing — research currently in early stages and progressing toward thesis completion.",

  links: { github: null, liveDemo: null, report: null },
  },
  {
    year: "2026",
    title: "Portfolio Website",
    description:
      "Designed and built a personal portfolio using React and Vite with a custom retro theme, dark mode, and scroll-based animations.",
    tags: ["React", "Vite", "CSS", "Framer Motion"],
    overview:
      "A fully custom personal portfolio site built from scratch, featuring a warm retro design system, dark/light mode, keyboard accessibility, and Framer Motion scroll animations — all without a UI framework.",
    role:
      "Sole designer and developer — responsible for the design system, responsive layout, component architecture, and deployment.",
    highlights: [
      "Custom CSS design tokens for consistent theming across light and dark modes",
      "Scroll-triggered animations using Framer Motion with reduced-motion support",
      "Fully responsive from mobile to widescreen without a CSS framework",
      "Semantic, accessible HTML and keyboard-navigable navigation",
    ],
    outcome: "Live and continuously updated. Used as a primary professional presence.",
    links: { github: "https://github.com/unholypot/personal-website", liveDemo: "https://allensaji.com", report: null },
  },
  {
    year: "2025",
    title: "Cloud Background Removal System",
    description:
      "Built a scalable AWS-based image processing platform using microservices, asynchronous queues, and auto-scaling infrastructure.",
    tags: ["AWS", "ECS", "SQS", "RDS", "S3", "Cognito"],
    overview:
      "A cloud-native background removal platform designed with a microservices architecture, supporting asynchronous processing, secure user authentication, and dynamic auto-scaling on AWS.",
    role:
      "Designed and developed the full cloud architecture, including microservices, infrastructure configuration, and deployment across AWS services.",
    highlights: [
      "Designed a distributed microservices system using ECS Fargate for API and worker services",
      "Implemented asynchronous job processing using SQS with Dead Letter Queues for fault tolerance",
      "Built secure authentication using AWS Cognito with email verification",
      "Integrated PostgreSQL (RDS) for user data and image metadata persistence",
      "Stored and served processed images via S3 using pre-signed URLs",
      "Configured Application Load Balancer with HTTPS (ACM) and path-based routing",
      "Implemented auto-scaling (1-3 instances) based on CPU utilization",
      "Used CloudFront and Route 53 for global delivery and DNS routing",
      "Designed system for scalability up to thousands of concurrent users",
    ],
    outcome:
      "A scalable, fault-tolerant cloud system demonstrating production-level architecture patterns including microservices, queue-based processing, and auto-scaling.",
    links: { github: null, liveDemo: null, report: null },
  },
  {
    year: "2025",
    title: "Solar Inverter Analysis",
    description:
      "Reverse-engineered a commercial grid-connected solar PV inverter and modelled its MPPT DC-DC boost converter in LTspice and MATLAB to analyse efficiency, ripple behaviour, and converter performance.",
    tags: ["LTspice", "MATLAB", "Power Electronics", "Simulation"],
    overview:
      "A detailed engineering analysis of a commercial grid-connected solar PV inverter. Working in a two-person team, we reverse-engineered the inverter’s internal architecture and analysed its power conversion stages. The project focused on modelling the MPPT DC-DC boost converter, investigating the DC-AC single-phase full-bridge inverter stage, and evaluating converter efficiency, switching behaviour, and harmonic performance using simulation tools.",
    role:
      "Power electronics analysis and simulation — contributed to inverter architecture reverse engineering, LTspice circuit modelling, MATLAB-based analysis, and technical report development.",

    highlights: [
    "Reverse-engineered internal inverter architecture from hardware inspection and documentation",
    "Modelled and simulated the MPPT DC-DC boost converter using LTspice",
    "Investigated the single-phase full-bridge DC–AC inverter stage and switching strategies",
    "Evaluated converter efficiency, ripple characteristics, and harmonic behaviour",
    "Produced a technical report analysing converter topologies, power factor, and EMI considerations"
    ],
    outcome:
       "Developed validated simulation models of the inverter’s boost converter stage and produced a comprehensive engineering report analysing inverter design, control strategies, and performance trade-offs.",
    links: { github: null, liveDemo: null, report: null },
  },
  {
    year: "2024",
    title: "Elevator System Simulation",
    description:
      "Built a multi-component elevator simulator in C for Linux using POSIX shared memory, multithreading, and TCP/IP sockets.",
    tags: ["C", "Linux", "POSIX", "TCP/IP"],
    overview:
      "A complex systems programming project simulating a networked multi-floor elevator controller. Multiple processes communicate over TCP/IP and share state via POSIX shared memory — modelling real-time concurrent operation.",
    role:
      "Sole developer — designed the system architecture and implemented all components: controller, simulator, display, and network layer.",
    highlights: [
      "POSIX shared memory for inter-process state synchronisation",
      "POSIX threads and mutexes for concurrent floor-request handling",
      "TCP/IP socket communication between elevator controller and display process",
      "Graceful shutdown and signal handling across all processes",
    ],
    outcome:
      "Fully functional simulator with deterministic scheduling and clean resource cleanup on exit.",
    links: { github: null, liveDemo: null, report: null },
  },
  {
    year: "2023",
    title: "C# Mission Planner",
    description:
      "Developed a text-based mission planner in C# (.NET 6.0) with pathfinding to determine the shortest and safest route through a grid-based map.",
    tags: ["C#", ".NET", "Algorithms"],
    overview:
      "A console-based mission planning tool that reads a grid map, identifies threats and safe zones, and uses pathfinding to compute the optimal route for a mission agent.",
    role:
      "Sole developer — designed the data model, implemented the pathfinding algorithm, and built the text-based display renderer.",
    highlights: [
      "Weighted A* pathfinding accounting for terrain cost and threat proximity",
      "Custom map parser supporting variable grid sizes and obstacle definitions",
      "Clear ASCII console rendering of the map, path, and mission summary",
      "Modular design separating map loading, pathfinding, and display layers",
    ],
    outcome:
      "Successfully found optimal routes across all provided test maps, including edge cases with enclosed zones.",
    links: { github: "https://github.com/unholypot/CAB201-Project", liveDemo: null, report: null },
  },
];

/* ── COMPACT HOVER PREVIEW PANEL ───────────────────────── */
function PreviewPanel({ entry }) {
  return (
    <div className="timeline-preview-panel">
      <span className="timeline-detail-label">◈ case study</span>
      <p className="timeline-preview-overview">{entry.overview}</p>
      {entry.role && (
        <div className="timeline-detail-section">
          <h4 className="timeline-detail-section-title">What I Did</h4>
          <p className="timeline-preview-role">{entry.role}</p>
        </div>
      )}
      <span className="timeline-preview-hint">↓ Click to expand full case study</span>
    </div>
  );
}

/* ── DETAIL PANEL COMPONENT ─────────────────────────────── */
function DetailPanel({ entry }) {
  const { github, liveDemo, report } = entry.links ?? {};
  const hasLinks = github || liveDemo || report;

  return (
    <div className="timeline-detail-panel">
      <span className="timeline-detail-label">◈ case study</span>

      {entry.overview && (
        <p className="timeline-detail-overview">{entry.overview}</p>
      )}

      {entry.role && (
        <div className="timeline-detail-section">
          <h4 className="timeline-detail-section-title">What I Did</h4>
          <p className="timeline-detail-text">{entry.role}</p>
        </div>
      )}

      {entry.highlights?.length > 0 && (
        <div className="timeline-detail-section">
          <h4 className="timeline-detail-section-title">Key Highlights</h4>
          <ul className="timeline-detail-list">
            {entry.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>
      )}

      {entry.outcome && (
        <div className="timeline-detail-section">
          <h4 className="timeline-detail-section-title">Outcome</h4>
          <p className="timeline-detail-text">{entry.outcome}</p>
        </div>
      )}

      <div className="timeline-detail-links">
        {github && (
          <a
            href={github}
            className="timeline-detail-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            ⌥ GitHub
          </a>
        )}
        {liveDemo && (
          <a
            href={liveDemo}
            className="timeline-detail-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            ↗ Live Demo
          </a>
        )}
        {report && (
          <a
            href={report}
            className="timeline-detail-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            ⊞ Report
          </a>
        )}
        {!hasLinks && (
          <span className="timeline-detail-btn timeline-detail-btn--muted">
            No external links available
          </span>
        )}
      </div>
    </div>
  );
}

/* ── MAIN TIMELINE COMPONENT ────────────────────────────── */
function Timeline() {
  // ── Desktop: click-locked full panel (one at a time) ──
  const [desktopOpenId, setDesktopOpenId] = useState(null);
  // ── Desktop: hover compact floating preview ────────────
  const [hoverPreviewId, setHoverPreviewId] = useState(null);
  // ── Mobile: independent per-card toggle (object map) ──
  const [mobileOpenIds, setMobileOpenIds] = useState({});

  // ── Breakpoint: matches CSS @media (max-width: 1200px) ─
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth <= 1200
  );

  const hoverTimer = useRef(null);
  const cardRefs = useRef({});
  const panelRefs = useRef({});

  // Sync isMobile with viewport changes
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1200px)");
    const handler = (e) => {
      setIsMobile(e.matches);
      if (e.matches) {
        clearTimeout(hoverTimer.current);
        setDesktopOpenId(null);
        setHoverPreviewId(null);
      } else {
        setMobileOpenIds({});
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Desktop: close full panel when clicking outside card + panel
  useEffect(() => {
    if (!desktopOpenId) return;
    const handleDocClick = (e) => {
      const card = cardRefs.current[desktopOpenId];
      const panel = panelRefs.current[desktopOpenId];
      if (!card?.contains(e.target) && !panel?.contains(e.target)) {
        setDesktopOpenId(null);
      }
    };
    document.addEventListener("mousedown", handleDocClick);
    return () => document.removeEventListener("mousedown", handleDocClick);
  }, [desktopOpenId]);

  // Hover handlers — desktop only, card element only
  const startHover = (title) => {
    if (isMobile) return;
    clearTimeout(hoverTimer.current);
    setHoverPreviewId(title);
  };

  const endHover = () => {
    if (isMobile) return;
    hoverTimer.current = setTimeout(() => setHoverPreviewId(null), 120);
  };

  // Desktop click — one open at a time, clicking same card closes it
  const handleDesktopClick = (title) => {
    setDesktopOpenId((prev) => (prev === title ? null : title));
    clearTimeout(hoverTimer.current);
    setHoverPreviewId(null);
  };

  // Mobile tap — each card independently toggled
  const handleMobileToggle = (title) => {
    setMobileOpenIds((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <motion.section
      id="projects"
      variants={staggerContainer(0.15)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      <motion.p className="section__text__p1" variants={fadeUp}>
        Browse My Recent
      </motion.p>
      <motion.h1 className="title" variants={fadeUp}>
        Projects
      </motion.h1>

      <motion.div className="timeline" variants={fadeUp}>
        {timelineEntries.map((entry, index) => {
          const isLeft = index % 2 === 0;
          const uid = `${entry.year}-${entry.title}`;

          // Desktop derived state
          const isDesktopOpen = desktopOpenId === entry.title;
          // Hover preview only shows when no full panel is open for this card
          const isHoverPreview = !isMobile && hoverPreviewId === entry.title && !isDesktopOpen;
          const desktopCardActive = isDesktopOpen || isHoverPreview;

          // Mobile derived state
          const isMobileOpen = isMobile && !!mobileOpenIds[entry.title];

          // Combined for card styling / dot
          const isCardActive = isMobile ? isMobileOpen : desktopCardActive;

          const cardEl = (
            <div
              ref={(el) => { cardRefs.current[entry.title] = el; }}
              className={`timeline-card${isCardActive ? " timeline-card--expanded" : ""}`}
              role="button"
              tabIndex={0}
              aria-expanded={isMobile ? isMobileOpen : isDesktopOpen}
              aria-label={`${entry.title} — ${(isMobile ? isMobileOpen : isDesktopOpen) ? "collapse" : "expand"} details`}
              onClick={() =>
                isMobile
                  ? handleMobileToggle(entry.title)
                  : handleDesktopClick(entry.title)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  isMobile
                    ? handleMobileToggle(entry.title)
                    : handleDesktopClick(entry.title);
                }
              }}
              onMouseEnter={!isMobile ? () => startHover(entry.title) : undefined}
              onMouseLeave={!isMobile ? endHover : undefined}
            >
              <span className="timeline-year">{entry.year}</span>
              <h3 className="timeline-card-title">{entry.title}</h3>
              <p className="timeline-card-desc">{entry.description}</p>
              {entry.tags?.length > 0 && (
                <div className="timeline-tags">
                  {entry.tags.map((tag) => (
                    <span className="chip" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="timeline-card-expand-hint">
                <span
                  className={`timeline-card-chevron${
                    isCardActive ? " timeline-card-chevron--open" : ""
                  }`}
                >
                  {isMobile
                    ? isMobileOpen ? "▲ Collapse" : "▼ View Details"
                    : isDesktopOpen ? "▲ Collapse" : "▼ View Details"}
                </span>
              </div>
            </div>
          );

          const panelEl = (
            <div
              ref={(el) => { panelRefs.current[entry.title] = el; }}
              style={{ position: "relative" }}
            >
              {/* Desktop: compact floating hover preview — does not affect flow */}
              <AnimatePresence>
                {isHoverPreview && (
                  <motion.div
                    key={`preview-${uid}`}
                    className="timeline-preview-wrapper"
                    variants={previewVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onMouseEnter={() => startHover(entry.title)}
                    onMouseLeave={endHover}
                  >
                    <PreviewPanel entry={entry} />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Desktop: full clicked-open panel — renders in normal flow */}
              <AnimatePresence>
                {isDesktopOpen && (
                  <motion.div
                    key={`detail-${uid}`}
                    variants={panelVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <DetailPanel entry={entry} />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mobile: full panel, independent per-card */}
              <AnimatePresence>
                {isMobileOpen && (
                  <motion.div
                    key={`mobile-${uid}`}
                    variants={panelVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <DetailPanel entry={entry} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );

          return (
            <motion.div
              key={uid}
              className={`timeline-row${
                isLeft ? " timeline-row--left" : " timeline-row--right"
              }`}
              variants={staggerItem}
            >
              {/* Left column */}
              <div className="tl-col tl-col--left">
                {isLeft ? cardEl : panelEl}
              </div>

              {/* Center: timeline marker */}
              <div className="tl-center">
                <span
                  className={`timeline-node-dot${
                    isCardActive ? " timeline-node-dot--active" : ""
                  }`}
                />
              </div>

              {/* Right column */}
              <div className="tl-col tl-col--right">
                {isLeft ? panelEl : cardEl}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}

export default Timeline;
