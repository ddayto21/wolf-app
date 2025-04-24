// components/PostCard.tsx

import { View, Text, Image, StyleSheet } from 'react-native';
import { Post } from '../types/post';

type Props = {
  post: Post;
};

/**
 * Displays individual post content including avatar, title, and description.
 */
export  function PostCard({ post }: Props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: post.image }} style={styles.avatar} />
      <View>
        <Text style={styles.title}>{post.title}</Text>
        <Text>{post.description}</Text>
        <Text style={styles.date}>{new Date(post.createdAt).toLocaleString()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', gap: 12, marginBottom: 20 },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  title: { fontWeight: 'bold' },
  date: { color: '#999', fontSize: 12 },
});