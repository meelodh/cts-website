import React from "react";

function Events() {
  const upcomingIdeas = [
    "Software engineering guest speaker sessions",
    "Industry Q&A and career insight panels",
    "Hackathon collaborations with other SDSU clubs",
    "Technical workshops and hands-on coding events",
    "Community networking and collaboration meetups",
    "Technology discussions around current industry trends",
  ];

  const speakerHighlights = [
    {
      title: "Industry Guest Speakers",
      text: "CTS plans to host software engineers and professionals from industry who can speak about technical work, career paths, internships, engineering teams, and what students should know when preparing for the field.",
    },
    {
      title: "Career Insight Panels",
      text: "We want members to hear directly from professionals about how they broke into software, what their day-to-day work looks like, and how students can position themselves for growth in tech.",
    },
  ];

  const collaborationHighlights = [
    {
      title: "Hackathon Collaborations",
      text: "CTS is interested in partnering with other SDSU organizations to help create collaborative hackathons and technical events that encourage innovation, teamwork, and hands-on building.",
    },
    {
      title: "Cross-Club Community Building",
      text: "By working with other clubs on campus, CTS wants to help strengthen the broader SDSU technology community through larger events, shared programming, and stronger student connections.",
    },
  ];

  return (
    <section className="page-shell events-page">
      <div className="events-hero">
        <p className="events-kicker">The Computer Technology Society @ SDSU</p>
        <h1 className="events-main-title">Events</h1>
        <p className="events-main-text">
          The Computer Technology Society is focused on creating events that
          bring students closer to the software industry while also building
          stronger collaboration across campus. Through guest speakers,
          technical sessions, and hackathon partnerships with other SDSU clubs,
          CTS is building a community centered around growth, innovation, and
          connection.
        </p>
      </div>

      <section className="events-top-section">
        <div className="events-highlight-card">
          <div className="events-highlight-top">
            <span className="events-status-dot" />
            <span>Events • Speakers • Collaboration</span>
          </div>

          <h2>What CTS Events Focus On</h2>
          <p>
            CTS events are designed to connect students with industry
            professionals, strengthen technical skills, and create a stronger
            culture of collaboration across SDSU. From guest speakers to
            hands-on workshops, the goal is to give students more real-world
            exposure and meaningful opportunities to grow.
          </p>
        </div>

        <div className="events-checklist-card">
          <h2>Upcoming Focus</h2>

          <div className="events-checklist">
            {upcomingIdeas.map((item) => (
              <div key={item} className="events-check-item">
                <span className="events-check-mark">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="events-sections">
        {speakerHighlights.map((item) => (
          <div key={item.title} className="events-section-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}

        {collaborationHighlights.map((item) => (
          <div key={item.title} className="events-section-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="events-tips-box">
        <h2>Why These Events Matter</h2>
        <p>
          Events are one of the best ways for students to gain exposure,
          confidence, and connection. CTS wants to create opportunities that
          help students learn from professionals, build with others, and become
          more prepared for internships, projects, and long-term careers in
          technology.
        </p>
      </section>

      <section className="events-cta-box">
        <h2>Want to Collaborate With CTS?</h2>
        <p>
          CTS welcomes speakers, mentors, alumni, and SDSU organizations that
          want to help create strong technical and professional events for
          students.
        </p>

        <a
          href="mailto:mhassan2075@sdsu.edu?subject=CTS Events Collaboration"
          className="cta-button"
        >
          Get Involved
        </a>
      </section>
    </section>
  );
}

export default Events;




