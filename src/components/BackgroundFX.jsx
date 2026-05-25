const BackgroundFX = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "300px",
          height: "300px",
          background: "#00ffd5",
          filter: "blur(120px)",
          opacity: 0.15,
          top: "-100px",
          left: "-100px",
          zIndex: -1,
          animation: "float1 8s ease-in-out infinite"
        }}
      ></div>

      <div
        style={{
          position: "fixed",
          width: "250px",
          height: "250px",
          background: "#7c4dff",
          filter: "blur(120px)",
          opacity: 0.15,
          bottom: "-100px",
          right: "-100px",
          zIndex: -1,
          animation: "float2 10s ease-in-out infinite"
        }}
      ></div>
    </>
  );
};

export default BackgroundFX;