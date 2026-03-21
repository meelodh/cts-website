function Events() {
  const upcomingIdeas = [
    "Software engineering guest speaker sessions",
    "Industry Q&A and career insight panels",
    "Hackathon collaborations with other SDSU clubs",
    "Technical workshops and hands-on coding events",
    "Community networking and collaboration meetups",
    "Technology discussions around current industry trends"
  ];

  const speakerHighlights = [
    {
      title: "Industry Guest Speakers",
      text: "CTS plans to host software engineers and professionals from industry who can speak about technical work, career paths, internships, engineering teams, and what students should know when preparing for the field."
    },
    {
      title: "Career Insight Panels",
      text: "We want members to hear directly from professionals about how they broke into software, what their day-to-day work looks like, and how students can position themselves for growth in tech."
    }
  ];

  const collaborationHighlights = [
    {
      title: "Hackathon Collaborations",
      text: "CTS is interested in partnering with other SDSU organizations to help create collaborative hackathons and technical events that encourage innovation, teamwork, and hands-on building."
    },
    {
      title: "Cross-Club Community Building",
      text: "By working with other clubs on campus, CTS wants to help strengthen the broader SDSU technology community through larger events, shared programming, and stronger student connections."
    }
  ];

  return (
    <section className="page">
      <div className="section-header">
        <div className="eyebrow">Events • Speakers • Collaboration</div>
        <h1 className="section-title">Events</h1>
        <p className="section-text">
          The Computer Technology Society is focused on creating events that bring
          students closer to the software industry while also building stronger
          collaboration across campus. Through guest speakers, technical sessions,
          and hackathon partnerships with other SDSU clubs, CTS is building a
          community centered around growth, innovation, and connection.
        </p>
      </div>

      <div className="events-layout">
        <div className="events-main">
          <section className="events-block">
            <h2 className="events-block-title">Software Engineering Industry Speakers</h2>
            <div className="card-grid">
              {speakerHighlights.map((item) => (
                <div key={item.title} className="glass-card">
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="events-block">
            <h2 className="events-block-title">Hackathons & SDSU Collaborations</h2>
            <div className="card-grid">
              {collaborationHighlights.map((item) => (
                <div key={item.title} className="glass-card">
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="events-sidebar">
          <div className="events-side-card">
            <div className="events-side-eyebrow">Upcoming Focus</div>
            <h3>Event Ideas</h3>
            <ul className="events-list">
              {upcomingIdeas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Events;



