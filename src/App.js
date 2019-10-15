import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CardContent from './components/CardContent/CardContent';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <CardContent
        type='home'
        header='Welcome to Pumped Up Kicks'
        description='Pumped Up Kicks aims to be an open source solution for securing a personal pair of shoes amidst a world of automated bots purchasing up all of the sweet new kicks.'
      />
    </div>
  );
}

export default App;
