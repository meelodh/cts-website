import React from "react";

function LeetCodePrep() {
  const topics = [
    "Arrays & Strings",
    "Hash Maps",
    "Two Pointers",
    "Sliding Window",
    "Stacks & Queues",
    "Binary Search",
    "Trees & Graphs",
    "Dynamic Programming",
  ];

  const roadmap = [
    "Start with easy problems (build confidence)",
    "Move to medium problems (interview level)",
    "Learn patterns, not memorization",
    "Re-do problems you get wrong",
    "Practice explaining your solution out loud",
  ];

  return (
    <section className="leetcode-container">
      {/* HERO */}
      <div className="leetcode-header">
        <h1>LeetCode Prep</h1>
        <p>
          Master coding interviews by learning patterns, solving problems
          consistently, and building strong algorithmic thinking.
        </p>
      </div>

      {/* TOPICS */}
      <div className="leetcode-section">
        <h2>Core Topics</h2>

        <div className="leetcode-grid">
          {topics.map((topic) => (
            <div key={topic} className="leetcode-card">
              {topic}
            </div>
          ))}
        </div>
      </div>

      {/* ROADMAP */}
      <div className="leetcode-section">
        <h2>How to Practice</h2>

        <div className="leetcode-list">
          {roadmap.map((step) => (
            <div key={step} className="leetcode-list-item">
              <span>→</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="leetcode-cta">
        <h2>Consistency beats everything</h2>
        <p>
          The goal isn’t to solve everything—it’s to get better every day. Stay
          consistent and the results will follow.
        </p>

        <a
          href="mailto:mhassan2075@sdsu.edu"
          className="leetcode-button"
        >
          Get Help From CTS
        </a>
      </div>
    </section>
  );
}

export default LeetCodePrep;

