import "./App.css";
import Home from "./pages/Home.jsx";
import QuestionnaireRecruteur from "./pages/QuestionnaireRecruteur";
import QuestionnaireDeveloppeur from "./pages/QuestionnaireDeveloppeur";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questionnaireRecruteur" element={<QuestionnaireRecruteur />} />
          <Route path="/questionnaireDeveloppeur" element={<QuestionnaireDeveloppeur />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
