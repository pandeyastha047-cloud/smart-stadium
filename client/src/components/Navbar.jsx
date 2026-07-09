function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#1e40af",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>🏟️ StadiumSense AI</h2>

      <div>
        <button>Home</button>
        <button>Schedule</button>
        <button>Parking</button>
        <button>Food</button>
        <button>AI Assistant</button>
      </div>
    </nav>
  );
}

export default Navbar;