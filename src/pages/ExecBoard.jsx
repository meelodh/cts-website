function ExecBoard() {
  const executiveMembers = [
    {
      name: "Meelod Hassan",
      role: "Co-Founder & Co-President",
      year: "Class of 2027",
      email: "mhassan2075@sdsu.edu",
      image: "/meelodd.jpg",
      bio: "| Advanced to final round (onsite) interviews for Software Engineering Intern @ Amazon & AT&T |\n| Developing software projects in Java, Python, C++, and web technologies for over half a decade|\n| Computer Science @ SDSU |"
    },   
    { 
      name: "Parsa Sedighi",
      role: "Co-Founder & Co-President",
      year: "Class of 2027",
      email: "",
      image: "/parsa.jpg",
      bio: "| Incoming SI&T Intern @ Qualcomm |\n| Robotics @ Team Inspiration |\n| Computer Science @ SDSU |"
    }, 
    {
      name: "Pleiades Leonis",
      role: "Co-Founder & Co-President",
      year: "Class of 2027",
      email: "",
      image: "/pleoais.jpg",
      bio: "| Advanced to final interview round for Software Engineering Intern @ Roblox |\n| Computer Science @ SDSU |"
    }, 
    {
      name: "Elijah Padilla",
      role: "Co-Founder & Co-President",
      year: "Class of 2027",
      email: "",
      image: "/elijah.jpg",
      bio: "Advanced to final interview round for Software Engineering Intern @ T-Moblie |\n| Computer Science @ SDSU |"
    }, 
    { 
      name: "",
      role: "Co-Founder & Co-President",
      year: "Class of 2027",
      email: "",
      image: "/",
      bio: "Finance student bringing leadership, strategy, and vision to help establish CTS as a standout student organization."
    }
  ];

  return (
    <section className="page exec-page">
      <div className="exec-header">
        <h1 className="exec-main-title">Executive Board</h1>
        <p className="exec-main-text">
          Meet the founding leadership team of the Computer Technology Society at SDSU.
        </p>
        <div className="exec-divider" />
      </div>

      <div className="exec-section-title-wrap">
        <h2 className="exec-section-title">Leadership Team</h2>
        <div className="exec-divider small" />
      </div>

      <div className="exec-grid">
        {executiveMembers.map((member) => (
          <div key={member.name} className="exec-member-card">
            <img
              src={member.image}
              alt={member.name}
              className="exec-member-image"
            />

            <h3 className="exec-member-name">{member.name}</h3>
            <p className="exec-member-role">{member.role}</p>
            <p className="exec-member-year">{member.year}</p>

            <div className="exec-member-line" />

            <p className="exec-member-bio">{member.bio}</p>
            <p className="exec-member-email">{member.email}</p>
          </div>
        ))}
      </div>

      <div className="exec-contact-box">
        <h2>Get in Touch</h2>
        <p>
          Have questions or want to get involved? Reach out to any of our
          executive board members using the contact information above.
        </p>
      </div>
    </section>
  );
}

export default ExecBoard;


