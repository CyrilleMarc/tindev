import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/questionnaire.css";

function QuestionnaireHeader(props) {
  return (
    <div className="questionnaireHeader">
      <Link to="/" type="button" className="questionnaireButton">Retour
      </Link>
      <h1>Questionnaire {props.title}</h1>
    </div>
  );
}

export default QuestionnaireHeader;
