import React from "react";

function LeetCodePrep() {
  const prepSections = [
    {
      title: "Core Topics",
      items: [
        "Arrays and Strings",
        "Hash Maps and Sets",
        "Linked Lists",
        "Stacks and Queues",
        "Trees and Binary Search Trees",
        "Binary Search",
        "Recursion and Backtracking",
        "Dynamic Programming",
      ],
    },
    {
      title: "Interview Patterns",
      items: [
        "Two Pointers",
        "Sliding Window",
        "Fast and Slow Pointers",
        "Merge Intervals",
        "Prefix Sums",
        "Depth-First Search",
        "Breadth-First Search",
        "Heap / Priority Queue",
      ],
    },
    {
      title: "How to Practice",
      items: [
        "Start with easy problems, then move to medium",
        "Focus on pattern recognition instead of memorizing answers",
        "Time yourself on medium problems",
        "Review mistakes and re-solve missed questions",
        "Explain your solution out loud",
        "Write clean code and analyze time complexity",
      ],
    },
    {
      title: "CTS Recommendations",
      items: [
        "Practice consistently each week",
        "Track your strongest and weakest topics",
        "Do mock interview-style problem solving",
        "Prepare to explain brute force and optimized solutions",
        "Use LeetCode prep to support internship recruiting",
        "Pair technical prep with strong resume and LinkedIn work",
      ],
    },
  ];

  const checklist = [
    "Understand arrays and strings",
    "Know common problem patterns",
    "Practice medium-level questions",
    "Review time and space complexity",
    "Re-do missed problems",
    "Practice writing clean code",
    "Explain your solution clearly",
    "Stay consistent every week",
  ];

  return (
    <section className="page-shell leetcode-page">
      <div className="leetcode-hero">
        <p className="leetcode-kicker">The Computer Technology Society @ SDSU</p>
        <h1 className="leetcode-main-title">LeetCode Prep</h1>
        <p className="leetcode-main-text">
          Prepare for technical interviews by building strong problem-solving
          skills, recognizing common coding patterns, and practicing the kinds
          of questions used in software engineering interviews.
        </p>
      </div>

      <section className="leetcode-top-section">
        <div className="leetcode-highlight-card">
          <div className="leetcode-highlight-top">
            <span className="leetcode-status-dot" />
            <span>Technical Interview Readiness</span>
          </div>

          <h2>Why LeetCode Matters</h2>
          <p>
            LeetCode helps students prepare for coding interviews by improving
            algorithmic thinking, problem-solving speed, and pattern
            recognition. For many software engineering internships and full-time
            roles, technical interviews are a major part of the recruiting
            process, and consistent practice builds confidence.
          </p>
        </div>

        <div className="leetcode-checklist-card">
          <h2>Quick Checklist</h2>

          <div className="leetcode-checklist">
            {checklist.map((item) => (
              <div key={item} className="leetcode-check-item">
                <span className="leetcode-check-mark">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="leetcode-sections">
        {prepSections.map((section) => (
          <div key={section.title} className="leetcode-section-card">
            <h3>{section.title}</h3>

            <div className="leetcode-bullet-list">
              {section.items.map((item) => (
                <div key={item} className="leetcode-bullet-item">
                  <span className="leetcode-bullet-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="leetcode-tips-box">
        <h2>CTS LeetCode Tips</h2>
        <p>
          Focus on understanding problem patterns rather than memorizing
          specific answers. Start with a clear brute-force approach, then work
          toward a cleaner and more optimized solution. Strong interview prep
          comes from repetition, reflection, and being able to explain your
          thinking clearly.
        </p>
      </section>

      <section className="leetcode-cta-box">
        <h2>Want Help With Technical Prep?</h2>
        <p>
          CTS supports students through technical interview prep, LeetCode
          practice, project building, and professional development.
        </p>

        <a
          href="mailto:mhassan2075@sdsu.edu?subject=LeetCode Prep Help"
          className="cta-button"
        >
          Get LeetCode Help
        </a>
      </section>
    </section>
  );
}

export default LeetCodePrep;

