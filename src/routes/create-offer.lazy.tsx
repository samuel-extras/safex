import Create from "@/pages/Create";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/create-offer")({
  component: () => <Create />,
});
