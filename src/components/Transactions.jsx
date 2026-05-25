const categoryColor = {
  Food: "#ff4d4d",
  Travel: "#4da6ff",
  Bills: "#ffd24d",
  Shopping: "#b84dff"
};

const Transactions = ({ expenses = [], deleteExpense }) => {
  return (
    <div className="glass card">
      <h2 style={{ color: "#ff4ecd" }}>Transactions</h2>

      {expenses.length === 0 ? (
        <p style={{ color: "#aaa" }}>No transactions yet</p>
      ) : (
        expenses.map((e) => (
          <div
            key={e.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 12,
              marginBottom: 10,
              borderBottom: "1px solid rgba(255,255,255,0.1)"
            }}
          >
            {/* LEFT SIDE */}
            <div>
              <div>{e.title}</div>
              <span
                style={{
                  fontSize: "12px",
                  color: categoryColor[e.category]
                }}
              >
                {e.category}
              </span>
            </div>

            {/* RIGHT SIDE */}
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <div style={{ color: "#00ffd5" }}>
                ₹{e.amount}
              </div>

              {/* DELETE BUTTON */}
              <button
                onClick={() => deleteExpense(e.id)}
                style={{
                  background: "red",
                  border: "none",
                  color: "white",
                  padding: "5px 10px",
                  cursor: "pointer"
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Transactions;