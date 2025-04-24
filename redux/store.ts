// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/posts-reducer";

/**
 * Initializes and configures the Redux store for global state management.
 *
 * The store currently includes the `posts` slice, which manages:
 * - The full list of posts
 * - Search text for filtering
 * - Selected category filters
 *
 * This store is provided at the root of the app using the <Provider> component,
 * allowing any component to:
 * - Access state with `useSelector`
 * - Dispatch actions with `useDispatch`
 *
 * Additional slices can be added to the `reducer` object as the app scales.
 */
export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

/** RootState type for use in selectors and typed useSelector hooks */
export type RootState = ReturnType<typeof store.getState>;

/** AppDispatch type for use in typed useDispatch hooks */
export type AppDispatch = typeof store.dispatch;
