import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import Join from "./pages/Join";
import ExecBoard from "./pages/ExecBoard";
import SponsorsAlumni from "./pages/SponsorsAlumni";




function App() {
  return (
    <div className="site-shell">
      <header className="navbar">
        <div className="nav-inner">
          <NavLink to="/" className="brand">
            <img src="/logo.png" alt="CTS Logo" className="brand-logo" />
            <div>
              <div className="brand-title">CTS</div>
              <div className="brand-subtitle">Computer Technology Society @ SDSU</div>
            </div>
          </NavLink>

          <nav className="nav-links">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/events" className="nav-link">Events</NavLink>
            <NavLink to="/projects" className="nav-link">Projects</NavLink>
            <NavLink to="/join" className="nav-link">Join</NavLink>
            <NavLink to="/exec-board" className="nav-link">Exec Board</NavLink>
            <NavLink to="/sponsors-alumni" className="nav-link">Sponsors & Alumni</NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/join" element={<Join />} />
          <Route path="/exec-board" element={<ExecBoard />} />
          <Route path="/sponsors-alumni" element={<SponsorsAlumni />} /> 
        </Routes>
      </main>
    </div>
  ); 
}

export default App;

