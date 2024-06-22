import React from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import History from './components/History';
import BlackBlock from './components/BlackBlock';
import Dishes from './components/Dishes';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Cards />
      <History />
      <BlackBlock />
      <Dishes />
    </div>
  );
};

export default App;
