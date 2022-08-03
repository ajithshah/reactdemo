import React from 'react';
import DistComp from './distComp';

function Props({name, discription, price}) {
  return (
    <div>
      <DistComp name={name} discription={discription}/>
      <h1>${price}</h1>
    </div>
  );
}

export default Props;
