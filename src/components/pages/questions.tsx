import { QuestionList } from "../modules/QuestionList";

export default function Questions() {
  return (
    <div className="space-y-4">
      <h2 className="h1">My Questions</h2>
      <QuestionList />
    </div>
  );
}
