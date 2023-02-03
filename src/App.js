import "./App.css";
import Home from "./pages/Home.jsx";
import Questionnaire from './pages/Questionnaire'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
