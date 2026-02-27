import { Container, Row, Form, InputGroup } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { useState } from "react";

function AllTheBooks({ filteredBooks }) {
  // const [search, setSearch] = useState("");

  return (
    <Container>
      {/* <InputGroup className="mb-3">
        <Form.Control 
        onKeyUp={filterBooks} 
        placeholder="Cerca un libro" 
        className="search-input" />
      </InputGroup> */}
      <Row>
        {filteredBooks.map((myBook) => (
          <SingleBook key={myBook.asin} book={myBook} />
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
