import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Profile from "./components/Profile.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Timeline from "./components/Project_timeline.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
      />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
}

export default App;