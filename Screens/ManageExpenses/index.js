import { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../../components/ui/Button";
import { IconButton } from "../../components/ui/IconButton";
import { Input } from "../../components/ui/Input";
import { GlobalStyles } from "../../constants/globalStyles";
import { ExpensesContext } from "../../store/ExpensesContext";

export const ManageExpensesScreen = ({ route, navigation }) => {
  const { handleUpdateExpense, handleCreateExpense, handleDeleteExpense } =
    useContext(ExpensesContext);
  let editing = !!route.params?.id;
  console.log(route.params);
  const [formValues, setFormValues] = useState({
    amount: { value: route.params?.amount.toString() || "", error: false },
    date: { value: route.params?.date || "", error: false },
    description: { value: route.params?.description || "", error: false },
  });

  const handleInputChange = (key, value) => {
    setFormValues((pre) => {
      return {
        ...pre,
        [key]: { ...pre[key], value: value },
      };
    });
  };

  /// validation code

  const validateAmount = () => {
    if (
      isNaN(parseInt(formValues.amount.value)) ||
      parseInt(formValues.amount.value) <= 0
    ) {
      setFormValues((pre) => {
        return {
          ...pre,
          amount: {
            ...pre.amount,
            error: true,
          },
        };
      });
      return false;
    }
    return true;
  };
  const validateDate = () => {
    console.log(formValues.date?.value?.length);
    if (
      formValues.date?.value?.length !== 10 ||
      new Date(formValues.date.value).toString() == "Invalid Date"
    ) {
      setFormValues((pre) => {
        return {
          ...pre,
          date: {
            ...pre.date,
            error: true,
          },
        };
      });
      return false;
    }
    return true;
  };
  const validateDescription = () => {
    if (!formValues.description.value) {
      setFormValues((pre) => {
        return {
          ...pre,
          description: {
            ...pre.description,
            error: true,
          },
        };
      });
      return false;
    }
    return true;
  };

  ///handle buttons click
  const handleDelete = () => {
    handleDeleteExpense(route.params?.id);
    navigation.goBack();
  };
  const handleCancel = () => {
    navigation.goBack();
  };

  const handleChange = () => {
    if (!validateAmount() || !validateDate() || !validateDescription()) {
      return;
    } else {
      if (!editing) {
        handleCreateExpense({
          amount: parseInt(formValues.amount.value),
          date: new Date(formValues.date.value),
          description: formValues.description.value,
        });
      } else {
        handleUpdateExpense(
          {
            amount: parseInt(formValues.amount.value),
            date: new Date(formValues.date.value),
            description: formValues.description.value,
          },
          route.params?.id
        );
      }
      navigation.goBack();
    }
  };
  ///
  return (
    <View style={styles.container}>
      <Text style={styles.headingContainer}> Expenses Details</Text>
      <View style={styles.firstRowContainer}>
        <Input
          label={"Amount"}
          withError={formValues.amount.error}
          containerStyle={styles.firstRowInputContainer}
          inputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: handleInputChange.bind(this, "amount"),
            value: formValues.amount.value,
          }}
        />
        <Input
          label={"Date"}
          withError={formValues.date.error}
          containerStyle={styles.firstRowInputContainer}
          inputConfig={{
            onChangeText: handleInputChange.bind(this, "date"),
            value: formValues.date.value,
            maxLength: 10,
            placeholder: "YYY-MM-DD",
          }}
        />
      </View>
      <View style={styles.secondRowContainer}>
        <Input
          label={"Description"}
          withError={formValues.description.error}
          textArea={true}
          inputConfig={{
            onChangeText: handleInputChange.bind(this, "description"),
            value: formValues.description.value,
            multiline: true,
          }}
        />
      </View>
      <View style={styles.buttonRowContainer}>
        <View style={styles.buttonContainer}>
          <Button text="Cancel" mode="flat" onPress={handleCancel} />
        </View>
        <View style={styles.buttonContainer}>
          <Button text={editing ? "Update" : "Add"} onPress={handleChange} />
        </View>
      </View>
      {editing && (
        <View style={styles.deleteButtonContainer}>
          <IconButton
            name={"trash"}
            color={GlobalStyles.colors.error500}
            onPress={handleDelete}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary50,
    paddingTop: 60,
  },
  headingContainer: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },

  firstRowContainer: {
    flexDirection: "row",
  },
  firstRowInputContainer: {
    flex: 1,
    padding: 10,
  },
  secondRowContainer: {
    padding: 10,
    marginBottom: 30,
  },

  buttonRowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 30,
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: 4,
  },
  deleteButtonContainer: {
    borderTopWidth: 1,
    borderTopColor: "#cfcccc",
    alignItems: "center",
    paddingTop: 5,
    marginTop: 10,
  },
});
