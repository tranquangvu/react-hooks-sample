import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'book1', author: 'ben1', id: 1 },
    { title: 'book2', author: 'ben2', id: 2 }
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  }

  const removeBook = (removedId) => {
    setBooks(books.filter(({ id }) => id !== removedId));
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      { props.children }
    </BookContext.Provider>
  );
}

export default BookContextProvider;
