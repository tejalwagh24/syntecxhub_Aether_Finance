const MonthlySummary = ({ expenses }) => {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  const categoryTotals = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + e.amount;
    return acc;
  }, {});

  const topCategory = Object.keys(categoryTotals).reduce(
    (a, b) =>
      categoryTotals[a] > categoryTotals[b] ? a : b,
    "None"
  );

  return (
    <div className="glass card">
      <h2 style={{ color: "#00ffd5" }}>Monthly Summary</h2>

      <div style={{ marginTop: 15 }}>
        <p>💰 Total Spent: ₹{total}</p>

        <p>🔥 Top Category: {topCategory}</p>

        <div style={{ marginTop: 15 }}>
          <h4 style={{ color: "#ff4ecd" }}>Category Breakdown</h4>

          {Object.keys(categoryTotals).map((cat) => (
            <div
              key={cat}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 8
              }}
            >
              <span>{cat}</span>
              <span style={{ color: "#00ffd5" }}>
                ₹{categoryTotals[cat]}
              </span>
            </div>
          ))}
        </div>

        {/* AI STYLE INSIGHT */}
        <div
          style={{
            marginTop: 20,
            padding: 10,
            border: "1px solid rgba(0,255,213,0.2)",
            borderRadius: 10,
            background: "rgba(0,255,213,0.05)"
          }}
        >
          <p style={{ color: "#00ffd5" }}>
            💡 Insight: You spend most on{" "}
            <b>{topCategory}</b>. Try reducing it to save more money.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MonthlySummary;