const AIInsights = ({ expenses }) => {
  const total = expenses.reduce(
    (sum, item) =>
      sum + Number(item.amount),
    0
  );

  let insight =
    "Financial activity is stable.";

  if (total > 1000) {
    insight =
      "High spending pattern detected. Consider reducing luxury expenses.";
  }

  if (total > 3000) {
    insight =
      "Critical financial alert: spending velocity is unusually high.";
  }

  return (
    <div
      style={{
        marginTop: "50px",
        background: "rgba(124,77,255,0.08)",
        border: "1px solid rgba(124,77,255,0.2)",
        borderRadius: "25px",
        padding: "30px",
        backdropFilter: "blur(10px)",
        boxShadow:
          "0 0 40px rgba(124,77,255,0.15)"
      }}
    >
      <h2
        style={{
          color: "#7c4dff",
          marginBottom: "20px"
        }}
      >
        AI Financial Insights
      </h2>

      <p
        style={{
          color: "#d4d4d4",
          lineHeight: "1.8",
          fontSize: "17px"
        }}
      >
        {insight}
      </p>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "15px",
          flexWrap: "wrap"
        }}
      >
        <div
          style={{
            padding: "12px 18px",
            borderRadius: "12px",
            background:
              "rgba(255,255,255,0.05)"
          }}
        >
          Total Spending: ${total}
        </div>

        <div
          style={{
            padding: "12px 18px",
            borderRadius: "12px",
            background:
              "rgba(255,255,255,0.05)"
          }}
        >
          Transactions: {expenses.length}
        </div>
      </div>
    </div>
  );
};

export default AIInsights;