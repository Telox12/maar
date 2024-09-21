import { QuestionForm } from "../modules/QuestionForm";

export default function Question({ questionId }: { questionId: string }) {
  return (
    <div className="space-y-4">
      <h2 className="h1">My Question</h2>
      <QuestionForm questionId={questionId} />
    </div>
  );
}
