function Navbar({toggleDarkMode, menuOpen, toggleMenu }) {
  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Allen Saji</div>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Skills &amp; Tools</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            <img
              src="/assets/dmode_black.png"
              alt="Dark mode"
              className={"toggle-icon icon-light-mode"}
            />
            <img
              src="/assets/dmode_white.png"
              alt="Dark mode"
              className={"toggle-icon icon-dark-mode"}
            />
          </button>
        </div>
      </nav>

      <nav id="hamburger-nav">
        <div className="logo">Allen Saji</div>
        <div className="hamburger-menu">
          <button
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            style={{ marginRight: "1rem" }}
          >
            <img
              src="/assets/dmode_black.png"
              alt="Dark mode"
              className={"toggle-icon icon-light-mode"}
            />
            <img
              src="/assets/dmode_white.png"
              alt="Dark mode"
              className={"toggle-icon icon-dark-mode"}
            />
          </button>
          <div
            className={"hamburger-icon" + (menuOpen ? " open" : "")}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={"menu-links" + (menuOpen ? " open" : "")}>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Skills &amp; Tools</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;