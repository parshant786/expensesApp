import { useContext } from "react";
import { View, Text } from "react-native";
import { IconButton } from "../../components/ui/IconButton";
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
      <IconButton name={"remove-circle"} onPress={handleDelete} />
    </View>
  );
};
