const softwareSkills = [
  { name: "Python", level: "Proficient" },
  { name: "C", level: "Proficient" },
  { name: "C#", level: "Proficient" },
  { name: "MATLAB", level: "Working knowledge" },
  { name: "LTspice", level: "Working knowledge" },
  { name: "PCB Design", level: "Familiar" },
];

const engineeringSkills = [
  { name: "DC-DC Converters", level: "Working knowledge" },
  { name: "Multithreading", level: "Working knowledge" },
  { name: "TCP/IP Sockets", level: "Proficient" },
  { name: "Embedded Systems", level: "Working knowledge" },
  { name: "Data Structures", level: "Proficient" },
  { name: "Oscilloscope / DMM", level: "Familiar" },
];

function SkillArticle({ name, level }) {
  return (
    <article>
      <img src="/assets/checkmark.png" alt="" className="icon skill-icon" />
      <div>
        <h3 className="skill-name">{name}</h3>
        <p className="skill-level">{level}</p>
      </div>
    </article>
  );
}

function Experience() {
  return (
    <section id="experience">
      <p className="section__text__p1">What I use for software, electronics, and computer vision work.</p>
      <h1 className="title">Skills &amp; Tools</h1>
      <div className="experience-details-container">
        <div className="about-containers skills-grid">
          <div className="details-container skills-card">
            <h2 className="experience-sub-title">Software &amp; Languages</h2>
            <div className="article-container">
              {softwareSkills.map((skill) => (
                <SkillArticle key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
          <div className="details-container skills-card">
            <h2 className="experience-sub-title">Engineering &amp; Systems</h2>
            <div className="article-container">
              {engineeringSkills.map((skill) => (
                <SkillArticle key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;