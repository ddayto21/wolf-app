// components/PostList.tsx

import { FlatList } from "react-native";
import { PostCard } from "./PostCard";
import { EmptyState } from "./EmptyState";

import { useSelector } from "react-redux";
import { selectFilteredPosts } from "@/redux/selectors/post-selectors";

/**
 * Displays posts from global state using Redux selectors.
 * Automatically reflects search and filter state.
 */
export function PostList() {
  const posts = useSelector(selectFilteredPosts);

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PostCard post={item} />}
      contentContainerStyle={{ padding: 16 }}
      ListEmptyComponent={<EmptyState />}
    />
  );
}
