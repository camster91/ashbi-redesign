import { useEffect, useState } from "react";
import { fetchProjects, fetchPosts } from "./api";
import { PROJECTS, type Project } from "./projects";
import { POSTS, type Post } from "./posts";

export function useProjects(): Project[] {
  const [projects, setProjects] = useState<Project[]>(PROJECTS);
  useEffect(() => {
    let on = true;
    fetchProjects().then((p) => on && setProjects(p));
    return () => { on = false; };
  }, []);
  return projects;
}

export function usePosts(): Post[] {
  const [posts, setPosts] = useState<Post[]>(POSTS);
  useEffect(() => {
    let on = true;
    fetchPosts().then((p) => on && setPosts(p));
    return () => { on = false; };
  }, []);
  return posts;
}
