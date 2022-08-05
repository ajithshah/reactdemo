import './App.css';
import React, {useState} from 'react';
// import Props from './component/Props/Props';
// import NavigationBar from './component/Navbar/navbar.jsx';
// import Main from './component/Main/main.jsx';
// import EventBind from './component/Event/Event.jsx';
// import UseState from './component/Hooks/useState';
// import UseEffect from './component/Hooks/useEffect';
import UseContext from './component/Hooks/useContext';

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () =>{
    setCounter(counter + 1);
  };
  const decrement = () =>{
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <h1>React</h1>
      {/* <Props
        name="Google "
        discription="Company"
        price={120.8}
      /> */}
      <h3>{counter}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      {/* <Props/> */}
      {/* <NavigationBar/> */}
      {/* <Main/> */}
      {/* <EventBind/> */}
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      <UseContext counter={counter}/>

    </div>
  );
}


export default App;
