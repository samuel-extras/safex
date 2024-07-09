import Accept from "@/pages/Accept";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/accept-offer")({
  component: () => <Accept />,
});
