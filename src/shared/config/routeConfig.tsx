import { HomePage } from "@/pages/HomePage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import type { ReactNode } from "react";

export type PathType = "/" | "/projects"

export const routeConfig: Array<{ name: string, path: PathType, element: ReactNode }> = [
  { name: "Home", path: "/", element: <HomePage /> },
  { name: "Projects", path: "/projects", element: <ProjectsPage /> },
  { name: "About", path: "/projects", element: <ProjectsPage /> },
]