const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" style={{ textAlign: "center", padding: "15px", backgroundColor: "#e8f1fb" }}>
      <p>Copyright Pixell River Financial {year}.</p>
    </footer>
  );
};

export default Footer;