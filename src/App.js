import "./App.css";
import Home from "./pages/Home.jsx";
import HomePage from "./pages/HomePage.js";
import QuestionnaireRecruteur from "./pages/QuestionnaireRecruteur";
import QuestionnaireDeveloppeur from "./pages/QuestionnaireDeveloppeur";
import EditUser from "./pages/EditUser";
import UsersList from "./pages/UsersList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/questionnaireRecruteur"
            element={<QuestionnaireRecruteur />}
          />
          <Route
            path="/questionnaireDeveloppeur"
            element={<QuestionnaireDeveloppeur />}
          />
          <Route path="/edit" element={<UsersList />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
