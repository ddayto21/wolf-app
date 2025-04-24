// components/PostFilter.tsx
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch, setCategory } from '@/redux/slices/posts-reducer';
import { RootState } from '../../redux/store';

/**
 * PostFilter provides UI controls for searching and filtering posts.
 * 
 * This component:
 * - Updates the search query in the global Redux store
 * - Clears the active category filter
 * - Is intended to be placed above the PostList component on the HomeScreen
 */
export function PostFilter() {
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.posts.search);
  const category = useSelector((state: RootState) => state.posts.category);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search posts..."
        placeholderTextColor="#888"
        value={search}
        onChangeText={(text) => dispatch(setSearch(text))}
      />

      {category && (
        <TouchableOpacity onPress={() => dispatch(setCategory(null))} style={styles.clearButton}>
          <Text style={styles.clearText}>Clear Category Filter</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    gap: 12,
  },
  input: {
    backgroundColor: '#F0F0F0',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    fontSize: 16,
    color: '#333',
  },
  clearButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5E5',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  clearText: {
    color: '#555',
    fontSize: 14,
    fontWeight: '500',
  },
});