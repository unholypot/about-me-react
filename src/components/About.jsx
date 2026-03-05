function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src="/assets/experience.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>Warehouse Dispatcher<br />Retail Team Member @ COLES</p>
            </div>
            <div className="details-container">
              <img
                src="/assets/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                B.E. (Hons) Computer &amp;<br />
                Software Systems — QUT<br />
                <em>Expected 02/2027</em>
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I'm a Computer and Software Systems Engineering student at Queensland University
              of Technology (Dean's List), minoring in Advanced Electrical Engineering and
              Robotics &amp; Embedded Systems. I'm passionate about software development,
              power electronics, and embedded systems. With hands-on experience in C, C#,
              Python, LTspice, and MATLAB, I enjoy solving complex engineering problems —
              from simulating solar inverters to building multithreaded operating systems in C.
              I'm a quick learner who thrives in collaborative, technically challenging
              environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;