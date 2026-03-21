function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
        The Computer Technology Society @ SDSU
      </h1>

      <p style={{ color: "#94a3b8", marginBottom: "30px" }}>
        Co-Founder & Co-President: Meelod Hassan
        <br />
        mhassan2075@sdsu.edu
      </p>

      <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>What We Do</h2>

      <ul style={{ marginBottom: "30px", lineHeight: "1.8" }}>
        <li>Guest speakers from tech companies</li>
        <li>Technical workshops and hands-on projects</li>
        <li>LeetCode and System Design prep</li>
        <li>AI, software, and technology discussions</li>
      </ul>

      <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
        Executive Board
      </h2>

      <p style={{ marginBottom: "20px" }}>
        We are currently recruiting executive members.
      </p>

      <div
        style={{
          padding: "20px",
          background: "#1e293b",
          borderRadius: "10px",
          maxWidth: "400px",
        }}
      >
        <h3>Meelod Hassan</h3>
        <p>Co-Founder &amp; Co-President</p>
        <p>Class of 2027</p>
      </div>
    </div>
  );
}

export default App;

