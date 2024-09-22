import { Link } from "@tanstack/react-router";

export default function Index() {
  return (
    <div className="space-y-4">
      <h2 className="h1">Index</h2>
      <Link to={"/question"} className="question-link">
        Questions
      </Link>
    </div>
  );
}
