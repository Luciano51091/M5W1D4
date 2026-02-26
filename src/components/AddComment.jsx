import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

function AddComment({ asin }) {
  const [formData, setFormData] = useState({
    comment: "",
    rate: "",
    elementId: asin,
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSubmit = () => {};
  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="comment">
          <Form.Label>Comment</Form.Label>
          <Form.Control required type="text" placeholder="comment" name="comment" onChange={handleChange} />
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="rate">
          <Form.Label>rate</Form.Label>
          <Form.Control required type="text" placeholder="rate" name="rate" onChange={handleChange} />
        </Form.Group>
      </Row>
    </Form>
  );
}
export default AddComment;
