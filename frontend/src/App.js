import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Nav from "./Components/Navbar/Nav";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
