import { createContext, useReducer } from "react";

export const ExpensesContext = createContext();

const handleReducer = (state, action) => {
  switch (action.type) {
    case "update":
      const index = state.findIndex(({ id }) => id === action.payload.id);

      let arr = [...state];

      arr.splice(index, 1, { ...action.payload });
      return arr;

    case "create":
      let id = new Date().toString() + Math.random().toString;
      return [{ ...action.payload, id }, ...state];
    case "delete":
      return state.filter(({ id }) => id !== action.payload);

    default:
      return state;
  }
};

let list = [
  {
    id: "e1",
    amount: 23.01,
    date: new Date("2015-03-23"),
    description: "buy 1 a book",
  },
  {
    id: "e2",
    amount: 23.99,
    date: new Date("2015-03-23"),
    description: "buy a book",
  },
  {
    id: "e3",
    amount: 23.99,
    date: new Date("2015-03-23"),
    description: "buy a book",
  },
  {
    id: "e4",
    amount: 23.99,
    date: new Date("2015-03-23"),
    description: "buy a book",
  },
  {
    id: "e5",
    amount: 23.99,
    date: new Date("2015-03-23"),
    description: "buy a book",
  },
  {
    id: "e6",
    amount: 23.99,
    date: new Date("2015-03-23"),
    description: "buy a book",
  },
  {
    id: "e7",
    amount: 23.99,
    date: new Date("2015-03-23"),
    description: "buy a book",
  },
  {
    id: "e8",
    amount: 23.99,
    date: new Date("2015-03-23"),
    description: "buy a book",
  },
  {
    id: "e9",
    amount: 23.99,
    date: new Date("2015-03-23"),
    description: "buy a book",
  },
  {
    id: "e10",
    amount: 23.99,
    date: new Date("2015-03-23"),
    description: "buy a book",
  },
  {
    id: "e11",
    amount: 23.99,
    date: new Date("2015-03-23"),
    description: "buy a book",
  },
];
export const ExpensesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(handleReducer, list);

  const handleUpdateExpense = ({ amount, date, description }, id) => {
    dispatch({ type: "update", payload: { amount, date, description, id } });
  };
  const handleCreateExpense = ({ amount, date, description }) => {
    dispatch({ type: "create", payload: { amount, date, description } });
  };
  const handleDeleteExpense = (id) => {
    dispatch({ type: "delete", payload: id });
  };
  const value = {
    expencesArrary: state,
    handleUpdateExpense,
    handleCreateExpense,
    handleDeleteExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};
