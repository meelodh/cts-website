function SponsorsAlumni() {
  const sponsors = [
    {
      name: "Melad Safdari",
      role: "Software Engineer @ Amazon",
      image: "/melad.jpg",
      text: "Supporting CTS through mentorship, career insight, and industry experience.",
      isAlumni: false,
    },
    {
      name: "Jacob Khaliqi",
      role: "Software Engineer @ IBM",
      image: "/jacob.jpg",
      text: "Helping guide students interested in software engineering and career growth.",
      isAlumni: false,
    },
    {
      name: "Rustam Khoshal",
      role: "ERP Systems Engineer @ Hunter",
      image: "/rustam.jpg",
      text: "Supporting the growth of students in software and technology.",
      isAlumni: true,
    },
    {
      name: "Samir Kasem",
      role: "Senior Finance Specialist @ ASML",
      image: "/samir.jpg",
      text: "Committed to helping students gain access to technical opportunities.",
      isAlumni: true,
    },
  ];

  const regularSponsors = sponsors.filter((person) => !person.isAlumni);
  const alumniSponsors = sponsors.filter((person) => person.isAlumni);

  return (
    <section className="page sponsors-page">
      <div className="sponsors-header">
        <h1 className="sponsors-main-title">Sponsors & Alumni</h1>
        <p className="sponsors-main-text">
          The Computer Technology Society is building a long-term community that
          connects students with sponsors, alumni, and professionals who believe
          in supporting student growth in software, technology, and innovation.
        </p>
        <div className="sponsors-divider"></div>
      </div>

      <section className="sponsors-section">
        <div className="sponsors-section-title-wrap">
          <h2 className="sponsors-section-title">Sponsors</h2>
          <div className="sponsors-divider small"></div>
        </div>

        <div className="sponsors-grid">
          {regularSponsors.map((person) => (
            <div key={person.name} className="sponsors-member-card">
              <img
                src={person.image}
                alt={person.name}
                className="sponsors-member-image"
              />
              <h2 className="sponsors-member-name">{person.name}</h2>
              <p className="sponsors-member-role">{person.role}</p>
              <p className="sponsors-member-year">Sponsor</p>
              <div className="sponsors-member-line"></div>
              <p className="sponsors-member-bio">{person.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sponsors-section">
        <div className="sponsors-section-title-wrap">
          <h2 className="sponsors-section-title">Sponsors (Alumni)</h2>
          <div className="sponsors-divider small"></div>
        </div>

        <div className="sponsors-grid">
          {alumniSponsors.map((person) => (
            <div key={person.name} className="sponsors-member-card">
              <img
                src={person.image}
                alt={person.name}
                className="sponsors-member-image"
              />
              <h2 className="sponsors-member-name">{person.name}</h2>
              <p className="sponsors-member-role">{person.role}</p>
              <p className="sponsors-member-year">Sponsor • Alumni</p>
              <div className="sponsors-member-line"></div>
              <p className="sponsors-member-bio">{person.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="sponsors-contact-box-light">
        <h2>Interested in supporting CTS?</h2>
        <p>
          We welcome opportunities to connect with alumni, mentors, and sponsors
          who want to help students grow through guidance, collaboration, and
          support for the technology community at SDSU.
        </p>
        <a
          className="btn btn-gold"
          href="mailto:mhassan2075@sdsu.edu?subject=Interested in supporting CTS"
        >
          Contact CTS
        </a>
      </div>
    </section>
  );
}

export default SponsorsAlumni;



