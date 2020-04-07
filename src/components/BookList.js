import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetail from "./BookDetail";

const BookList = () => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <ul className="book-list">
      {books.map((book) => (
        <BookDetail book={book} key={book.id} />
      ))}
    </ul>
  ) : (
    <div className="empty">No books to read. Hello free time!</div>
  );
};

export default BookList;
