import React, { useState } from "react";
import { submitAnswer } from "../../lib/firebase";
import { Question } from "../../entities/question";

interface AnswerFormProps {
  question: Question;
}

const AnswerForm: React.FC<AnswerFormProps> = ({ question }) => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.trim()) {
      await submitAnswer(question.id, answer);
      setAnswer("");
    }
  };

  return (
    <form className="answer-form" onSubmit={handleSubmit}>
      <textarea
        className="answer-textarea"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Antwort eingeben..."
        rows={4}
      />
      <button className="answer-submit-button" type="submit">
        Antwort senden
      </button>
    </form>
  );
};

export default AnswerForm;
