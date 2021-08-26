import React, { useEffect, useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import Container from "react-bootstrap/Container";
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
      <Container>
        <h1 className="text-center head-modify">Expense Tracker</h1>
        <InputForm expenseList={expenseList} setExpenseList={setExpenseList} />
        <br></br>
        <ExpenseTable
          expenseList={expenseList}
          setExpenseList={setExpenseList}
        />
      </Container>
    </div>
  );
}

export default App;
