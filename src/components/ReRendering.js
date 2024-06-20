import React, { useState } from 'react';
import WeightButton from './WeightButton';
import HeightButton from './HeightButton';

const ReRendering = () => {
  //const [weight, setWeight] = useState(0);
  //const [height, setHeight] = useState(0);
  console.log('ReRendering');
  return (
    <div>
      <h1>App 컴포넌트</h1>
      {/* <button onClick={(e) => setWeight((prevWeight) => prevWeight + 1)}>
        weight : {weight}
      </button> */}
      {/* <button onClick={(e) => setHeight((prevHeight) => prevHeight + 1)}>
        height : {height}
      </button> */}
      <WeightButton />
      <HeightButton />
    </div>
  );
};

export default ReRendering;
