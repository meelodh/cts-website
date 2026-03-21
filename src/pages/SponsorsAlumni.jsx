function SponsorsAlumni() {
  const sponsors = [
    {
      name: "Melad Safdari",
      role: "Software Engineer @ Amazon",
      school: "UCLA Alumni",
      image: "/melad.jpg",
      companyLogo: "/amazon.jpg",
      companyLink: "https://www.amazon.com",
      linkedin: "https://www.linkedin.com/",
      text: "Supporting CTS through mentorship, career insight, and industry experience.",
      isAlumni: false,
    },
    {
      name: "Jacob Khaliqi",
      role: "Software Engineer @ IBM",
      school: "UCSD Alumni",
      image: "/jacob.jpg",
      companyLogo: "/ibm.jpg",
      companyLink: "https://www.ibm.com",
      linkedin: "https://www.linkedin.com/",
      text: "Helping guide students interested in software engineering and career growth.",
      isAlumni: false,
    },
    {
      name: "Rustam Khoshal",
      role: "ERP Systems Engineer @ Hunter",
      school: "SDSU Alumni",
      image: "/rustam.jpg",
      companyLogo: "/hunter.jpg",
      companyLink: "https://www.hunterindustries.com",
      linkedin: "https://www.linkedin.com/",
      text: "Supporting the growth of students in software and technology.",
      isAlumni: true,
    },
    {
      name: "Samir Kasem",
      role: "Senior Finance Specialist @ ASML",
      school: "SDSU Alumni",
      image: "/samir.jpg",
      companyLogo: "/asml.jpg",
      companyLink: "https://www.asml.com",
      linkedin: "https://www.linkedin.com/",
      text: "Committed to helping students gain access to technical opportunities.",
      isAlumni: true,
    },
  ];

  const regularSponsors = sponsors.filter((p) => !p.isAlumni);
  const alumniSponsors = sponsors.filter((p) => p.isAlumni);

  const SponsorCard = ({ person }) => (
    <a
      href={person.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="exec-member-card sponsor-link-card"
    >
      <img
        src={person.image}
        alt={person.name}
        className="exec-member-image"
      />

      <h2 className="exec-member-name">{person.name}</h2>

      <div className="exec-role-row">
        <p className="exec-member-role">{person.role}</p>

        {/* COMPANY LOGO (clickable, but doesn't trigger card click) */}
        <a
          href={person.companyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="company-logo-wrap"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={person.companyLogo}
            alt="company logo"
            className="company-logo"
          />
        </a>
      </div>

      <p className="exec-member-year">
        Sponsor • {person.school}
      </p>

      <div className="exec-member-line"></div>

      <p className="exec-member-bio">{person.text}</p>

      <span className="sponsor-card-link">View LinkedIn</span>
    </a>
  );

  return (
    <section className="page exec-page">
      <div className="exec-header">
        <h1 className="exec-main-title">Sponsors & Alumni</h1>
        <p className="exec-main-text">
          The Computer Technology Society is building a long-term community that
          connects students with sponsors, alumni, and professionals who support
          growth in software, technology, and innovation.
        </p>
        <div className="exec-divider"></div>
      </div>

      {/* Sponsors */}
      <section>
        <div className="exec-section-title-wrap">
          <h2 className="exec-section-title">Sponsors</h2>
          <div className="exec-divider small"></div>
        </div>

        <div className="exec-grid">
          {regularSponsors.map((person) => (
            <SponsorCard key={person.name} person={person} />
          ))}
        </div>
      </section>

      {/* Sponsors Alumni */}
      <section>
        <div className="exec-section-title-wrap">
          <h2 className="exec-section-title">Sponsors (Alumni)</h2>
          <div className="exec-divider small"></div>
        </div>

        <div className="exec-grid">
          {alumniSponsors.map((person) => (
            <SponsorCard key={person.name} person={person} />
          ))}
        </div>
      </section>

      {/* CTA */}
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

