import React from "react";

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
    <div className="sponsor-member-card">
      <div className="sponsor-member-image-wrap">
        <img
          src={person.image}
          alt={person.name}
          className="sponsor-member-image"
        />
      </div>

      <h3 className="sponsor-member-name">{person.name}</h3>

      <div className="sponsor-role-row">
        <p className="sponsor-member-role">{person.role}</p>

        <a
          href={person.companyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="company-logo-wrap"
        >
          <img
            src={person.companyLogo}
            alt={`${person.name} company logo`}
            className="company-logo"
          />
        </a>
      </div>

      <p className="sponsor-member-year">Sponsor • {person.school}</p>

      <div className="sponsor-member-line" />

      <p className="sponsor-member-bio">{person.text}</p>

      <a
        href={person.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="sponsor-card-link"
      >
        View LinkedIn
      </a>
    </div>
  );

  return (
    <section className="page-shell sponsors-page">
      <div className="sponsors-hero">
        <p className="sponsors-kicker">The Computer Technology Society @ SDSU</p>
        <h1 className="sponsors-main-title">Sponsors & Alumni</h1>
        <p className="sponsors-main-text">
          The Computer Technology Society is building a long-term community that
          connects students with sponsors, alumni, and professionals who support
          growth in software, technology, and innovation.
        </p>
      </div>

      <section className="sponsors-section">
        <div className="sponsors-section-title-wrap">
          <h2 className="sponsors-section-title">Sponsors</h2>
        </div>

        <div className="sponsors-grid">
          {regularSponsors.map((person) => (
            <SponsorCard key={person.name} person={person} />
          ))}
        </div>
      </section>

      <section className="sponsors-section">
        <div className="sponsors-section-title-wrap">
          <h2 className="sponsors-section-title">Sponsors (Alumni)</h2>
        </div>

        <div className="sponsors-grid">
          {alumniSponsors.map((person) => (
            <SponsorCard key={person.name} person={person} />
          ))}
        </div>
      </section>

      <div className="sponsor-contact-box">
        <h2>Join as a Sponsor</h2>
        <p>
          CTS welcomes alumni, mentors, professionals, and organizations that
          want to support students through guidance, collaboration, speaking
          opportunities, and community-building.
        </p>

        <div className="sponsor-cta-wrap">
          <a
            className="cta-button"
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


