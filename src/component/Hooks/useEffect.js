import React, {useState, useEffect} from 'react';

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <h1>React Hooks Use Effect</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me <span>{count}</span>
      </button>
    </div>
  );
}
export default UseEffect;
