import { motion } from "framer-motion";  // eslint-disable-line no-unused-vars
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  defaultViewport,
} from "../utils/motion";

/* ── TIMELINE DATA ─────────────────────────────────────────
   Edit this array to add / remove / reorder entries.
   Fields:
     year        – displayed on the timeline node
     title       – card heading
     description – short summary (1-2 sentences)
     tags        – optional array of tech / category labels
   ────────────────────────────────────────────────────────── */
const timelineEntries = [
  {
    year: "2025",
    title: "Honours Research",
    description:
      "Conducting research into advanced power electronics topologies and control strategies for renewable energy integration.",
    tags: ["Research", "Power Electronics", "MATLAB"],
  },
  {
    year: "2024",
    title: "Portfolio Website",
    description:
      "Designed and built a personal portfolio using React and Vite with a custom retro theme, dark mode, and scroll-based animations.",
    tags: ["React", "Vite", "CSS", "Framer Motion"],
  },
  {
    year: "2024",
    title: "Solar Inverter Analysis",
    description:
      "Reverse-engineered a grid-connected Solar PV inverter. Simulated MPPT DC-DC boost converter using LTspice & MATLAB.",
    tags: ["LTspice", "MATLAB", "Power Systems"],
  },
  {
    year: "2023",
    title: "Elevator System Simulation",
    description:
      "Built a multi-component elevator simulator in C for Linux using POSIX shared memory, multithreading, and TCP/IP sockets.",
    tags: ["C", "Linux", "POSIX", "TCP/IP"],
  },
  {
    year: "2023",
    title: "C# Mission Planner",
    description:
      "Developed a text-based mission planner in C# (.NET 6.0) with pathfinding to determine the shortest and safest route through a grid-based map.",
    tags: ["C#", ".NET", "Algorithms"],
  },
];

function Timeline() {
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
        {timelineEntries.map((entry, index) => (
          <motion.div
            className={`timeline-item ${index % 2 === 0 ? "timeline-item--left" : "timeline-item--right"}`}
            key={`${entry.year}-${entry.title}`}
            variants={staggerItem}
          >
            {/* Node / marker on the line */}
            <div className="timeline-node">
              <span className="timeline-node-dot" />
            </div>

            {/* Card */}
            <div className="timeline-card">
              <span className="timeline-year">{entry.year}</span>
              <h3 className="timeline-card-title">{entry.title}</h3>
              <p className="timeline-card-desc">{entry.description}</p>
              {entry.tags && entry.tags.length > 0 && (
                <div className="timeline-tags">
                  {entry.tags.map((tag) => (
                    <span className="chip" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Timeline;
