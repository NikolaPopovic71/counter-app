import React, { useState } from 'react';

function Counter({ title }) {
    const [count, setCount] = useState(0);
  
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
  
    return (
      <div>
        <h2>{title}</h2> {/* Display the custom title */}
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }
  

export default Counter;
