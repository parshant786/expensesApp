import { useContext } from "react";
import { ExpensesOutput } from "../../components/ExpensesOutput";
import { ExpensesContext } from "../../store/ExpensesContext";

export const RecentExpensesScreen = () => {

    const { expencesArrary }  =  useContext(ExpensesContext)

  return <ExpensesOutput periodText="Last 7 days" expensesList={expencesArrary} />;
};
