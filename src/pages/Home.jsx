import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="page hero-page">
      <div className="hero-grid">
        <div>
          <div className="eyebrow">SDSU • Software • AI • Community</div>
          <h1 className="hero-title">
            The Computer Technology Society @ SDSU
          </h1>
          <p className="hero-text">
            CTS is a student organization focused on software development,
            innovation, technical growth, and meaningful connections in the tech industry.
            We help students learn, build, and grow through workshops, projects, events,
            and conversations around modern technology.
          </p>

          <div className="hero-actions">
            <Link to="/join" className="btn btn-gold">Join CTS</Link>
            <Link to="/projects" className="btn btn-outline">See Projects</Link>
          </div>
        </div>

        <div className="hero-card">
          <img src="/logo.png" alt="CTS Logo" className="hero-logo" />
          <h2 className="hero-card-title">What We Do</h2>
          <div className="feature-list">
            <div className="feature-item">Guest speakers from industry</div>
            <div className="feature-item">Technical workshops and hands-on learning</div>
            <div className="feature-item">LeetCode and system design preparation</div>
            <div className="feature-item">AI, software, and emerging technology discussions</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
