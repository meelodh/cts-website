import React from "react";

function ExecBoard() {
  const executiveMembers = [
    {
      name: "Meelod Hassan",
      role: "Co-Founder & Co-President",
      year: "Class of 2027",
      email: "mhassan2075@sdsu.edu",
      image: "/meelodd.jpg",
      bio: [
        "Advanced to final round interviews for Software Engineering Intern @ Amazon & AT&T",
        "Computer Science @ SDSU",
      ],
    },
    {
      name: "Parsa Sedighi",
      role: "Co-Founder & Co-President",
      year: "Class of 2027",
      email: "",
      image: "/parsa.jpg",
      bio: [
        "Incoming SI&T Intern @ Qualcomm",
        "Robotics @ Team Inspiration",
        "Computer Science @ SDSU",
      ],
    },
    {
      name: "Pleiades Leonis",
      role: "Co-Founder & Co-President",
      year: "Class of 2027",
      email: "",
      image: "/pleoais.jpg",
      bio: [
        "Advanced to final interview round for Software Engineering Intern @ Roblox",
        "Computer Science @ SDSU",
      ],
    },
    {
      name: "Elijah Padilla",
      role: "Co-Founder & Co-President",
      year: "Class of 2027",
      email: "",
      image: "/elijah.jpg",
      bio: [
        "Advanced to final interview round for Software Engineering Intern @ T-Mobile",
        "Computer Science @ SDSU",
      ],
    },
  ];

  return (
    <section className="page-shell exec-page">
      <div className="exec-hero">
        <p className="exec-kicker">The Computer Technology Society @ SDSU</p>
        <h1 className="exec-main-title">Executive Board</h1>
        <p className="exec-main-text">
          Meet the founding leadership team behind the Computer Technology
          Society at SDSU. Our executive board is focused on building a strong
          community around software engineering, technical growth, and career
          development.
        </p>
      </div>

      <div className="exec-grid-section">
        <div className="exec-grid">
          {executiveMembers.map((member) => (
            <div key={member.name} className="exec-member-card">
              <div className="exec-member-image-wrap">
                <img
                  src={member.image}
                  alt={member.name}
                  className="exec-member-image"
                />
              </div>

              <h3 className="exec-member-name">{member.name}</h3>
              <p className="exec-member-role">{member.role}</p>
              <p className="exec-member-year">{member.year}</p>

              <div className="exec-member-line" />

              <div className="exec-member-bio">
                {member.bio.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              {member.email && (
                <a href={`mailto:${member.email}`} className="exec-member-email">
                  {member.email}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="exec-contact-box">
        <h2>Get in Touch</h2>
        <p>
          Want to collaborate, join CTS, or learn more about the organization?
          Reach out and connect with our executive team.
        </p>
      </div>
    </section>
  );
}

export default ExecBoard;
