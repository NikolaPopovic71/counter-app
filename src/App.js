import React from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <Counter title="Counter 1" />
      <Counter title="Counter 2" />
    </div>
  );
}



export default App;
