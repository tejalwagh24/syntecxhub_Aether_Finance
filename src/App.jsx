import { useState } from "react";

import Sidebar from "./components/Sidebar";
import BackgroundFX from "./components/BackgroundFX";
import DashboardCards from "./components/DashboardCards";
import ExpenseForm from "./components/ExpenseForm";
import Transactions from "./components/Transactions";
import ExpenseChart from "./components/ExpenseChart";
import AIInsights from "./components/AIInsights";
import MonthlySummary from "./components/MonthlySummary";

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [expenses, setExpenses] = useState([]);

  // DELETE EXPENSE
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };

  // EDIT EXPENSE (future use)
  const editExpense = (id, updatedData) => {
    setExpenses(
      expenses.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item
      )
    );
  };

  return (
    <>
      {/* Background */}
      <BackgroundFX />

      {/* Sidebar */}
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* MAIN CONTENT */}
      <div
        style={{
          marginLeft: "240px",
          padding: "40px",
          color: "white",
          fontFamily: "Arial",
          minHeight: "100vh"
        }}
      >
        {/* HEADER */}
        <h1 className="neon" style={{ fontSize: "40px" }}>
          AETHER Finance Dashboard
        </h1>

        <p style={{ color: "#aaa", marginBottom: "25px" }}>
          Smart expense tracker with analytics & AI insights
        </p>

        {/* DASHBOARD */}
        {activePage === "dashboard" && (
          <>
            {/* Dashboard Cards */}
            <div className="glass card" style={{ marginBottom: "20px" }}>
              <DashboardCards />
            </div>

            {/* Expense Form */}
            <div className="glass card" style={{ marginBottom: "20px" }}>
              <ExpenseForm
                expenses={expenses}
                setExpenses={setExpenses}
              />
            </div>

            {/* AI Insights */}
            <div className="glass card" style={{ marginBottom: "20px" }}>
              <AIInsights expenses={expenses} />
            </div>

            {/* Chart */}
            <div className="glass card" style={{ marginBottom: "20px" }}>
              <ExpenseChart expenses={expenses} />
            </div>

            {/* 💎 MONTHLY SUMMARY (ADDED HERE) */}
            <div className="glass card">
              <MonthlySummary expenses={expenses} />
            </div>
          </>
        )}

        {/* ANALYTICS */}
        {activePage === "analytics" && (
          <div className="glass card">
            <h2 style={{ color: "#7c4dff" }}>Analytics</h2>
            <ExpenseChart expenses={expenses} />
            <AIInsights expenses={expenses} />
          </div>
        )}

        {/* TRANSACTIONS */}
        {activePage === "transactions" && (
          <Transactions
            expenses={expenses}
            deleteExpense={deleteExpense}
            editExpense={editExpense}
          />
        )}
      </div>
    </>
  );
}

export default App;