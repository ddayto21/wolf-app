// components/PostCard.tsx

import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import type { Post } from "@/types/post";
import { useRouter } from "expo-router";

type Props = {
  post: Post;
};

/**
 * Displays individual post content including avatar, title, and description.
 * Navigates to profile screen, passing user details via query params.
 */
export function PostCard({ post }: Props) {
  const router = useRouter();

  const handleProfileClick = () => {
    router.push({
      pathname: "/profile/[username]",
      params: {
        username: post.title,
        image: post.image,
        description: post.description,
        createdAt: post.createdAt,
      },
    });
  };

  return (
    <TouchableOpacity onPress={handleProfileClick} style={styles.card}>
      <TouchableOpacity onPress={handleProfileClick}>
        <Image source={{ uri: post.image }} style={styles.avatar} />
      </TouchableOpacity>
      <View>
        <View >
          <Text style={styles.title}>{post.title}</Text>
        </View>
        <Text>{post.description}</Text>
        <Text style={styles.date}>
          {new Date(post.createdAt).toLocaleString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: "row", gap: 12, marginBottom: 20 },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  title: { fontWeight: "bold", color: "#1DA1F2" },
  date: { color: "#999", fontSize: 12 },
});
