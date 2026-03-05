import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Profile from "./components/Profile.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
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
      <Contact />
      <Footer />
    </>
  );
}

export default App;