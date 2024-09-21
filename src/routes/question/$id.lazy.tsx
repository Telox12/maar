import { createLazyFileRoute, useParams } from "@tanstack/react-router";
import Question from "../../components/pages/question";

export const Route = createLazyFileRoute("/question/$id")({
  component: () => {
    const params = useParams({ from: "/question/$id" });
    return <Question questionId={params.id} />;
  },
});
