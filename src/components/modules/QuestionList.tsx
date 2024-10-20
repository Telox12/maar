import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { COLLECTIONS } from "../../lib/collections";
import { Question } from "../../entities/question";
import { format } from "date-fns";
import { useNavigate } from "@tanstack/react-router";

export function QuestionList() {
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);

  async function handleAdd() {
    const question = new Question("", {
      createdAt: format(new Date(), "yyyy-MM-dd hh:mm:ss"),
      text,
    });
    setText("");
    await addDoc(collection(db, COLLECTIONS.QUESTIONS), question.toFirestore());
  }

  async function handleRemove(question: Question) {
    await deleteDoc(doc(db, COLLECTIONS.QUESTIONS, question.id));
  }

  useEffect(() => {
    const q = query(
      collection(db, COLLECTIONS.QUESTIONS),
      orderBy("createdAt", "desc"),
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const l = snapshot.docs.map((d) => Question.fromFirestore(d) as Question);
      setQuestions(l);
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <div className="question-input-container">
        <input
          className="question-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
        />
        <input
          className="question-submit-button"
          type="button"
          onClick={handleAdd}
          value="Speichern"
        />
      </div>
      <div className="question-list">
        {questions.map((question, index) => (
          <button
            className="question-item-button"
            key={index}
            onClick={() =>
              navigate({
                to: `/question/${question.id}`,
              })
            }
          >
            <div className="question-item">
              <p className="question-text">{question.text}</p>
              <p className="question-date">{question.createdAt}</p>
              <input
                className="question-delete-button"
                type="button"
                onClick={() => handleRemove(question)}
                value="Löschen"
              />
            </div>
          </button>
        ))}
      </div>
    </>
  );
}
