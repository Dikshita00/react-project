import React, { useState, useEffect } from 'react';

function LifecycleDemo() {
  const [count, setCount] = useState(0);

  // useEffect with no dependencies: runs once on mount
  useEffect(() => {
    console.log('Component mounted');

    // Optional cleanup function: runs on unmount
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  
  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default LifecycleDemo;
