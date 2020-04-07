import React from 'react';
import BookContextProvider from './contexts/BookContext';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="app-container">
      <BookContextProvider>
        <NavBar />
      </BookContextProvider>
    </div>
  );
}

export default App;
