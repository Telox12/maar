import React, { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { Question } from "../../entities/question";
import { COLLECTIONS } from "../../lib/collections";
import { db } from "../../lib/firebase";
import { Answer } from "../../entities/answer";

interface AnswerListProps {
  question: Question;
}

const AnswerList: React.FC<AnswerListProps> = ({ question }) => {
  const [answers, setAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    const fetchAnswers = async () => {
      const q = query(
        collection(db, COLLECTIONS.ANSWERS),
        where("questionId", "==", question.id),
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const l = snapshot.docs.map((d) => Answer.fromFirestore(d) as Answer);
        setAnswers(l);
      });

      return unsubscribe;
    };
    fetchAnswers();
  }, [question]);

  return (
    <div className="answer-list-container">
      <h3 className="answer-list-title">Antworten</h3>
      <ul className="answer-list">
        {answers.map((answer) => (
          <li className="answer-item" key={answer.id}>
            {answer.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnswerList;
