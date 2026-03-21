function Projects() {
  const projects = [
    {
      title: "Technical Workshops",
      text: "Hands-on sessions where members learn practical skills in software, development tools, and engineering workflows."
    },
    {
      title: "Collaborative Projects",
      text: "Student-led builds that let members work together, gain experience, and strengthen their portfolios."
    },
    {
      title: "Interview Prep",
      text: "LeetCode practice, system design discussions, and peer preparation for internships and full-time roles."
    },
    {
      title: "AI + Emerging Tech",
      text: "Discussions and events focused on artificial intelligence, current industry trends, and future-facing tools."
    }
  ];

  return (
    <section className="page">
      <div className="section-header">
        <div className="eyebrow">Projects & Programming</div>
        <h1 className="section-title">What CTS is building</h1>
        <p className="section-text">
          CTS is centered around real technical growth. Our programming is designed to help students
          gain skills, build projects, and stay engaged with the broader world of technology.
        </p>
      </div>

      <div className="card-grid">
        {projects.map((project) => (
          <div key={project.title} className="glass-card">
            <h2>{project.title}</h2>
            <p>{project.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

