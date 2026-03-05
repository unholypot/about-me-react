function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="/assets/profile-pic.jpg" alt="Allen Saji profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Allen Saji</h1>
        <p className="section__text__p2">Computer &amp; Software Systems Engineering Student</p>
        <div className="status-row">
          <div className="status-pill">
            <span className="badge-dot"></span>
            <span className="status-label">Currently:</span> Honours research &mdash; Bubble image analysis using computer vision
          </div>
          <div className="status-pill">
            Open to internships
          </div>
        </div>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open("/assets/Allen_Saji_CV.pdf")}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => { window.location.href = "/#contact"; }}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
            <a
          
            href="https://www.linkedin.com/in/allensaji012/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/linkedin.png" alt="My LinkedIn profile" className="icon" />
          </a>
          <a
            href="https://github.com/unholypot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/github.png" alt="My GitHub profile" className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profile; 