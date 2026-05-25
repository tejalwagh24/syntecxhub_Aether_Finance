const Analytics = () => {
  return (
    <div
      style={{
        marginTop: "50px"
      }}
    >
      <h2
        style={{
          color: "#7c4dff",
          marginBottom: "20px"
        }}
      >
        Financial Analytics
      </h2>

      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          padding: "30px",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.1)"
        }}
      >
        <p>Total Spending Trend: +18%</p>
        <br />
        <p>Most Active Category: Food & Dining</p>
        <br />
        <p>AI Prediction: Savings may increase next month.</p>
      </div>
    </div>
  );
};

export default Analytics;