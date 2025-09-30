
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [table, setTable] = useState([]);

  const handleIncrement = () => setCount(count + 1);

  useEffect(() => {
    if (count === 0) return;

    const tempTable = [];
    for (let i = 1; i <= 10; i++) {
      tempTable.push(`${count} x ${i} = ${count * i}`);
    }
    setTable(tempTable);
  }, [count]);

  return (
    <div>
      <h2>Counter with Multiplication Table</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>

      {table.length > 0 && (
        <div>
          <h3>Table of {count}</h3>
          <table border="1" cellPadding="5">
            <tbody>
              {table.map((item, index) => (
                <tr key={index}>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Counter;
