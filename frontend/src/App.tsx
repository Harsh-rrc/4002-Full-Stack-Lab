import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Employees from "./pages/Employees";
import Organization from "./pages/Organization";
import { SignIn, SignUp } from "@clerk/react";
import { useAuthMode } from "./auth/AuthContext";

const AuthPage = ({ type }: { type: "sign-in" | "sign-up" }) => {
  const { clerkEnabled } = useAuthMode();

  if (!clerkEnabled) {
    return (
      <div style={{ maxWidth: "500px", margin: "40px auto", padding: "20px", textAlign: "center", border: "1px solid #ddd", borderRadius: "8px", backgroundColor: "#fff8ef" }}>
        <h2 style={{ color: "#ec9214" }}>Clerk is not configured yet</h2>
        <p>Add your real Clerk keys in the frontend and backend environment files to enable authentication.</p>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "30px" }}>
      {type === "sign-in" ? <SignIn routing="path" path="/sign-in" /> : <SignUp routing="path" path="/sign-up" />}
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/employees" replace />} />
        <Route path="employees" element={<Employees />} />
        <Route path="organization" element={<Organization />} />
        <Route path="sign-in/*" element={<AuthPage type="sign-in" />} />
        <Route path="sign-up/*" element={<AuthPage type="sign-up" />} />
      </Route>
    </Routes>
  );
}

export default App;
