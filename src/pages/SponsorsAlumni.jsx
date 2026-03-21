function SponsorsAlumni() {
  const sponsors = [
    {
      name: "Melad Safdari",
      role: "Software Engineer @ Amazon",
      school: "UCLA Alumni",
      image: "/melad.jpg",
      companyLogo: "/amazon.png",
      text: "Supporting CTS through mentorship, career insight, and industry experience.",
      isAlumni: false,
    },
    {
      name: "Jacob Khaliqi",
      role: "Software Engineer @ IBM",
      school: "UCSD Alumni",
      image: "/jacob.jpg",
      companyLogo: "/ibm.png",
      text: "Helping guide students interested in software engineering and career growth.",
      isAlumni: false,
    },
    {
      name: "Rustam Khoshal",
      role: "ERP Systems Engineer @ Hunter",
      school: "SDSU Alumni",
      image: "/rustam.jpg",
      companyLogo: "/hunter.png",
      text: "Supporting the growth of students in software and technology.",
      isAlumni: true,
    },
    {
      name: "Samir Kasem",
      role: "Senior Finance Specialist @ ASML",
      school: "SDSU Alumni",
      image: "/samir.jpg",
      companyLogo: "/asml.png",
      text: "Committed to helping students gain access to technical opportunities.",
      isAlumni: true,
    },
  ];

  const regularSponsors = sponsors.filter((p) => !p.isAlumni);
  const alumniSponsors = sponsors.filter((p) => p.isAlumni);

  return (
    <section className="page exec-page">
      <div className="exec-header">
        <h1 className="exec-main-title">Sponsors & Alumni</h1>
        <p className="exec-main-text">
          The Computer Technology Society is building a long-term community that
          connects students not only with one another, but also with sponsors,
          alumni, and professionals who believe in supporting student growth in
          software, technology, and innovation.
        </p>
        <div className="exec-divider"></div>
      </div>

      <section>
        <div className="exec-section-title-wrap">
          <h2 className="exec-section-title">Sponsors</h2>
          <div className="exec-divider small"></div>
        </div>

        <div className="exec-grid">
          {regularSponsors.map((person) => (
            <div key={person.name} className="exec-member-card">
              <img
                src={person.image}
                alt={person.name}
                className="exec-member-image"
              />
              <h2 className="exec-member-name">{person.name}</h2>

              <div className="exec-role-row">
                <p className="exec-member-role">{person.role}</p>
                <img
                  src={person.companyLogo}
                  alt={`${person.name} company logo`}
                  className="company-logo"
                />
              </div>

              <p className="exec-member-year">Sponsor • {person.school}</p>
              <div className="exec-member-line"></div>
              <p className="exec-member-bio">{person.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="exec-section-title-wrap">
          <h2 className="exec-section-title">Sponsors (Alumni)</h2>
          <div className="exec-divider small"></div>
        </div>

        <div className="exec-grid">
          {alumniSponsors.map((person) => (
            <div key={person.name} className="exec-member-card">
              <img
                src={person.image}
                alt={person.name}
                className="exec-member-image"
              />
              <h2 className="exec-member-name">{person.name}</h2>

              <div className="exec-role-row">
                <p className="exec-member-role">{person.role}</p>
                <img
                  src={person.companyLogo}
                  alt={`${person.name} company logo`}
                  className="company-logo"
                />
              </div>

              <p className="exec-member-year">Sponsor • {person.school}</p>
              <div className="exec-member-line"></div>
              <p className="exec-member-bio">{person.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="exec-section-title-wrap">
          <h2 className="exec-section-title">Future Partnerships</h2>
          <div className="exec-divider small"></div>
        </div>

        <div className="card-grid">
          <div className="glass-card">
            <h2>Future Industry Sponsors</h2>
            <p>
              CTS aims to build relationships with companies, startups, and
              organizations that want to support student growth through speaking
              opportunities, collaboration, mentorship, and sponsorship.
            </p>
          </div>

          <div className="glass-card">
            <h2>Technology & Innovation Partners</h2>
            <p>
              We are interested in connecting with organizations in software,
              AI, and emerging technology that align with our mission of helping
              students grow technically and professionally.
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "56px" }}>
        <div className="exec-section-title-wrap">
          <h2 className="exec-section-title">Alumni Network</h2>
          <div className="exec-divider small"></div>
        </div>

        <div className="card-grid">
          <div className="glass-card">
            <h2>Alumni Network</h2>
            <p>
              CTS hopes to build a strong alumni network of former members and
              SDSU graduates who can share experience, advice, and insight with
              students currently exploring careers in technology.
            </p>
          </div>

          <div className="glass-card">
            <h2>Professional Mentorship</h2>
            <p>
              Through alumni and industry connections, CTS wants to create
              opportunities for mentorship, career guidance, and long-term
              community building beyond campus.
            </p>
          </div>
        </div>
      </section>

      <div className="exec-contact-box" style={{ marginTop: "56px" }}>
        <h2>Join as a Sponsor</h2>
        <p>
          CTS welcomes alumni, mentors, professionals, and organizations that
          want to support students through guidance, collaboration, speaking
          opportunities, and community-building.
        </p>
        <div style={{ marginTop: "24px" }}>
          <a
            className="btn btn-gold"
            href="mailto:mhassan2075@sdsu.edu?subject=Interested in supporting CTS as a sponsor"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
}

export default SponsorsAlumni;



