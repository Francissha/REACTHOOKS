import { useEffect, useState } from 'react';

export default function Demo() {
  const [count, setCount] = useState(0);

useEffect(() =>{
  
}, []);

  return (
    <div className="tutorial">
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
