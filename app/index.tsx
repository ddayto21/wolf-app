// app/index.tsx

import { View, Text, StyleSheet, Platform } from "react-native";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { SortMenu } from "@/components/posts/SortMenu";
import { PostFilter } from "@/components/posts/PostFilter";
import { PostList } from "@/components/posts/PostList";
import { posts } from "../fixtures/posts";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";

/**
 * Home screen that displays a filter input and a styled list of social media posts.
 * This component coordinates layout and state interactions via Redux.
 */
export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: Colors[colorScheme ?? "light"].background },
      ]}
    >
      <Text
        style={[
          styles.header,
          {
            color: Colors[colorScheme ?? "light"].text,
            opacity: 0.9,
          },
        ]}
      >
        Opportunities for You
      </Text>

      <SortMenu />
      <PostFilter />
      <PostList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "700",
    letterSpacing: -0.5,
    marginBottom: 12,
  },
});
