import React from "react";
import QuestionnaireHeader from "../components/QuestionnaireHeader";
import QuestionsCm from "../components/QuestionsCm";

function Questionnaire() {
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

export default Questionnaire;
