const Header = () => {
  return (
    <header style={{ display: "flex", alignItems: "center", padding: "20px", backgroundColor: "#cab70e", color: "white" }}>
      <img src="/logo.png" alt="Pixell River Logo" style={{ width: "300px", marginRight: "200px" }} />
      <div>
        <h1>Pixell River Employee Directory</h1>
        <p>Welcome to the internal staff directory</p>
      </div>
    </header>
  );
};

export default Header;