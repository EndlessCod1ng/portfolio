import { HomePage } from "@/pages/HomePage";
import { ProjectsPage } from "@/pages/ProjectsPage";

export const routeConfig = [
  { name: "Home", path: "/", element: <HomePage /> },
  { name: "Projects", path: "/projects", element: <ProjectsPage /> },
  { name: "About", path: "/projects", element: <ProjectsPage /> },
]