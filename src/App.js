import React, { useEffect, useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  const [expenseList, setExpenseList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("list")) {
      setExpenseList(JSON.parse(localStorage.getItem("list")));
    }
  }, []);

  useEffect(() => {
    if (expenseList) {
      localStorage.setItem("list", JSON.stringify(expenseList));
    }
  }, [expenseList]);

  return (
    <div className="App">
      <h1 className="text-center head-modify">Expense Tracker</h1>
      <InputForm expenseList={expenseList} setExpenseList={setExpenseList} />
      <ExpenseTable expenseList={expenseList} setExpenseList={setExpenseList} />
    </div>
  );
}

export default App;
