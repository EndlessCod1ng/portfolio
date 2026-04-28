import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import type { ReactNode } from "react";

export const PATHS = {
  HOME: "/",
  PROJECTS: "/projects",
  RESUME: "/resume",
  NOT_FOUND: "*",
} as const;


export type PathType = (typeof PATHS)[keyof typeof PATHS] | (string & {});

export const navRouteConfig: Array<{ name: string, path: PathType, element: ReactNode }> = [
  { name: "Home", path: PATHS.HOME, element: <HomePage /> },
  { name: "Projects", path: PATHS.PROJECTS, element: <ProjectsPage /> },
  { name: "Resume", path: PATHS.RESUME, element: <ProjectsPage /> }
]
export const routeConfig: Array<{ name: string, path: PathType, element: ReactNode }> = [
  ...navRouteConfig,
  { name: "Not_found", path: PATHS.NOT_FOUND, element: <NotFoundPage /> },
]