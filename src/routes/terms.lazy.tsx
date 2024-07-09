import Terms from "@/pages/Terms";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/terms")({
  component: () => <Terms />,
});
