import React from 'react';
import BookContextProvider from './contexts/BookContext';
import NavBar from './components/NavBar';
import BookList from './components/BookList';

function App() {
  return (
    <div className="app-container">
      <BookContextProvider>
        <NavBar />
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
