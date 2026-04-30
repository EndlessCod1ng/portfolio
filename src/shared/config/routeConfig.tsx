import { ContactsPage } from "@/pages/ContactsPage";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import type { ReactNode } from "react";

export const PATHS = {
  HOME: "/",
  PROJECTS: "/projects",
  CONTACTS: "/contacts",
  NOT_FOUND: "*",
} as const;


export type PathType = (typeof PATHS)[keyof typeof PATHS] | (string & {});

export const navRouteConfig: Array<{ name: string, path: PathType, element: ReactNode }> = [
  { name: "Home", path: PATHS.HOME, element: <HomePage /> },
  { name: "Projects", path: PATHS.PROJECTS, element: <ProjectsPage /> },
  { name: "Contacts", path: PATHS.CONTACTS, element: <ContactsPage /> }
]
export const routeConfig: Array<{ name: string, path: PathType, element: ReactNode }> = [
  ...navRouteConfig,
  { name: "Not_found", path: PATHS.NOT_FOUND, element: <NotFoundPage /> },
]