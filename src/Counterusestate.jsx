import { useState, memo } from 'react';

const Counter = () => {
const [counter, setCounter] = useState(0);    
    
  return (
    <div>
      <h2>Counter</h2>
      <p> {counter}</p>      
      <button onClick={() => setCounter(counter => counter>=5?counter:counter+ 1 )}>Increment</button>
      <button onClick={() => setCounter(counter=> counter>0?counter - 1:0)}>Decrement</button>
    </div>
  );
};

export default memo(Counter);