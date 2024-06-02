import { useContext } from "react";
import { ExpensesOutput } from "../../components/ExpensesOutput";
import { ExpensesContext } from "../../store/ExpensesContext";

export const AllExpensesScreen = () => {
  const { expencesArrary } = useContext(ExpensesContext);
  return <ExpensesOutput periodText="total" expensesList={expencesArrary} />;
};
