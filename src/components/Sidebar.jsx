import { useState } from "react";

const Sidebar = ({ activePage, setActivePage }) => {
  const menu = [
    { name: "Dashboard", key: "dashboard", icon: "📊" },
    { name: "Analytics", key: "analytics", icon: "📈" },
    { name: "Transactions", key: "transactions", icon: "💰" }
  ];

  return (
    <div
      style={{
        width: "240px",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        padding: "20px",
        background: "rgba(255,255,255,0.04)",
        borderRight: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(18px)",
        color: "white"
      }}
    >
      {/* LOGO */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#00ffd5", margin: 0 }}>
          AETHER
        </h2>
        <p style={{ fontSize: "12px", color: "#888" }}>
          Finance OS v1.0
        </p>
      </div>

      {/* MENU */}
      <div>
        {menu.map((item) => (
          <div
            key={item.key}
            onClick={() => setActivePage(item.key)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 14px",
              marginBottom: "10px",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "0.2s",
              background:
                activePage === item.key
                  ? "rgba(0,255,213,0.15)"
                  : "transparent",
              border:
                activePage === item.key
                  ? "1px solid rgba(0,255,213,0.3)"
                  : "1px solid transparent",
              color:
                activePage === item.key ? "#00ffd5" : "#fff",
              boxShadow:
                activePage === item.key
                  ? "0 0 15px rgba(0,255,213,0.2)"
                  : "none"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <span style={{ fontSize: "18px" }}>
              {item.icon}
            </span>

            <span style={{ fontSize: "14px", fontWeight: 500 }}>
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;