import { createLazyFileRoute } from "@tanstack/react-router";
import Questions from "../../components/pages/questions";

export const Route = createLazyFileRoute("/question/")({
  component: () => <Questions />,
});
