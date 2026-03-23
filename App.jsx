import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import ExecBoard from "./pages/ExecBoard";
import SponsorsAlumni from "./pages/SponsorsAlumni";
import Events from "./pages/Events";
import Join from "./pages/Join";
import LinkedInPrep from "./pages/LinkedInPrep";
import LeetCodePrep from "./pages/LeetCodePrep";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <div className="app-shell">
        <header className="site-header">
          <div className="site-header-inner">
            <Link to="/" className="site-logo">
              CTS @ SDSU
            </Link>

            <nav className="site-nav">
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/events">Events</Link>
              <Link to="/linkedin-prep">LinkedIn Prep</Link>
              <Link to="/leetcode-prep">LeetCode Prep</Link>
              <Link to="/exec-board">Exec Board</Link>
              <Link to="/sponsors-alumni">Alumni & Sponsors</Link>
              <Link to="/join" className="nav-cta">
                Join
              </Link>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/events" element={<Events />} />
            <Route path="/exec-board" element={<ExecBoard />} />
            <Route path="/sponsors-alumni" element={<SponsorsAlumni />} />
            <Route path="/linkedin-prep" element={<LinkedInPrep />} />
            <Route path="/leetcode-prep" element={<LeetCodePrep />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;


