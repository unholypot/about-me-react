import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { fadeUp, defaultViewport } from "../utils/motion";

function Footer() {
  return (
    <motion.footer
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Skills &amp; Tools</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2025 Allen Saji.</p>
      <p> Built with React {"//"} Running on Vercel.</p>
    </motion.footer>
  );
}

export default Footer;
