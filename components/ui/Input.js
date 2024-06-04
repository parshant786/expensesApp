import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/globalStyles";

export const Input = ({
  label,
  containerStyle = {},
  inputConfig,
  textArea = false,
  withError = false,
}) => {
  return (
    <View style={containerStyle}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
      <View>
        <TextInput
          style={[
            styles.inputStyle,
            textArea ? styles.textAreaStyle : {},
            withError ? styles.inputWithError : {},
          ]}
          {...inputConfig}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  labelContainer: {
    marginBottom: 6,
  },
  labelText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  textAreaStyle: {
    textAlignVertical: "top",
    minHeight: 80,
    paddingTop: 10,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: GlobalStyles.colors.gray700,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  inputWithError: {
    borderColor: GlobalStyles.colors.error500,
    backgroundColor: GlobalStyles.colors.error50,
  },
});
