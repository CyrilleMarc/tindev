import React from "react";
import QuestionnaireHeader from "../components/QuestionnaireHeader";
import QuestionsCm from "../components/QuestionsCm";

function QuestionnaireRecruteur() {
  return (
    <div>
      <div>
        <QuestionnaireHeader title={"recruteurs"} />
      </div>
      <div>
        <QuestionsCm />
      </div>
    </div>
  );
}

export default QuestionnaireRecruteur;
