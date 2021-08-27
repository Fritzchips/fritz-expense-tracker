import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function ExpenseRow({ expenseList, setExpenseList }) {
  const deleteExpense = (id) => {
    setExpenseList(expenseList.filter((expense) => expense.id !== id));
  };

  return (
    <>
      {expenseList ? (
        expenseList.map((item) => (
          <React.Fragment key={item.id}>
            <tr className="expense-row">
              <td>{item.itemName}</td>
              <td>{item.date}</td>
              <td>{item.paymentType}</td>
              <td>$ {item.amount}</td>
              <td>{item.location}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => deleteExpense(item.id)}
                  id="expense-btn"
                >
                  Delete
                </Button>
              </td>
            </tr>
          </React.Fragment>
        ))
      ) : (
        <></>
      )}
    </>
  );
}

export default ExpenseRow;
