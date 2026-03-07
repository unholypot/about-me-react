import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  defaultViewport,
} from "../utils/motion";

function About() {
  return (
    <motion.section
      id="about"
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      <motion.p className="section__text__p1" variants={fadeUp}>
        Get To Know More
      </motion.p>
      <motion.h1 className="title" variants={fadeUp}>
        About Me
      </motion.h1>
      <div className="section-container">
        <div className="about-details-container">
          <motion.div
            className="about-containers"
            variants={staggerContainer(0.15)}
          >
            <motion.div className="details-container" variants={staggerItem}>
              <img
                src="/assets/experience.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>
                Warehouse Dispatcher
                <br />
                Retail Team Member @ COLES
              </p>
            </motion.div>
            <motion.div className="details-container" variants={staggerItem}>
              <img
                src="/assets/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                B.E. (Hons) Computer &amp;
                <br />
                Software Systems — QUT
                <br />
                <em>Expected 02/2027</em>
              </p>
            </motion.div>
          </motion.div>
          <motion.div className="text-container" variants={fadeUp}>
            <p>
              I'm a Computer and Software Systems Engineering student at
              Queensland University of Technology (Dean's List), minoring in
              Advanced Electrical Engineering and Robotics &amp; Embedded
              Systems. I'm passionate about software development, power
              electronics, and embedded systems. With hands-on experience in C,
              C#, Python, LTspice, and MATLAB, I enjoy solving complex
              engineering problems — from simulating solar inverters to building
              multithreaded operating systems in C. I'm a quick learner who
              thrives in collaborative, technically challenging environments. I
              also love crabs 🦀.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
