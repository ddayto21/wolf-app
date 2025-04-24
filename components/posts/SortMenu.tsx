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
import { Ionicons } from "@expo/vector-icons";

/**
 * SortMenu is a refined, dropdown-style menu with a sort icon.
 * When tapped, it opens a modal where the user can select a sort option.
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
        <Ionicons
          name="filter-outline"
          size={18}
          color="#444"
          style={{ marginRight: 6 }}
        />
        <Text style={styles.buttonText}>
          {sortOptions.find((opt) => opt.value === currentSort)?.label}
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
    marginBottom: 12,
    marginRight: 6,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 100,
    backgroundColor: "rgba(0,0,0,0.25)",
  },
  menu: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 4,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
  },
  menuText: {
    fontSize: 15,
    color: "#333",
  },
  selected: {
    fontWeight: "600",
    color: "#1D4ED8",
  },
});
