import { Link } from "@tanstack/react-router";
import { QuestionForm } from "../modules/QuestionForm";

export default function Question({ questionId }: { questionId: string }) {
  return (
    <div className="space-y-4">
      <Link to={"/question"} className="back-link">
        zurück
      </Link>
      <h2 className="h1">My Question</h2>
      <QuestionForm questionId={questionId} />
    </div>
  );
}
