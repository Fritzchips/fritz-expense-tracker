import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function TableOutPut({ expenseList, requestListModify }) {
  const callBackHandler = (e) => {
    let childList = [...expenseList];
    console.log("childfirst: ", childList);
    /*  let index = childList.indexOf(e.currentTarget); */
    console.log("index: ", e.currentTarget);
    childList.splice(e.currentTarget, 1);
    console.log("childlast: ", childList);
    console.log("childlast: ", ...childList);
    requestListModify([...childList]);
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
