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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "30px",
        }}
      >
        <img
          src="/logo.png"
          alt="CTS Logo"
          style={{
            height: "70px",
            width: "70px",
            objectFit: "contain",
            borderRadius: "10px",
          }}
        />

        <div>
          <h1 style={{ fontSize: "42px", margin: 0 }}>
            The Computer Technology Society @ SDSU
          </h1>
          <p style={{ color: "#94a3b8", margin: "8px 0 0 0" }}>
            Co-Founder &amp; Co-President: Meelod Hassan
            <br />
            mhassan2075@sdsu.edu
          </p>
        </div>
      </div>

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