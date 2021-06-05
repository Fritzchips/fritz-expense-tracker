import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function InputForm({ callBackAddItem }) {
  const blankForm = {
    id: Date.now(),
    name: "",
    date: "",
    amount: "",
    payment: "Cash",
    detail: "",
  };
  const [itemInfo, setItemInfo] = useState(blankForm);

  const submitHandler = (e) => {
    e.preventDefault();
    callBackAddItem(itemInfo);
    setItemInfo(blankForm);
  };

  return (
    <Form onSubmit={submitHandler}>
      <Row>
        <Form.Group as={Col} controlId="formName">
          <Form.Label>Name: </Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Purchase was made in?"
            value={itemInfo.name}
            onChange={(e) => setItemInfo({ ...itemInfo, name: e.target.value })}
          ></Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="formDetail">
          <Form.Label>Details: </Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Add comments..."
            value={itemInfo.detail}
            onChange={(e) =>
              setItemInfo({ ...itemInfo, detail: e.target.value })
            }
          ></Form.Control>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="formDate">
          <Form.Label>Date: </Form.Label>
          <Form.Control
            type="date"
            required
            value={itemInfo.date}
            onChange={(e) => setItemInfo({ ...itemInfo, date: e.target.value })}
          ></Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formAmount">
          <Form.Label>Amount: </Form.Label>
          <Form.Control
            type="number"
            min="0"
            required
            step="0.01"
            value={itemInfo.amount}
            onChange={(e) =>
              setItemInfo({ ...itemInfo, amount: e.target.value })
            }
          ></Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formType">
          <Form.Label>Type: </Form.Label>
          <Form.Control
            as="select"
            value={itemInfo.payment}
            onChange={(e) =>
              setItemInfo({ ...itemInfo, payment: e.target.value })
            }
          >
            <option value="Cash">Cash</option>
            <option value="Master Card">Master Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Check">Check</option>
          </Form.Control>
        </Form.Group>
      </Row>
      <div className="text-center ">
        <Button type="submit">Add Expense</Button>
      </div>
    </Form>
  );
}

export default InputForm;
