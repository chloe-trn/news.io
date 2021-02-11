import React from 'react';
import NewsContextProvider from './NewsContext';
import './App.css';

function App() {
  return (
    <NewsContextProvider>
      Hello World
    </NewsContextProvider>
  );
}

export default App;
