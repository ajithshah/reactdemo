import React, {useState} from 'react';

function initialvalue() {
  return 0;
}

function UseState() {
  const [name, setName] = useState('Ajith');
  const [changes, setChanges] = useState('');
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
  function change1() {
    setChanges('hi');
  }
  function change2() {
    setChanges('hii');
  }
  function change3() {
    setChanges('hiii');
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
      <button onClick={change1}>Change 1</button>
      <button onClick={change2}>Change 2</button>
      <button onClick={change3}>Change 3</button>
      <div>{changes}</div>
      <hr></hr>
    </div>
  );
}

export default UseState;
