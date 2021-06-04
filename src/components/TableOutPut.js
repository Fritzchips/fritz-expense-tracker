import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function TableOutPut({ expenseList, requestListModify }) {
  const callBackHandler = (e) => {
    expenseList.splice(e.target, 1);
    requestListModify([...expenseList]);
  };

  return (
    <>
      {expenseList ? (
        expenseList.map((items) => (
          <React.Fragment key={items.id}>
            <tr>
              <td>{items.name}</td>
              <td>{items.date}</td>
              <td>{items.payment}</td>
              <td>$ {items.amount}</td>
              <td>{items.detail}</td>
              <td>
                <Button variant="warning" onClick={callBackHandler}>
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

export default TableOutPut;
