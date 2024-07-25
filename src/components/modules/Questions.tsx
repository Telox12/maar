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

export function Questions() {
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
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
        />
        <input type="button" onClick={handleAdd} value="Speichern" />
      </div>
      <div>
        {questions.map((question, index) => (
          <div key={index}>
            <p>{question.text}</p>
            <p>{question.createdAt}</p>
            <input
              type="button"
              onClick={() => handleRemove(question)}
              value="Löschen"
            />
          </div>
        ))}
      </div>
    </>
  );
}
