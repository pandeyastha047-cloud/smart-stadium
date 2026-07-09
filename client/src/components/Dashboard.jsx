import { useEffect, useState } from "react";
import { getStadiumData, getTickets } from "../services/api";

import AIChat from "./AIChat";
import Tournament from "./Tournament";
import Emergency from "./Emergency";
import Tickets from "./Tickets";
import Analytics from "./Analytics";
import Prediction from "./Prediction";


function Dashboard() {

  const [stadium, setStadium] = useState({});
  const [ticketData, setTicketData] = useState({});


  useEffect(() => {

    getStadiumData()
      .then(data => setStadium(data))
      .catch(error => console.log(error));


    getTickets()
      .then(data => setTicketData(data))
      .catch(error => console.log(error));

  }, []);



  return (
    <div style={{ padding: "40px" }}>

      <h2>🏟️ Stadium Operations Dashboard</h2>


      {/* Dashboard Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "30px"
        }}
      >

        <Card
          title="👥 Crowd Monitoring"
          value={stadium.crowd || "Loading..."}
        />

        <Card
          title="🎟️ Tickets Available"
          value={ticketData.availableTickets || "Loading..."}
        />

        <Card
          title="🛡️ Security Status"
          value={stadium.security || "Loading..."}
        />

        <Card
          title="🏆 Next Match"
          value={stadium.nextMatch || "Loading..."}
        />

        <Card
          title="🚗 Parking Status"
          value={stadium.parking || "Loading..."}
        />

        <Card
          title="🤖 AI System"
          value="Active"
        />

      </div>


      {/* AI Prediction */}
      <Prediction />


      {/* Analytics */}
      <Analytics />


      {/* AI Assistant */}
      <AIChat />


      {/* Tournament */}
      <Tournament />


      {/* Emergency */}
      <Emergency />


      {/* Tickets */}
      <Tickets />


    </div>
  );
}



function Card({ title, value }) {

  return (
    <div
      style={{
        padding:"25px",
        borderRadius:"12px",
        background:"#f1f1f1",
        textAlign:"center"
      }}
    >

      <h3>{title}</h3>
      <p>{value}</p>

    </div>
  );

}


export default Dashboard;