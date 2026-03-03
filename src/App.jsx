import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav.jsx";
import Welcome from "./components/Welcome.jsx";
import MyFooter from "./components/MyFooter.jsx";
import books from "./data/fantasy.json";
import "./App.css";
import AllTheBooks from "./components/AllTheBooks.jsx";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./context/ThemeContextProvider.jsx";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const { theme, toggleTheme } = useContext(ThemeContext);
  useEffect(() => {
    console.log(theme);
  }, [theme]);

  // toggleTheme();

  return (
    <>
      <MyNav setFilteredBooks={setFilteredBooks} />

      <Welcome />
      <Container>
        <Row>
          <Col sm={8}>
            <AllTheBooks filteredBooks={filteredBooks} />
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
