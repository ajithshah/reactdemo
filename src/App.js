import './App.css';
import React from 'react';
// import Props from './component/Props/Props';
// import NavigationBar from './component/Navbar/navbar.jsx';
// import Main from './component/Main/main.jsx';
// import EventBind from './component/Event/Event.jsx';

// function initialvalue() {
//   console.log('Fnuction Clicked');
//   return 0;
// }

function App() {
  // eslint-disable-next-line no-unused-vars
  // const [name, setName] = useState('Ajith');
  // const [flag, setFlag] = useState(false);
  // const [steps, setSteps] = useState(initialvalue());
  // const [names, setNames] = useState([]);

  // function changeName() {
  //   return setFlag(!flag);
  // }
  // function increment() {
  //   setSteps((prevState) => prevState + 1);
  //   setSteps((prevState) => prevState + 1);
  // }
  // function decrement() {
  //   setSteps((prevState) => prevState - 1);
  // }
  // function addNames(e) {
  //   e.preventDefault();
  //   if (name.length==0) {
  //     return window.confirm('sometext');
  //   }
  //   setNames([...names, {id: names.length, name}]);
  //   setName('');
  // }
  return (
    <div className="App">
      <h1>React demo</h1>
      {/* <NavigationBar /> */}
      {/* <EventBind/> */}
      {/* <Main></Main> */}

      {/* <Props
        name="Google "
        discription="Company"
        price={120.8}
      /> */}

      {/* REACT HOOKS */}
      {/* USER STATE */}
      {/* <div><h1>Hello {flag ? name : ''}</h1></div>
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
      <hr></hr> */}
      {/* USER STATE */}

      {/* USER EFFECT */}

      {/* USER EFFECT */}
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

export default App;
