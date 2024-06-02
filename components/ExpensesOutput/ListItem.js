import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/globalStyles";
import { formatDate } from "../../Utils/DateFormatterFunctions";

const PressableButton = ({ style, children, values }) => {
  let navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("ManageExpenses", {
      ...values,
    });
  };

  return (
    <Pressable onPress={handlePress} style={style}>
      {children}
    </Pressable>
  );
};

export const listItem = (listdata) => {
  let { item = {} } = listdata;
  let { description = "", amount = "", date, id } = item;

  return (
    <View style={styles.listbarContainer}>
      <PressableButton
        style={({ pressed }) =>
          pressed ? [styles.pressable, styles.pressed] : [styles.pressable]
        }
        values={{
          description,
          amount,
          date:date.toISOString().slice(0,10),
          id,
        }}
      >
        <View>
          <Text style={styles.basicText}>{description}</Text>
          <Text style={styles.basicText}>{formatDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>{amount.toFixed(2)}</Text>
        </View>
      </PressableButton>
    </View>
  );
};
const styles = StyleSheet.create({
  listbarContainer: {
    marginBottom: 12,
  },
  pressable: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 6,
  },
  pressed: {
    opacity: 0.5,
  },
  basicText: {
    color: "white",
    fontSize: 16,
  },
  amountContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  amountText: {
    color: GlobalStyles.colors.primary400,
    fontWeight: "bold",
  },
});
