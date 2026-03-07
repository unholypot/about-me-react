import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  defaultViewport,
} from "../utils/motion";

function Contact() {
  return (
    <motion.section
      id="contact"
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      <motion.p className="section__text__p1" variants={fadeUp}>
        Get in Touch
      </motion.p>
      <motion.h1 className="title" variants={fadeUp}>
        Contact Me
      </motion.h1>
      <motion.div
        className="contact-info-upper-container"
        variants={staggerContainer(0.15)}
      >
        <motion.div className="contact-info-container" variants={staggerItem}>
          <img
            src="/assets/email.png"
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:allensaji012@gmail.com">allensaji012@gmail.com</a>
          </p>
        </motion.div>
        <motion.div className="contact-info-container" variants={staggerItem}>
          <img
            src="/assets/linkedin.png"
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a
              href="https://www.linkedin.com/in/allensaji012/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
