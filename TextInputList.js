
import React, { useState } from 'react';

const TextInputList = () => {
  const [input, setInput] = useState('');
  const [listItems, setListItems] = useState([]);

  const handleBlur = () => {
    if (input.trim() !== '') {
      setListItems([...listItems, input]);
      setInput('');
    }
  };

  return (
    <div>
      <h2>Text Input with onBlur</h2>
      <input
        type="text"
        placeholder="Enter item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onBlur={handleBlur}
      />

      {listItems.length > 0 && (
        <ol>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default TextInputList;
