// components/PostCard.tsx

import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import type { Post } from "@/types/post";
import { useRouter } from "expo-router";

type Props = {
  post: Post;
};

/**
 * Displays a single post card with a polished, social-media inspired design.
 * Clicking on the card navigates to the user's profile and passes relevant data.
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
      <Image source={{ uri: post.image }} style={styles.avatar} />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.timestamp}>
            {new Date(post.createdAt).toLocaleDateString()}
          </Text>
        </View>
        <Text style={styles.description}>{post.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e0e0e0", 
    padding: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 14,
  },
  content: {
    flex: 1,
    flexShrink: 1,
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1D4ED8",
    flexShrink: 1,
  },
  timestamp: {
    fontSize: 12,
    color: "#888",
    marginLeft: 8,
  },
  description: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
    marginTop: 2,
  },
});
