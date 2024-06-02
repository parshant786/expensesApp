import { useNavigation } from "@react-navigation/native";
import { FlatList, View, StyleSheet } from "react-native";
import { listItem } from "./ListItem";

export const ExpensesList = ({ expensesList }) => {


  return (
    <View style={styles.container}>
      <FlatList data={expensesList} renderItem={listItem} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
});
