import React, { useState } from 'react';
import './Counter.css'; // Import the CSS file for styling

function Counter({ title }) {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
      <div className="counter-container">
        <h2 className="counter-title">{title}</h2>
        <h1 className="counter-display">Count: {count}</h1>
        <button className="counter-button increment" onClick={increment}>Increment</button>
        <button className="counter-button decrement" onClick={decrement}>Decrement</button>
      </div>
    );
}

export default Counter;
