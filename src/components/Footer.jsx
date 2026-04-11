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

      <p>Copyright &#169; 2026 Allen Saji.</p>
      <p> Built with React {"//"} Running on Vercel.</p>
    </motion.footer>
  );
}

export default Footer;
