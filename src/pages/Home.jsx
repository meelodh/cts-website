import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page-shell">
      <section className="home-hero">
        <div className="home-hero-content">
          <p className="home-kicker">The Computer Technology Society @ SDSU</p>

          <h1>
            A Better Way to Build
            <br />
            Technical Community
          </h1>

          <p className="home-subtext">
            We help students grow through software engineering workshops, guest
            speakers, technical interview prep, hands-on projects, and real
            industry insight.
          </p>

          <div className="home-actions">
            <Link to="/join" className="primary-home-btn">
              Join CTS
            </Link>

            <Link to="/exec-board" className="secondary-home-btn">
              Meet the Board
            </Link>
          </div>
        </div>

        <div className="home-hero-card">
          <div className="home-card">
            <div className="home-card-top">
              <span className="status-dot" />
              <span>Student-Led Tech Community</span>
            </div>

            <h3>What We Focus On</h3>

            <div className="skill-pills">
              <span>Software Engineering</span>
              <span>LeetCode</span>
              <span>System Design</span>
              <span>AI / ML</span>
              <span>Projects</span>
              <span>Career Growth</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <h2>What We Do</h2>
          <p>
            We create a space for students to learn, build, and connect with
            professionals in the software and technology industry.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Technical Workshops</h3>
            <p>
              Practice real software engineering concepts through hands-on
              workshops in coding, system design, and technical problem solving.
            </p>
          </div>

          <div className="feature-card">
            <h3>Guest Speakers</h3>
            <p>
              Hear from engineers, alumni, and professionals about internships,
              career paths, and what it takes to break into tech.
            </p>
          </div>

          <div className="feature-card">
            <h3>Projects & Community</h3>
            <p>
              Build your resume, meet like-minded students, and work on real
              technical projects in a strong student community.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <h2>Explore CTS</h2>
          <p>
            Learn more about our leadership, supporters, and how to get
            involved.
          </p>
        </div>

        <div className="feature-grid">
          <Link to="/exec-board" className="feature-link-card">
            <h3>Executive Board</h3>
            <p>Meet the students leading The Computer Technology Society.</p>
          </Link>

          <Link to="/sponsors-alumni" className="feature-link-card">
            <h3>Sponsors & Alumni</h3>
            <p>See the alumni and professionals supporting our mission.</p>
          </Link>

          <Link to="/join" className="feature-link-card">
            <h3>Join Us</h3>
            <p>Become part of a growing software and technology community.</p>
          </Link>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-box">
          <h2>Build With Us</h2>
          <p>
            CTS is for students who want to grow in software engineering,
            technical interviews, projects, and professional development.
          </p>
          <Link to="/join" className="cta-button">
            Join the Community
          </Link>
        </div>
      </section>
    </div>
  );
}
