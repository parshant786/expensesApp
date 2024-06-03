import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../../components/ui/Button";
import { IconButton } from "../../components/ui/IconButton";
import { GlobalStyles } from "../../constants/globalStyles";
import { ExpensesContext } from "../../store/ExpensesContext";

export const ManageExpensesScreen = ({ route, navigation }) => {
  const { handleDeleteExpense } = useContext(ExpensesContext);

  let editing = !!route.params?.id;
  const handleDelete = () => {
    handleDeleteExpense(route.params?.id);
    navigation.goBack();
  };

  return (
    <View>
      <Text>hi</Text>

      <View style={styles.buttonRowContainer}>
        <View style={styles.buttonContainer}>
          <Button text="cancel" mode="flat" />
        </View>
        <View style={styles.buttonContainer}>
          <Button text={editing ? "Update" : "Add"} />
        </View>
      </View>
      <View style={styles.deleteButtonContainer}>
        <IconButton
          name={"trash"}
          color={GlobalStyles.colors.error500}
          onPress={handleDelete}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonRowContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: 4,
  },
  deleteButtonContainer:{
    borderTopWidth:1,
    borderTopColor: "#cfcccc",
    alignItems: "center",
    paddingTop: 5,
    marginTop:10
  }
});
