import { useState } from "react";

function Tickets() {

  const [tickets, setTickets] = useState(12500);


  const bookTicket = () => {
    setTickets(tickets + 1);
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

      <h2>🎟️ Smart Ticket Management</h2>

      <p>
        Available Tickets: {tickets}
      </p>


      <p>
        QR Verification: ✅ Active
      </p>


      <button
        onClick={bookTicket}
        style={{
          padding: "10px 20px",
          cursor:"pointer"
        }}
      >
        Book Ticket
      </button>


    </div>
  );
}


export default Tickets;