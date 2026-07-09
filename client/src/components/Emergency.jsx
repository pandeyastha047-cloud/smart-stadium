import { useState } from "react";

function Emergency() {

  const [alert, setAlert] = useState("No Active Alerts");


  const triggerAlert = () => {
    setAlert("🚨 Emergency Alert: Security team has been notified!");
  };


  const clearAlert = () => {
    setAlert("✅ All systems normal");
  };


  return (
    <div
      style={{
        marginTop: "40px",
        padding: "25px",
        background: "#f5f5f5",
        borderRadius: "12px"
      }}
    >

      <h2>🚨 Emergency Alert System</h2>

      <p>{alert}</p>


      <button
        onClick={triggerAlert}
        style={{
          padding: "10px 20px",
          marginRight: "10px",
          cursor: "pointer"
        }}
      >
        Trigger Alert
      </button>


      <button
        onClick={clearAlert}
        style={{
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Clear Alert
      </button>


    </div>
  );
}


export default Emergency;