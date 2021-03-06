import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function InputForm({ expenseList, setExpenseList }) {
  const [itemName, setItemName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [paymentType, setPaymentType] = useState("Cash");
  const [location, setLocation] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      itemName,
      date,
      amount,
      paymentType,
      location,
    };

    setExpenseList([...expenseList, newExpense]);
    setItemName("");
    setDate("");
    setAmount(0);
    setPaymentType("Cash");
    setLocation("");
  };

  return (
    <Form onSubmit={submitHandler} id="expense-input-form">
      <Row>
        <Form.Group as={Col} controlId="formName">
          <Form.Label id="label-name">Item Name: </Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="What did you buy?"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="formLocation">
          <Form.Label id="label-location">Location: </Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Where did you buy it?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></Form.Control>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="formDate">
          <Form.Label id="label-date">Date: </Form.Label>
          <Form.Control
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formAmount">
          <Form.Label id="label-amount">Amount: </Form.Label>
          <Form.Control
            type="number"
            min="0"
            required
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formType">
          <Form.Label id="label-payment">Payment Type: </Form.Label>
          <Form.Control
            as="select"
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
          >
            <option value="Cash">Cash</option>
            <option value="Master Card">Master Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Check">Check</option>
          </Form.Control>
        </Form.Group>
      </Row>
      <div className="text-center ">
        <Button type="submit" id="expense-submit-btn">
          Add Expense
        </Button>
      </div>
    </Form>
  );
}

export default InputForm;
