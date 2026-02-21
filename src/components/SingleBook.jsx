import { Button, Card, Col } from "react-bootstrap";

function SingleBook({ book }) {
  return (
    <>
      <Col sm={6} md={4} lg={3}>
        <Card>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.price}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default SingleBook;
