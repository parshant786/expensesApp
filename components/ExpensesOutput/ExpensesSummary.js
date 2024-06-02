import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/globalStyles";
export const ExpensesSummary = ({ expensesList, periodText }) => {
  let amount = expensesList.reduce((sum, current) => sum + current.amount, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.periodText}>{periodText}</Text>
      <Text style={styles.totalAmount}>$ {amount?.toFixed(2)}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: GlobalStyles.colors.primary50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  periodText: {
    fontSize: 18,
    color: GlobalStyles.colors.primary500,
    textTransform: "capitalize",
  },
  totalAmount: {
    fontSize: 18,
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
