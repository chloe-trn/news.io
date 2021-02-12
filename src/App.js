import React from 'react';
import NewsContextProvider from './NewsContext';
import NewsContent from './components/NewsContent';
import './App.css';

function App() {
  return (
    <NewsContextProvider>
      <NewsContent/>
    </NewsContextProvider>
  );
}

export default App;
