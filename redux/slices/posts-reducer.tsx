// redux/slices/posts-reducer
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../types/post";
import { posts } from "../../fixtures/posts";


interface PostState {
  all: Post[];
  search: string;
  category: string | null;
  sort: SortOption;
}

const initialState: PostState = {
  all: posts,
  search: "",
  category: null,
  sort: "newest",
};

/**
 * Slice managing global post state, with support for search, filtering, and sorting.
 */

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setCategory(state, action: PayloadAction<string | null>) {
      state.category = action.payload;
    },
    setSort(state, action: PayloadAction<SortOption>) {
      state.sort = action.payload;
    },
  },
});

export type SortOption = "newest" | "oldest" | "title-asc" | "title-desc";

export const { setSearch, setCategory, setSort } = postSlice.actions;
export default postSlice.reducer;
