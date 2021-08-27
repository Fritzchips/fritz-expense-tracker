import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function ExpenseTotal({ expenseList, setExpenseList }) {
  const deleteAllItems = () => setExpenseList([]);

  let totalExpenses = 0;
  if (expenseList) {
    expenseList.map((items) => {
      return (totalExpenses += parseFloat(items.amount));
    });
  }

  return (
    <>
      <tr className="font-italic table-total">
        <td></td>
        <td>Summary </td>
        <td>Number of Items: {expenseList.length}</td>
        <td>Total: $ {parseFloat(totalExpenses).toFixed(2)}</td>
        <td></td>
        <td>
          <Button variant="danger" onClick={deleteAllItems} id="delete-all-btn">
            Delete All
          </Button>
        </td>
      </tr>
    </>
  );
}

export default ExpenseTotal;
