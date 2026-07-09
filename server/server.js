const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("🏟️ StadiumSense AI Backend Running");
});


// Stadium data API
app.get("/api/stadium", (req, res) => {

  res.json({
    crowd: "82% Occupancy",
    security: "Normal",
    parking: "Available",
    nextMatch: "India vs Australia"
  });

});


// Ticket API
app.get("/api/tickets", (req, res) => {

  res.json({
    availableTickets: 12500,
    qrVerification: "Active"
  });

});


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});