import { useState, Fragment } from "react";
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

/* ── DETAIL PANEL ANIMATION VARIANTS ───────────────────── */
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
    year: "2025",
    title: "Honours Research",
    description:
      "Conducting research into advanced power electronics topologies and control strategies for renewable energy integration.",
    tags: ["Research", "Power Electronics", "MATLAB"],
    overview:
      "My Honours-year research investigates advanced DC-DC converter topologies and model predictive control (MPC) strategies for improved renewable energy grid integration. The work spans simulation, hardware validation, and a formal academic write-up.",
    role:
      "Independent researcher — conducting literature review, building and validating simulation models, and writing the final thesis under academic supervision.",
    highlights: [
      "Modelling multi-phase interleaved boost converters in MATLAB/Simulink",
      "Implementing and tuning MPC algorithms for dynamic load conditions",
      "Comparing topology performance across efficiency, ripple, and transient response metrics",
    ],
    outcome: "Ongoing — targeting journal submission by end of 2025.",
    links: { github: null, liveDemo: null, report: null },
  },
  {
    year: "2024",
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
    links: { github: null, liveDemo: null, report: null },
  },
  {
    year: "2024",
    title: "Solar Inverter Analysis",
    description:
      "Reverse-engineered a grid-connected Solar PV inverter. Simulated MPPT DC-DC boost converter using LTspice & MATLAB.",
    tags: ["LTspice", "MATLAB", "Power Systems"],
    overview:
      "A deep-dive engineering analysis of a commercial grid-connected solar PV inverter, including circuit-level reverse engineering, simulation, and efficiency benchmarking of the MPPT boost converter stage.",
    role:
      "Lead engineer — responsible for hardware disassembly, schematic reconstruction, and all simulation work.",
    highlights: [
      "Reverse-engineered boost converter stage from PCB traces and component values",
      "Simulated Perturb & Observe (P&O) MPPT algorithm in MATLAB",
      "Verified simulation results against measured inverter performance data",
      "LTspice transient analysis for switching losses and efficiency curves",
    ],
    outcome:
      "Achieved simulated efficiency within 3% of datasheet specifications, validating the reverse-engineered model.",
    links: { github: null, liveDemo: null, report: null },
  },
  {
    year: "2023",
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
    links: { github: null, liveDemo: null, report: null },
  },
];

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
            ○ Links Coming Soon
          </span>
        )}
      </div>
    </div>
  );
}

/* ── MAIN TIMELINE COMPONENT ────────────────────────────── */
function Timeline() {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (title) =>
    setExpandedId((prev) => (prev === title ? null : title));

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
          const isExpanded = expandedId === entry.title;
          const uid = `${entry.year}-${entry.title}`;

          return (
            <Fragment key={uid}>
              {/* ── Card item ───────────────────────────── */}
              <motion.div
                className={`timeline-item ${
                  isLeft ? "timeline-item--left" : "timeline-item--right"
                }${isExpanded ? " timeline-item--expanded" : ""}`}
                variants={staggerItem}
              >
                {/* Node / marker on the centre line */}
                <div className="timeline-node">
                  <span
                    className={`timeline-node-dot${
                      isExpanded ? " timeline-node-dot--active" : ""
                    }`}
                  />
                </div>

                {/* Clickable card */}
                <div
                  className={`timeline-card${
                    isExpanded ? " timeline-card--expanded" : ""
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  aria-label={`${entry.title} — ${isExpanded ? "collapse" : "expand"} details`}
                  onClick={() => handleToggle(entry.title)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleToggle(entry.title);
                    }
                  }}
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
                        isExpanded ? " timeline-card-chevron--open" : ""
                      }`}
                    >
                      {isExpanded ? "▲ Collapse" : "▼ View Details"}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* ── Detail panel (opposite side on desktop, below on mobile) ── */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    key={`detail-${uid}`}
                    className={`timeline-detail-row ${
                      isLeft
                        ? "timeline-detail-row--right"
                        : "timeline-detail-row--left"
                    }`}
                    variants={panelVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <DetailPanel entry={entry} />
                  </motion.div>
                )}
              </AnimatePresence>
            </Fragment>
          );
        })}
      </motion.div>
    </motion.section>
  );
}

export default Timeline;
