import "./App.css";
import Home from "./pages/Home.jsx";
import QuestionnaireRecruteur from "./pages/QuestionnaireRecruteur";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questionnaire" element={<QuestionnaireRecruteur />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
