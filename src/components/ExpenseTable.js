import React from "react";
import Table from "react-bootstrap/Table";
import ExpenseRow from "./ExpenseRow";
import ExpenseTotal from "./ExpenseTotal";

function ExpenseTable({ expenseList, setExpenseList }) {
  return (
    <Table variant="dark">
      <thead>
        <tr className="table-header">
          <th>Name</th>
          <th>Date</th>
          <th>Payment Type</th>
          <th>Amount</th>
          <th>Location</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <ExpenseRow setExpenseList={setExpenseList} expenseList={expenseList} />
      </tbody>
      <tfoot>
        <ExpenseTotal
          expenseList={expenseList}
          setExpenseList={setExpenseList}
        />
      </tfoot>
    </Table>
  );
}

export default ExpenseTable;
