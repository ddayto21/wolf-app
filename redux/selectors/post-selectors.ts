// redux/selectors/postSelectors.ts
import { RootState } from "../store";
import type { Post } from "../../types/post";
/**
 * Selects and returns posts from state, filtered by search/category, then sorted.
 */
export const selectFilteredPosts = (state: RootState): Post[] => {
  const { all, search, category, sort } = state.posts;

  let filtered = all.filter((post) => {
    const matchesCategory = category ? post.category === category : true;
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  switch (sort) {
    case "newest":
      return filtered.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    case "oldest":
      return filtered.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    case "title-asc":
      return filtered.sort((a, b) => a.title.localeCompare(b.title));
    case "title-desc":
      return filtered.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return filtered;
  }
};
