import React from "react";

function Projects() {
  const projectTracks = [
    {
      title: "Full-Stack Projects",
      text: "CTS encourages members to build full-stack projects that combine frontend, backend, databases, APIs, authentication, and deployment. These projects help students strengthen practical development skills while building portfolio-ready work for internships and recruiting.",
    },
    {
      title: "Machine Learning Projects",
      text: "CTS also supports machine learning projects that explore data analysis, model building, experimentation, and applied AI concepts. These projects give students exposure to a fast-growing area of technology while strengthening both technical and mathematical thinking.",
    },
    {
      title: "Collaborative Team Projects",
      text: "Students can work with others on larger projects that encourage teamwork, version control, communication, and real-world development practices. Collaborative projects help members build both technical ability and professional readiness.",
    },
    {
      title: "Portfolio Development",
      text: "A strong project portfolio helps students stand out. CTS wants members to leave with projects they can proudly show on GitHub, LinkedIn, resumes, and internship applications.",
    },
  ];

  const projectIdeas = [
    "Full-stack web apps with React, Node.js, and databases",
    "Machine learning models for prediction, classification, or analytics",
    "Resume-worthy portfolio projects for internships",
    "Group projects that simulate real engineering teamwork",
    "Projects that can be demoed at workshops or events",
    "Hands-on technical work that supports career growth",
  ];

  const projectGoals = [
    {
      title: "Build Real Technical Experience",
      text: "Projects help students move beyond theory and into real implementation. CTS wants members to gain confidence by building systems, solving problems, and shipping work they can talk about in interviews.",
    },
    {
      title: "Learn By Doing",
      text: "Whether through full-stack development or machine learning, project work gives students a chance to apply classroom knowledge in a practical way and better understand how concepts connect in real workflows.",
    },
  ];

  return (
    <section className="page-shell projects-page">
      <div className="projects-hero">
        <p className="projects-kicker">The Computer Technology Society @ SDSU</p>
        <h1 className="projects-main-title">Projects</h1>
        <p className="projects-main-text">
          CTS supports students through hands-on project building in software,
          full-stack development, and machine learning. The goal is to help
          students create meaningful technical work, strengthen their skills,
          and build projects that stand out on resumes, LinkedIn, and GitHub.
        </p>
      </div>

      <section className="projects-top-section">
        <div className="projects-highlight-card">
          <div className="projects-highlight-top">
            <span className="projects-status-dot" />
            <span>Build • Learn • Ship</span>
          </div>

          <h2>What CTS Projects Focus On</h2>
          <p>
            CTS wants students to build projects that reflect real technical
            growth. That includes full-stack applications, machine learning
            work, collaborative engineering projects, and portfolio pieces that
            help members become stronger candidates for internships and future
            opportunities.
          </p>
        </div>

        <div className="projects-checklist-card">
          <h2>Project Areas</h2>

          <div className="projects-checklist">
            {projectIdeas.map((item) => (
              <div key={item} className="projects-check-item">
                <span className="projects-check-mark">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-sections">
        {projectTracks.map((item) => (
          <div key={item.title} className="projects-section-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="projects-goals-section">
        {projectGoals.map((item) => (
          <div key={item.title} className="projects-goal-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="projects-cta-box">
        <h2>Want to Build With CTS?</h2>
        <p>
          CTS welcomes students who want to work on full-stack software
          projects, machine learning ideas, and technical portfolio work in a
          strong collaborative environment.
        </p>

        <a
          href="mailto:mhassan2075@sdsu.edu?subject=Interested in CTS Projects"
          className="cta-button"
        >
          Join a Project
        </a>
      </section>
    </section>
  );
}

export default Projects;

