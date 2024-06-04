import { View, Text, Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/globalStyles";

export const Button = ({ text, onPress, mode }) => {
  return (
    <View>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress}
      >
        <View style={[styles.textContainer ,mode ==="flat" && styles.flatTextContainer]}>
          <Text style={[styles.textStyle,mode ==="flat" && styles.flatTextStyle]}>{text}</Text>
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {},
  textContainer: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: GlobalStyles.colors.accent500,
  },
  textStyle: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: GlobalStyles.colors.primary50,
  },
  flatTextContainer: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor:GlobalStyles.colors.gray700
  },
  flatTextStyle: {
    color: GlobalStyles.colors.accent500,
  },
});
