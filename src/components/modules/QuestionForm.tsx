import { useEffect, useState } from "react";
import AnswerForm from "./AnswerForm";
import AnswerList from "./AnswerList";
import { doc, getDoc } from "firebase/firestore";
import { COLLECTIONS } from "../../lib/collections";
import { db } from "../../lib/firebase";
import { Question } from "../../entities/question";

export function QuestionForm({ questionId }: { questionId: string }) {
  const [question, setQuestion] = useState<Question>();

  useEffect(() => {
    getDoc(doc(db, COLLECTIONS.QUESTIONS, questionId)).then((snapshot) => {
      if (snapshot.exists()) {
        setQuestion({ id: snapshot.id, ...snapshot.data() } as Question);
      }
    });
  }, []);

  return (
    <>
      {question && (
        <>
          <p>{question.text}</p>
          <AnswerList question={question} />
          <AnswerForm question={question} />
        </>
      )}
    </>
  );
}
