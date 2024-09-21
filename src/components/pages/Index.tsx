import { QuestionList } from "../modules/QuestionList";

export default function Index() {
  return (
    <div className="space-y-4">
      <h2 className="h1">My Question</h2>
      <QuestionList />
    </div>
  );
}
