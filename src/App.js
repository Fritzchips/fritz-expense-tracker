import React, { useEffect, useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import Container from "react-bootstrap/Container";
import TableContainer from "./components/TableContainer";

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

  const removeTableValue = (childList) => {
    setExpenseList([...childList]);
  };

  const addNewItem = (childInfo) => {
    expenseList
      ? setExpenseList([...expenseList, childInfo])
      : setExpenseList([childInfo]);
  };

  return (
    <div className="App">
      <Container>
        <h1 className="text-center head-modify">Expense Tracker</h1>
        <InputForm callBackAddItem={addNewItem} />
        <br></br>
        <TableContainer
          expenseList={expenseList}
          tableListChange={removeTableValue}
        />
      </Container>
    </div>
  );
}

export default App;
