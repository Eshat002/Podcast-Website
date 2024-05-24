import './App.css';

import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import LandingPage from './Components/LandingPage';


function App() {
  return (

    <Router>
      <Navbar />
      <Routes>

        <Route exact path="/" element={<LandingPage />} />

      </Routes>

    </Router >
  );
}

export default App;

