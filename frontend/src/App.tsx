import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Employees from "./pages/Employees";
import Organization from "./pages/Organization";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/employees" />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/organization" element={<Organization />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;