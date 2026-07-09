function Tournament() {

  const matches = [
    {
      team1: "India",
      team2: "Australia",
      time: "7:30 PM",
      status: "Upcoming"
    },
    {
      team1: "England",
      team2: "Pakistan",
      time: "Tomorrow",
      status: "Scheduled"
    },
    {
      team1: "Brazil",
      team2: "Argentina",
      time: "Sunday",
      status: "Final"
    }
  ];


  return (
    <div
      style={{
        marginTop: "40px",
        padding: "25px"
      }}
    >

      <h2>🏆 Tournament Operations</h2>


      <h3>Teams Participating</h3>

      <ul>
        <li>🇮🇳 India</li>
        <li>🇦🇺 Australia</li>
        <li>🏴 England</li>
        <li>🇵🇰 Pakistan</li>
      </ul>


      <h3>📅 Match Fixtures</h3>


      {
        matches.map((match, index) => (
          <div
            key={index}
            style={{
              background:"#f1f1f1",
              padding:"15px",
              margin:"10px 0",
              borderRadius:"10px"
            }}
          >

            <h4>
              {match.team1} 🆚 {match.team2}
            </h4>

            <p>
              Time: {match.time}
            </p>

            <p>
              Status: {match.status}
            </p>

          </div>
        ))
      }


    </div>
  );
}


export default Tournament;