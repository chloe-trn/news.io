import React from 'react';
import Header from './components/Header/Header';
import NewsContextProvider from './NewsContext';
import NewsContent from './components/News/NewsContent';
import './App.scss';

function App() {
  return (
    <NewsContextProvider>
      <Header/>
      <NewsContent/>
    </NewsContextProvider>
  );
}

export default App;
