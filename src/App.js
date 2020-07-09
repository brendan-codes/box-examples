import React, { useState } from 'react';
import './App.css';
import Counter from "./components/Counter";
import Form from './components/Form';
import Display from './components/Display';
import Boxes from './components/Boxes/Boxes';

function App() {

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Boxes />
    </div>
  );
}

export default App;
