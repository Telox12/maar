import { DocumentSnapshot, SnapshotOptions } from "firebase/firestore";

interface AnswerProps {
  questionId: string;
  createdAt: string;
  answer: string;
}

export class Answer {
  readonly id: string;
  readonly questionId: string;
  readonly createdAt: string;
  readonly answer: string;

  constructor(id: string, { questionId, createdAt, answer }: AnswerProps) {
    this.id = id;
    this.questionId = questionId;
    this.createdAt = createdAt;
    this.answer = answer;
  }

  toString() {
    return `Answer ${this.id} | ${this.answer}`;
  }

  toFirestore() {
    const { ...res } = this as AnswerProps & { id?: string };
    delete res.id;
    return res;
  }

  static fromFirestore(snapshot: DocumentSnapshot, options?: SnapshotOptions) {
    const data = snapshot.data(options) as AnswerProps;
    return !!data ? new Answer(snapshot.id, data) : null;
  }
}

