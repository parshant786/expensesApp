import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/globalStyles";
import { ExpensesList } from "./ExpensesList";
import { ExpensesSummary } from "./ExpensesSummary";
import { listItem } from "./ListItem";

export const ExpensesOutput = ({ expensesList=[], periodText = "hi" }) => {
 

  return (
    <View style={styles.container} >
      <ExpensesSummary periodText={periodText} expensesList={expensesList} />
      <ExpensesList expensesList={expensesList} />
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        paddingVertical:15,
        flex:1,
        backgroundColor:GlobalStyles.colors.primary700
    }
});
