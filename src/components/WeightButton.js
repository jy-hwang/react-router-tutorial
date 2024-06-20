import React, { useState } from 'react';

const WeightButton = () => {
  const [weight, setWeight] = useState(0);
  console.log('WeightButton');
  return (
    <button onClick={(e) => setWeight((prevWeight) => prevWeight + 1)}>
      weight : {weight}
    </button>
  );
};

export default WeightButton;
