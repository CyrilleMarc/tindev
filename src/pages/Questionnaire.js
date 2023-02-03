import React from "react";
import {Link} from 'react-router-dom'
import "../assets/styles/questionnaire.css";

function Questionnaire() {
  return (
    <div>
    <Link to='/'><button>Retour</button></Link>
      <h1>Questionnaire</h1>
    </div>
  );
}

export default Questionnaire;
