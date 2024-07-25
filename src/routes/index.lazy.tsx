import { createLazyFileRoute } from "@tanstack/react-router";
import Index from "../components/pages/Index";

export const Route = createLazyFileRoute("/")({
  component: () => <Index />,
});
