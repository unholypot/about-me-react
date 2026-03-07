import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, defaultViewport } from "../utils/motion";

const projects = [
  {
    title: "Solar Inverter Analysis",
    description:
      "Reverse-engineered a grid-connected Solar PV inverter. Simulated MPPT DC-DC boost converter using LTspice & MATLAB. Analyzed inverter topologies for efficiency and EMI compliance.",
  },
  {
    title: "Elevator System Simulation",
    description:
      "Built a multi-component elevator simulator in C for Linux using POSIX shared memory, multithreading, and TCP/IP sockets. Implemented a floor scheduling algorithm with safety-critical MISRA C standards.",
  },
  {
    title: "C# Mission Planner",
    description:
      "Developed a text-based mission planner in C# (.NET 6.0) with a menu-driven interface. Implemented pathfinding to determine the shortest and safest route through a grid-based map with obstacles.",
  },
];

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const cardVariants = {
  enter: (direction) =>
    prefersReducedMotion
      ? { opacity: 0 }
      : { x: direction > 0 ? 200 : -200, opacity: 0, scale: 0.95 },
  center: prefersReducedMotion
    ? { opacity: 1 }
    : { x: 0, opacity: 1, scale: 1 },
  exit: (direction) =>
    prefersReducedMotion
      ? { opacity: 0 }
      : { x: direction > 0 ? -200 : 200, opacity: 0, scale: 0.95 },
};

const cardTransition = prefersReducedMotion
  ? { duration: 0.01 }
  : { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] };

const swipeThreshold = 50;

function Projects() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    setActiveIndex(([prev]) => {
      let next = prev + newDirection;
      if (next < 0) next = projects.length - 1;
      if (next >= projects.length) next = 0;
      return [next, newDirection];
    });
  };

  const goTo = (index) => {
    setActiveIndex(([prev]) => [index, index > prev ? 1 : -1]);
  };

  return (
    <motion.section
      id="projects"
      variants={staggerContainer(0.12)}
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

      <motion.div className="project-carousel" variants={fadeUp}>
        <button
          className="carousel-arrow carousel-arrow--left"
          onClick={() => paginate(-1)}
          aria-label="Previous project"
        >
          &#8592;
        </button>

        <div className="carousel-viewport">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={activeIndex}
              className="details-container color-container carousel-card"
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={cardTransition}
              drag={prefersReducedMotion ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x < -swipeThreshold) paginate(1);
                else if (info.offset.x > swipeThreshold) paginate(-1);
              }}
            >
              <div className="article-container"></div>
              <h2 className="experience-sub-title project-title">
                {projects[activeIndex].title}
              </h2>
              <p className="project-description">
                {projects[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          className="carousel-arrow carousel-arrow--right"
          onClick={() => paginate(1)}
          aria-label="Next project"
        >
          &#8594;
        </button>
      </motion.div>

      <motion.div className="carousel-dots" variants={fadeUp}>
        {projects.map((p, i) => (
          <button
            key={p.title}
            className={
              "carousel-dot" + (i === activeIndex ? " carousel-dot--active" : "")
            }
            onClick={() => goTo(i)}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Projects;
