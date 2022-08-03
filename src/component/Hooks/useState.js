import React, {useState} from 'react';

function initialvalue() {
  console.log('Function Clicked');
  return 0;
}

function Usestate() {
  const [name, setName] = useState('Ajith');
  const [flag, setFlag] = useState(false);
  const [steps, setSteps] = useState(initialvalue());
  const [names, setNames] = useState([]);

  function changeName() {
    return setFlag(!flag);
  }
  function increment() {
    setSteps((prevState) => prevState + 1);
    setSteps((prevState) => prevState + 1);
  }
  function decrement() {
    setSteps((prevState) => prevState - 1);
  }
  function addNames(e) {
    e.preventDefault();
    if (name.length==0) {
      return window.confirm('sometext');
    }
    setNames([...names, {id: names.length, name}]);
    setName('');
  }
  return (
    <div>
      <h1>React Hooks Use State</h1>

      <div><h1>Hello {flag ? name : ''}</h1></div>
      <button onClick={changeName}>Click Me</button>
      <hr></hr>
      <button onClick={increment}>+</button>
      <div>{steps}</div>
      <button onClick={decrement}>-</button>
      <hr></hr>

      <form onSubmit={addNames}>
        <input
          type="text"
          value={name}
          placeholder="Add Name"
          onChange={(e) => setName(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <hr></hr>

      <ul>
        {names.map((item) =>
          <li key={item.ld}>{item.name}&nbsp;{item.name.length}</li>,
        )}
      </ul>
      <hr></hr>
    </div>
  );
}

export default Usestate;
