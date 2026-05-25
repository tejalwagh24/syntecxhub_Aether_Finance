import { useState, useRef } from "react";

const ExpenseForm = ({ expenses, setExpenses }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const inputRef = useRef();

  const addExpense = () => {
    if (!title || !amount) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category
    };

    setExpenses([newExpense, ...expenses]);

    setTitle("");
    setAmount("");

    inputRef.current?.focus();
  };

  return (
    <div className="glass card">
      <h3 style={{ color: "#00ffd5" }}>Add Expense</h3>

      <input
        ref={inputRef}
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: 10, width: "100%", marginBottom: 10 }}
      />

      <input
        value={amount}
        type="number"
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
        style={{ padding: 10, width: "100%", marginBottom: 10 }}
      />

      {/* CATEGORY SELECT */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: 10, width: "100%", marginBottom: 10 }}
      >
        <option>Food</option>
        <option>Travel</option>
        <option>Bills</option>
        <option>Shopping</option>
      </select>

      <button
        onClick={addExpense}
        style={{
          padding: "10px 15px",
          background: "#00ffd5",
          border: "none",
          fontWeight: "bold",
          width: "100%"
        }}
      >
        Add Expense
      </button>
    </div>
  );
};

export default ExpenseForm;