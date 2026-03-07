import { motion } from "framer-motion";
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  staggerItem,
} from "../utils/motion";

function Profile() {
  return (
    <section id="profile">
      <motion.div
        className="section__pic-container"
        variants={scaleIn}
        initial="hidden"
        animate="visible"
      >
        <img src="/assets/profile-pic.jpg" alt="Allen Saji profile picture" />
      </motion.div>
      <motion.div
        className="section__text"
        variants={staggerContainer(0.1)}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="section__text__p1" variants={fadeUp}>
          Hello, I'm
        </motion.p>
        <motion.h1 className="title" variants={fadeUp}>
          Allen Saji
        </motion.h1>
        <motion.p className="section__text__p2" variants={fadeUp}>
          Computer &amp; Software Systems Engineering Student
        </motion.p>
        <motion.div className="status-row" variants={staggerContainer(0.08)}>
          <motion.div className="status-pill" variants={staggerItem}>
            <span className="badge-dot"></span>
            <span className="status-label">Currently:</span> Honours research
            &mdash; Bubble image analysis using computer vision
          </motion.div>
          <motion.div className="status-pill" variants={staggerItem}>
            Open to internships
          </motion.div>
        </motion.div>
        <motion.div
          className="btn-container"
          variants={staggerContainer(0.1)}
        >
          <motion.button
            className="btn btn-color-2"
            variants={staggerItem}
            onClick={() => window.open("/assets/Allen_Saji_CV.pdf")}
          >
            Download CV
          </motion.button>
          <motion.button
            className="btn btn-color-1"
            variants={staggerItem}
            onClick={() => {
              window.location.href = "/#contact";
            }}
          >
            Contact Info
          </motion.button>
        </motion.div>
        <motion.div id="socials-container" variants={staggerContainer(0.12)}>
          <motion.a
            variants={staggerItem}
            href="https://www.linkedin.com/in/allensaji012/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/linkedin.png"
              alt="My LinkedIn profile"
              className="icon"
            />
          </motion.a>
          <motion.a
            variants={staggerItem}
            href="https://github.com/unholypot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/github.png"
              alt="My GitHub profile"
              className="icon"
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Profile;
