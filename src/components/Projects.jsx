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

function Projects() {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((project) => (
            <div key={project.title} className="details-container color-container">
              <div className="article-container"></div>
              <h2 className="experience-sub-title project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;