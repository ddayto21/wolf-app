// app/profile/[username].tsx

import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useEffect } from "react";
import { useNavigation, useLocalSearchParams } from "expo-router";

/**
 * Displays a user's profile using query params passed from the home screen.
 */
export default function ProfilePage() {
  const { username, image, description, createdAt } = useLocalSearchParams();

  const navigation = useNavigation();

  // Hide the default header title
  useEffect(() => {
    navigation.setOptions({ title: "" });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: String(image) }} style={styles.avatar} />
        <View style={styles.info}>
          <Text style={styles.name}>{username}</Text>
          <Text style={styles.bio} numberOfLines={3}>
            {description}
          </Text>
        </View>
      </View>

      <View style={styles.metrics}>
        <View style={styles.metric}>
          <Text style={styles.metricNumber}>124</Text>
          <Text style={styles.metricLabel}>Posts</Text>
        </View>
        <View style={styles.metric}>
          <Text style={styles.metricNumber}>8.2K</Text>
          <Text style={styles.metricLabel}>Followers</Text>
        </View>
        <View style={styles.metric}>
          <Text style={styles.metricNumber}>351</Text>
          <Text style={styles.metricLabel}>Following</Text>
        </View>
      </View>

      <View style={styles.joinedContainer}>
        <Text style={styles.joinedText}>
          Joined on{" "}
          <Text style={styles.joinedDate}>
            {new Date(String(createdAt)).toLocaleDateString(undefined, {
              month: "long",
              year: "numeric",
            })}
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 28,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 6,
  },
  bio: {
    fontSize: 15,
    lineHeight: 20,
    color: "#555",
  },
  metrics: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    marginBottom: 16,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },
  metric: {
    alignItems: "center",
    flex: 1,
  },
  metricNumber: {
    fontWeight: "700",
    fontSize: 17,
  },
  metricLabel: {
    color: "#888",
    fontSize: 13,
  },
  joinedContainer: {
    marginTop: 8,
  },
  joinedText: {
    fontSize: 15,
    color: "#444",
  },
  joinedDate: {
    fontWeight: "600",
    color: "#1DA1F2",
  },
});
