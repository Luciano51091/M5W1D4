import books from "../data/fantasy.json";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function AllTheBooks() {
  console.log(books);

  return (
    <Container>
      <Row>
        {books.map((book) => (
          <Col sm={6} md={4} lg={3} key={book.asin}>
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.price}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
