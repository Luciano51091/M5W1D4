import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav.jsx";
import Welcome from "./components/Welcome.jsx";
import MyFooter from "./components/MyFooter.jsx";
import books from "./data/fantasy.json";

import "./App.css";
import AllTheBooks from "./components/AllTheBooks.jsx";
import { useState } from "react";

function App() {
  const [filteredBooks, setFilteredBooks] = useState(books);
  return (
    <>
      <MyNav setFilteredBooks={setFilteredBooks} />

      <Welcome />

      <AllTheBooks filteredBooks={filteredBooks} />

      <MyFooter />
    </>
  );
}

export default App;
