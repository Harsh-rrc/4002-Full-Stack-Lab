import { Link, Outlet } from "react-router-dom";
import {
  AuthSignedIn,
  AuthSignedOut,
  AuthUserMenu,
  useAuthMode,
} from "../auth/AuthContext";

const navLinkStyle = {
  color: "#ec9214",
  textDecoration: "none",
  fontWeight: "bold",
};

const buttonStyle = {
  padding: "10px 18px",
  backgroundColor: "#ec9214",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  textDecoration: "none",
  display: "inline-block",
};

const Layout = () => {
  const { clerkEnabled } = useAuthMode();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      <header style={{ padding: "20px", textAlign: "center" }}>
        <img src="/logo.png" alt="Pixell River Logo" style={{ width: "120px", marginBottom: "10px" }} />
        <h1 style={{ color: "#ec9214", margin: "0 0 10px 0" }}>Pixell River Employee Directory</h1>
        <p style={{ margin: "0 0 20px 0", color: "#555" }}>Welcome to the internal staff directory</p>

        <nav style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
          <Link to="/employees" style={navLinkStyle}>Employees</Link>
          <Link to="/organization" style={navLinkStyle}>Organization</Link>
        </nav>

        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "10px", alignItems: "center" }}>
          <AuthSignedOut>
            <Link to="/sign-in" style={buttonStyle}>Sign In</Link>
            <Link to="/sign-up" style={buttonStyle}>Sign Up</Link>
          </AuthSignedOut>

          <AuthSignedIn>
            <AuthUserMenu />
          </AuthSignedIn>
        </div>

        {!clerkEnabled && (
          <p style={{ color: "#777", fontSize: "14px", marginTop: "10px" }}>
            Clerk is not configured yet. Add your real Clerk keys to enable sign in and sign out.
          </p>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer style={{ textAlign: "center", padding: "20px", color: "#666" }}>
        Copyright Pixell River Financial 2026.
      </footer>
    </div>
  );
};

export default Layout;
