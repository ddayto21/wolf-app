// components/SortMenu.tsx
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort, type SortOption } from "@/redux/slices/posts-reducer";
import { RootState } from "../../redux/store";

/**
 * SortMenu is a dropdown-style UI component that allows users to
 * sort the post list by date or title in ascending or descending order.
 *
 * Designed for UX similar to social apps like Instagram/Twitter.
 */
export function SortMenu() {
  const dispatch = useDispatch();
  const currentSort = useSelector((state: RootState) => state.posts.sort);
  const [visible, setVisible] = useState(false);

  const sortOptions: { label: string; value: SortOption }[] = [
    { label: "Newest", value: "newest" },
    { label: "Oldest", value: "oldest" },
    { label: "Title A → Z", value: "title-asc" },
    { label: "Title Z → A", value: "title-desc" },
  ];

  const handleSelect = (option: SortOption) => {
    dispatch(setSort(option));
    setVisible(false);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
        <Text style={styles.buttonText}>
          Sort: {sortOptions.find((opt) => opt.value === currentSort)?.label}
        </Text>
      </TouchableOpacity>

      <Modal transparent visible={visible} animationType="fade">
        <Pressable style={styles.overlay} onPress={() => setVisible(false)}>
          <View style={styles.menu}>
            {sortOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={styles.menuItem}
                onPress={() => handleSelect(option.value)}
              >
                <Text
                  style={[
                    styles.menuText,
                    currentSort === option.value && styles.selected,
                  ]}
                >
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "flex-end",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 80,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  menu: {
    backgroundColor: "white",
    marginHorizontal: 16,
    borderRadius: 10,
    paddingVertical: 10,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  menuText: {
    fontSize: 16,
    color: "#333",
  },
  selected: {
    fontWeight: "600",
    color: "#1DA1F2", // Twitter blue
  },
});
