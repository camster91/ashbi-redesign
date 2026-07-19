// ——— Live CMS fetch with local fallback ————————————————————
import { PROJECTS as LOCAL_PROJECTS, type Project } from "./projects";
import { POSTS as LOCAL_POSTS, type Post } from "./posts";

const API_BASE = import.meta.env.VITE_CMS_URL || "";
const TIMEOUT = 4000;

async function get<T>(path: string): Promise<T | null> {
  if (!API_BASE) return null;
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), TIMEOUT);
    const res = await fetch(`${API_BASE}${path}`, { signal: ctrl.signal });
    clearTimeout(t);
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function fetchProjects(): Promise<Project[]> {
  const live = await get<Project[]>("/api/projects");
  return live && live.length ? live : LOCAL_PROJECTS;
}

export async function fetchProject(idOrSlug: string): Promise<Project | null> {
  const live = await get<Project>(`/api/projects/${idOrSlug}`);
  if (live) return live;
  return LOCAL_PROJECTS.find((p) => p.id === idOrSlug) ?? null;
}

export async function fetchPosts(): Promise<Post[]> {
  const live = await get<Post[]>("/api/posts");
  return live && live.length ? live : LOCAL_POSTS;
}
