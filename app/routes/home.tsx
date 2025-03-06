import type { Route } from "./+types/home";
import Parent from "../components/Parent";
import ParentProvided from "../components_solution/ParentProvided";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Parent />;
}
