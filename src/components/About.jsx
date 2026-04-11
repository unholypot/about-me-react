import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
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
      <motion.div className="about-text" variants={fadeUp}>
        <p>
          I'm a final-year engineering student with one foot in software and the other in electrical. I like the parts of engineering where those two worlds overlap, and most of my best projects live there. I also like keeping up with the latest tech and the way the AI space keeps shifting week to week.
        </p>
        <p>
          When I'm not studying or building things, I'm probably at Coles, at the gym, gaming, or somewhere on the internet trying to figure out how to make this website a little weirder.
        </p>
      </motion.div>
    </motion.section>
  );
}

export default About;
