import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  defaultViewport,
} from "../utils/motion";

const softwareSkills = [
  { name: "Python" },
  { name: "C/C++/C#" },
  { name: "JavaScript" },
  { name: "HTML/CSS" },
  { name: "React" },
  { name: "Vite" },
  { name: "Docker" },
];

const engineeringSkills = [
  { name: "DC-DC Converters" },
  { name: "PV Inverter Modelling" },
  { name: "PCB Design & Layout" },
  { name: "Embedded Systems" },
  { name: "UART / SPI / I2C" },
  { name: "Hardware Debugging" },
];

const toolsSkills = [
  { name: "MATLAB / Simulink" },
  { name: "LTspice" },
  { name: "AWS" },
  { name: "Linux / WSL" },
  { name: "TensorFlow / Keras" },
  { name: "REST APIs" },
  { name: "AutoCAD / KiCad / Eagle" },
];

function SkillArticle({ name }) {
  return (
    <motion.article variants={staggerItem}>
      <img src="/assets/checkmark.png" alt="" className="icon skill-icon" />
      <div>
        <h3 className="skill-name">{name}</h3>
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
        Tools and technologies I use across software, embedded systems, and engineering projects.
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
            <h2 className="experience-sub-title">Software &amp; Development</h2>
            <motion.div
              className="article-container"
              variants={staggerContainer(0.06)}
            >
              {softwareSkills.map((skill) => (
                <SkillArticle key={skill.name} name={skill.name} />
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="details-container skills-card"
            variants={fadeUp}
          >
            <h2 className="experience-sub-title">Engineering &amp; Embedded</h2>
            <motion.div
              className="article-container"
              variants={staggerContainer(0.06)}
            >
              {engineeringSkills.map((skill) => (
                <SkillArticle key={skill.name} name={skill.name} />
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="details-container skills-card"
            variants={fadeUp}
          >
            <h2 className="experience-sub-title">Tools, Cloud &amp; ML</h2>
            <motion.div
              className="article-container"
              variants={staggerContainer(0.06)}
            >
              {toolsSkills.map((skill) => (
                <SkillArticle key={skill.name} name={skill.name} />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Experience;
