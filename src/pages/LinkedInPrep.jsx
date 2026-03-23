import React from "react";

function LinkedInPrep() {
  const prepSections = [
    {
      title: "Profile Basics",
      items: [
        "Use a clean professional headshot",
        "Write a strong headline with your role, school, and goals",
        "Add your location, school, and contact info",
        "Customize your LinkedIn URL",
      ],
    },
    {
      title: "What to Include",
      items: [
        "Add internships, projects, and leadership experience",
        "List technical skills like Java, Python, React, and SQL",
        "Write an About section that explains your goals and interests",
        "Highlight clubs, hackathons, and student organizations",
      ],
    },
    {
      title: "Networking Tips",
      items: [
        "Connect with classmates, alumni, and recruiters",
        "Send short professional messages when reaching out",
        "Follow companies you want to work for",
        "Engage with posts about software, AI, and career growth",
      ],
    },
    {
      title: "CTS Recommendations",
      items: [
        "Show your involvement in The Computer Technology Society",
        "Mention technical workshops, projects, and speaker events",
        "Use your LinkedIn to reflect both technical and leadership growth",
        "Keep your profile updated every semester",
      ],
    },
  ];

  const checklist = [
    "Professional profile photo",
    "Clear headline",
    "Strong About section",
    "Updated experience",
    "Projects section filled out",
    "Technical skills added",
    "Education completed",
    "Custom LinkedIn URL",
    "At least 25 connections",
    "Resume and LinkedIn aligned",
  ];

  return (
    <section className="page-shell linkedin-page">
      <div className="linkedin-hero">
        <p className="linkedin-kicker">The Computer Technology Society @ SDSU</p>
        <h1 className="linkedin-main-title">LinkedIn Prep</h1>
        <p className="linkedin-main-text">
          Build a stronger LinkedIn presence for internships, recruiting, and
          networking. This page helps CTS members present themselves
          professionally and stand out to recruiters, alumni, and employers.
        </p>
      </div>

      <section className="linkedin-top-section">
        <div className="linkedin-highlight-card">
          <div className="linkedin-highlight-top">
            <span className="linkedin-status-dot" />
            <span>Career Readiness</span>
          </div>

          <h2>Why LinkedIn Matters</h2>
          <p>
            Your LinkedIn is more than a social profile. It is your digital
            first impression for recruiters, engineers, alumni, and companies.
            A strong profile can help you get noticed for internships, build
            valuable connections, and show the work you are doing in software
            engineering and technology.
          </p>
        </div>

        <div className="linkedin-checklist-card">
          <h2>Quick Checklist</h2>

          <div className="linkedin-checklist">
            {checklist.map((item) => (
              <div key={item} className="linkedin-check-item">
                <span className="linkedin-check-mark">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="linkedin-sections">
        {prepSections.map((section) => (
          <div key={section.title} className="linkedin-section-card">
            <h3>{section.title}</h3>

            <div className="linkedin-bullet-list">
              {section.items.map((item) => (
                <div key={item} className="linkedin-bullet-item">
                  <span className="linkedin-bullet-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="linkedin-tips-box">
        <h2>CTS LinkedIn Tips</h2>
        <p>
          Keep your LinkedIn aligned with your resume, projects, and goals.
          Highlight internships, technical skills, leadership, and organizations
          like CTS to show both professional growth and initiative. A polished
          profile makes it easier for others to understand who you are and what
          you are working toward.
        </p>
      </section>

      <section className="linkedin-cta-box">
        <h2>Need Help With Your Profile?</h2>
        <p>
          CTS helps students improve their professional presence through resume
          support, LinkedIn feedback, technical growth, and career guidance.
        </p>

        <a
          href="mailto:mhassan2075@sdsu.edu?subject=LinkedIn Prep Help"
          className="cta-button"
        >
          Get LinkedIn Help
        </a>
      </section>
    </section>
  );
}

export default LinkedInPrep;

