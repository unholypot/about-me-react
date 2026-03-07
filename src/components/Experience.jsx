import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  defaultViewport,
} from "../utils/motion";

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
    <motion.article variants={staggerItem}>
      <img src="/assets/checkmark.png" alt="" className="icon skill-icon" />
      <div>
        <h3 className="skill-name">{name}</h3>
        <p className="skill-level">{level}</p>
      </div>
    </motion.article>
  );
}

function Experience() {
  return (
    <motion.section
      id="experience"
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      <motion.p className="section__text__p1" variants={fadeUp}>
        What I use for software, electronics, and computer vision work.
      </motion.p>
      <motion.h1 className="title" variants={fadeUp}>
        Skills &amp; Tools
      </motion.h1>
      <div className="experience-details-container">
        <motion.div
          className="about-containers skills-grid"
          variants={staggerContainer(0.15)}
        >
          <motion.div
            className="details-container skills-card"
            variants={fadeUp}
          >
            <h2 className="experience-sub-title">Software &amp; Languages</h2>
            <motion.div
              className="article-container"
              variants={staggerContainer(0.06)}
            >
              {softwareSkills.map((skill) => (
                <SkillArticle
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="details-container skills-card"
            variants={fadeUp}
          >
            <h2 className="experience-sub-title">Engineering &amp; Systems</h2>
            <motion.div
              className="article-container"
              variants={staggerContainer(0.06)}
            >
              {engineeringSkills.map((skill) => (
                <SkillArticle
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Experience;
