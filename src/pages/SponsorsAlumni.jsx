function SponsorsAlumni() {
  const sponsors = [
    {
      name: "Future Industry Sponsors",
      text: "CTS aims to build relationships with companies, startups, and organizations that want to support student growth through speaking opportunities, collaboration, mentorship, and sponsorship."
    },
    {
      name: "Technology & Innovation Partners",
      text: "We are interested in connecting with organizations in software, AI, and emerging technology that align with our mission of helping students grow technically and professionally."
    }
  ];

  const alumni = [
    {
      name: "Alumni Network",
      text: "CTS hopes to build a strong alumni network of former members and SDSU graduates who can share experience, advice, and insight with students currently exploring careers in technology."
    },
    {
      name: "Professional Mentorship",
      text: "Through alumni and industry connections, CTS wants to create opportunities for mentorship, career guidance, and long-term community building beyond campus."
    }
  ];

  return (
    <section className="page">
      <div className="section-header">
        <div className="eyebrow">Sponsors • Alumni • Community</div>
        <h1 className="section-title">Sponsors & Alumni</h1>
        <p className="section-text">
          The Computer Technology Society is building a long-term community that
          connects students not only with one another, but also with sponsors,
          alumni, and professionals who believe in supporting student growth in
          software, technology, and innovation.
        </p>
      </div>

      <div className="sponsors-alumni-layout">
        <section className="sponsors-alumni-block">
          <h2 className="events-block-title">Sponsors</h2>
          <div className="card-grid">
            {sponsors.map((item) => (
              <div key={item.name} className="glass-card">
                <h2>{item.name}</h2>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sponsors-alumni-block">
          <h2 className="events-block-title">Alumni</h2>
          <div className="card-grid">
            {alumni.map((item) => (
              <div key={item.name} className="glass-card">
                <h2>{item.name}</h2>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="sponsors-contact-box">
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

