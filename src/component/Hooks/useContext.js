import '../../App.css';
import React from 'react';
import Fchile from './Fchile';

function UseContext({counter}) {
  return (
    <div className='App'>
      <h1>React Hooks Use Context</h1>
      <p>{counter}</p>
      <Fchile counter={counter}/>
    </div>
  );
}

export default UseContext;
