import React from "react";
import QuestionnaireHeader from "../components/QuestionnaireHeader";
import QuestionsCm from "../components/QuestionsCm";

function QuestionnaireDeveloppeur() {
  return (
    <div>
      <div className='questionnaire'>
        <QuestionnaireHeader title={"developpeur"} />
      </div>
      <div>
        <QuestionsCm />
      </div>
    </div>
  );
}

export default QuestionnaireDeveloppeur;
