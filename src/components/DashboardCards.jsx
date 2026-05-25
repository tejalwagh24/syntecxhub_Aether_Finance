const cards = [
  {
    title: "Capital Outflow",
    amount: "$12,450",
    color: "#00ffd5"
  },
  {
    title: "AI Savings Prediction",
    amount: "$4,820",
    color: "#7c4dff"
  },
  {
    title: "Monthly Growth",
    amount: "+18%",
    color: "#ff4ecd"
  }
];

const DashboardCards = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: "25px",
        marginTop: "50px"
      }}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "20px",
            padding: "30px",
            backdropFilter: "blur(10px)",
            boxShadow: `0 0 30px ${card.color}30`,
            transition: "0.3s",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              "translateY(-10px)";

            e.currentTarget.style.boxShadow =
              `0 0 60px ${card.color}`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              "translateY(0px)";

            e.currentTarget.style.boxShadow =
              `0 0 30px ${card.color}30`;
          }}
        >
          <h3
            style={{
              color: "#b5b5b5",
              marginBottom: "15px"
            }}
          >
            {card.title}
          </h3>

          <h1
            style={{
              color: card.color,
              fontSize: "38px"
            }}
          >
            {card.amount}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;