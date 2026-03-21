function SponsorsAlumni() {
const sponsors = [
  {
    name: "Melad Safdari",
    role: "Sponsor ✶ UCSD Alumni | Software Engineer @ Amazon",
    image: "/melad.jpg",
    text: "Supporting CTS through mentorship, career insight, and industry experience."
  },
  {
    name: "Jacob Khaliqi",
    role: "Sponsor ✶ UCSD Alumni | Software Engineer @ IBM",
    image: "/jacob.jpg",
    text: "Helping guide students interested in software engineering and career growth."
  },
  {
    name: "Rustam Khoshal",
    role: "Sponsor ✶ SDSU Alumni | ERP Systems Engineer @ Hunter",
    image: "/rustam.jpg",
    text: "Supporting the growth of students in software and technology."
  },
  {
    name: "Samir Kasem",
    role: "Sponsor ✶ SDSU Alumni | Senior Finance Specialist @ ASML",
    image: "/samir.jpg",
    text: "Committed to helping students gain access to technical opportunities."
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
           {sponsors.map((person) => (
          <div key={person.name} className="glass-card person-card">
          <img src={person.image} alt={person.name} className="person-img" />
          <h2>{person.name}</h2>
          <p className="person-role">{person.role}</p>
           <p>{person.text}</p>
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

