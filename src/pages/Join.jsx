import React from "react";

function Join() {
  const reasonsToJoin = [
    "Connect with students interested in software engineering and technology",
    "Attend workshops, speaker sessions, and technical events",
    "Build your professional network with peers, alumni, and industry supporters",
    "Strengthen your resume through projects, leadership, and community involvement",
    "Prepare for internships through technical and career-focused resources",
    "Be part of a growing student-led tech community at SDSU",
  ];

  const joinSteps = [
    {
      title: "Get Connected",
      text: "Reach out to CTS and express your interest in joining the organization.",
    },
    {
      title: "Attend Events",
      text: "Come to meetings, workshops, guest speaker events, and community sessions.",
    },
    {
      title: "Get Involved",
      text: "Participate in projects, technical prep, collaboration, and club activities.",
    },
    {
      title: "Grow With the Community",
      text: "Use CTS as a place to develop your technical skills, network, and confidence.",
    },
  ];

  return (
    <section className="page-shell join-page">
      <div className="join-hero">
        <p className="join-kicker">The Computer Technology Society @ SDSU</p>
        <h1 className="join-main-title">Join CTS</h1>
        <p className="join-main-text">
          Become part of a student-led community focused on software
          engineering, technical growth, career development, and building
          stronger connections across SDSU.
        </p>
      </div>

      <section className="join-top-section">
        <div className="join-highlight-card">
          <div className="join-highlight-top">
            <span className="join-status-dot" />
            <span>Student Community • Technical Growth • Career Development</span>
          </div>

          <h2>Why Join CTS</h2>
          <p>
            CTS is designed for students who want to grow in software
            engineering, meet like-minded peers, learn from professionals, and
            build stronger career readiness. Whether you are just getting
            started or already preparing for internships, CTS gives you a place
            to keep improving.
          </p>
        </div>

        <div className="join-checklist-card">
          <h2>What You’ll Gain</h2>

          <div className="join-checklist">
            {reasonsToJoin.map((item) => (
              <div key={item} className="join-check-item">
                <span className="join-check-mark">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="join-sections">
        {joinSteps.map((step) => (
          <div key={step.title} className="join-section-card">
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </section>

      <section className="join-tips-box">
        <h2>Who Should Join</h2>
        <p>
          CTS is for students interested in software engineering, technical
          interviews, projects, innovation, networking, and long-term career
          growth in technology. If you want to build skills, connect with
          others, and be part of a serious student tech community, CTS is for
          you.
        </p>
      </section>

      <section className="join-cta-box">
        <h2>Ready to Join?</h2>
        <p>
          Reach out to learn more about becoming a member of The Computer
          Technology Society at SDSU.
        </p>

        <a
          href="mailto:mhassan2075@sdsu.edu?subject=Interested in joining CTS"
          className="cta-button"
        >
          Join CTS
        </a>
      </section>
    </section>
  );
}

export default Join;

