import Header from "./components/header";
import Footer from "./components/Footer";
import Department from "./components/Department";
import { departments } from "./data/departments";

const App = () => {
  return (
    <>
      <Header />

      <main style={{ padding: "20px" }}>
        {departments.map((dept, index) => (
          <Department key={index} department={dept} />
        ))}
      </main>

      <Footer />
    </>
  );
};

export default App;