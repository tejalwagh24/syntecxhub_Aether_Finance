const Navbar = ({ setActivePage }) => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0
      }}
    >
      <h2
        style={{
          color: "#00ffd5",
          letterSpacing: "2px"
        }}
      >
        AETHER
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px"
        }}
      >
        <p
          style={{ cursor: "pointer" }}
          onClick={() => setActivePage("dashboard")}
        >
          Dashboard
        </p>

        <p
          style={{ cursor: "pointer" }}
          onClick={() => setActivePage("analytics")}
        >
          Analytics
        </p>

        <p
          style={{ cursor: "pointer" }}
          onClick={() => setActivePage("transactions")}
        >
          Transactions
        </p>
      </div>
    </nav>
  );
};

export default Navbar;