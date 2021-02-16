import React from 'react';
import Header from './components/Header/Header';
import NewsContextProvider from './NewsContext';
import NewsSort from './components/News/NewsSort';
import NewsContent from './components/News/NewsContent';
import './App.scss';

function App() {
  return (
    <NewsContextProvider>
      <Header/>
      <NewsSort/>
      <NewsContent/>
    </NewsContextProvider>
  );
}

export default App;
