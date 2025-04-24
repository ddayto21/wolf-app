// components/EmptyState.tsx

import { View, Text } from 'react-native';

/**
 * Displays a message when no posts are available.
 */
export function EmptyState() {
  return (
    <View style={{ alignItems: 'center', marginTop: 32 }}>
      <Text>No posts available.</Text>
    </View>
  );
}