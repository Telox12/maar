import { DocumentSnapshot, SnapshotOptions } from "firebase/firestore";

interface QuestionProps {
  createdAt: string;
  text: string;
}

export class Question {
  readonly id: string;
  readonly createdAt: string;
  readonly text: string;

  constructor(id: string, { createdAt, text }: QuestionProps) {
    this.id = id;
    this.createdAt = createdAt;
    this.text = text;
  }

  toString() {
    return `Question ${this.id} | ${this.text}`;
  }

  toFirestore() {
    const { ...res } = this as QuestionProps & { id?: string };
    delete res.id;
    return res;
  }

  static fromFirestore(snapshot: DocumentSnapshot, options?: SnapshotOptions) {
    const data = snapshot.data(options) as QuestionProps;
    return !!data ? new Question(snapshot.id, data) : null;
  }
}
