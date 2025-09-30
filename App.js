import React, { useState, useEffect } from 'react';

function LifecycleCheck() {
  useEffect(() => {
    console.log('LifecycleCheck component mounted');

    return () => {
      console.log('LifecycleCheck component unmounted');
    };
  }, []);

  return (
    <div>
      <h2>Lifecycle Check (useEffect)</h2>
      <p>Open console to see lifecycle logs.</p>
      <hr />
    </div>
  );
}

function CounterWithTable() {
  const [count, setCount] = useState(11);

  // Log when count changes
  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]);

  // Generate multiplication table rows
  const tableRows = [];
  for (let i = 1; i <= 10; i++) {
    tableRows.push(
      <div
        key={i}
        style={{
          border: '1px solid gray',
          width: '150px',
          padding: '4px',
          margin: '2px 0',
          textAlign: 'center',
        }}
      >
        {count} x {i} = {count * i}
      </div>
    );
  }

  return (
    <div>
      <h3>Counter with Multiplication Table</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h4>Table of {count}</h4>
      <div>{tableRows}</div>
      <hr />
    </div>
  );
}

function TextInputWithOnBlur() {
  const [items, setItems] = useState(['DISHA', 'Dikshita', 'fgvhngvfnhg']);
  const [inputValue, setInputValue] = useState('');

  // Handle onBlur event to add item to the list
  const handleBlur = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
      console.log(`Added new item: ${inputValue.trim()}`);
    }
  };

  return (
    <div>
      <h3>Text Input with onBlur</h3>
      <input
        type="text"
        placeholder="Enter item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleBlur}
      />
      <ol>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React Hooks Assignment</h1>
      <LifecycleCheck />
      <CounterWithTable />
      <TextInputWithOnBlur />
    </div>
  );
}

export default App;
