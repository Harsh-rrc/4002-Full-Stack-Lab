import { Link } from "react-router-dom";

const Header = () => {
  console.log("Header component rendering");
  return (
    <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px", backgroundColor: "#ec9214", color: "white", flexWrap: "wrap" }}>
      <div style={{ display: "flex", alignItems: "center", flex: "1" }}>
        <img src="/logo.png" alt="Pixell River Logo" style={{ width: "200px", marginRight: "20px" }} />
        <div>
          <h1 style={{ fontSize: "2em", margin: "0" }}>Pixell River Employee Directory</h1>
          <p style={{ margin: "5px 0 0 0" }}>Welcome to the internal staff directory</p>
        </div>
      </div>

      <nav style={{ marginLeft: "20px" }}>
        <Link to="/employees" style={{ color: "white", textDecoration: "none", marginRight: "15px" }}>Employees</Link>
        <Link to="/organization" style={{ color: "white", textDecoration: "none" }}>Organization</Link>
      </nav>
    </header>
  );
};

export default Header;