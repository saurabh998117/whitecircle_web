const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        background: "#ffffff",
        borderTop: "1px solid #e0e4f0",
        marginTop: 40
      }}
    >
      <div
        className="container"
        style={{
          padding: "18px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 13,
          color: "#6b7280"
        }}
      >
        <div>© {year} Whitecircle Group. All rights reserved.</div>
        <div style={{ display: "flex", gap: 16 }}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
