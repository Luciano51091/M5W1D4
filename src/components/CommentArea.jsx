import { useEffect, useState } from "react";
import AddComponent from "./AddComponent";
import CommentList from "./CommentList";

function CommentArea({ book }) {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${book.asin}/comments/`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTliNjdjMGFmZWY0YzAwMTUwODI3OGQiLCJpYXQiOjE3NzE3OTIzMjAsImV4cCI6MTc3MzAwMTkyMH0.Slf12ay8acBWTsOXvCxtM2jfHXo8OKthNh7H5LPfTq8",
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);
  return (
    <>
      <AddComponent />
      <CommentList />
    </>
  );
}

export default CommentArea;
