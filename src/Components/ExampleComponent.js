
import React, { useState } from 'react';

function ExampleComponent() {
  const [list, setList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setList([...list, event.target.value]);
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item} {console.log({item})}</li>
          
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="item" />
        <button type="submit">Add item</button>
      </form>
    </div>
  );
}

export default ExampleComponent;
