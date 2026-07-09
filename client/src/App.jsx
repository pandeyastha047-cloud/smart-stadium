import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Navbar />

      <div
        style={{
          textAlign: "center",
          marginTop: "60px",
          fontFamily: "Arial",
        }}
      >
        <h1>🏟️ Smart Stadium & Tournament Operations</h1>

        <h2>Welcome to StadiumSense AI</h2>

        <p>Your AI-powered stadium assistant.</p>

        <button
          style={{
            padding: "12px 25px",
            fontSize: "18px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </div>

      <Dashboard />
    </>
  );
}

export default App;