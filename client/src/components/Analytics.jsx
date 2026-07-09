function Analytics() {

  const data = [
    {
      title: "👥 Current Crowd",
      value: "15,000"
    },
    {
      title: "🎟️ Tickets Sold",
      value: "12,500"
    },
    {
      title: "🚨 Alerts Today",
      value: "3"
    },
    {
      title: "📈 Stadium Efficiency",
      value: "92%"
    }
  ];


  return (
    <div
      style={{
        marginTop: "40px",
        padding: "25px"
      }}
    >

      <h2>📊 Live Stadium Analytics</h2>


      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(4, 1fr)",
          gap:"15px"
        }}
      >

        {
          data.map((item, index) => (

            <div
              key={index}
              style={{
                padding:"20px",
                background:"#f1f1f1",
                borderRadius:"10px",
                textAlign:"center"
              }}
            >

              <h3>{item.title}</h3>
              <p>{item.value}</p>

            </div>

          ))
        }

      </div>


    </div>
  );
}


export default Analytics;