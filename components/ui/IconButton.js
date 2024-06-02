import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export const IconButton = ({ name, size=24, color="black",onPress }) => {
  return (
    <Pressable style={({ pressed }) => (pressed && styles.pressed )} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Ionicons name={name} size={size} color={color} />
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 24,
    marginHorizontal: 8,
    marginVertical: 2,
    padding: 6,
  },
  pressed: {
    opacity: 0.5,
  },
});
