import React, { useState } from 'react';

const HeightButton = () => {
  const [height, setHeight] = useState(0);
  console.log('HeightButton');
  return (
    <button onClick={(e) => setHeight((prevHeight) => prevHeight + 1)}>
      height : {height}
    </button>
  );
};

export default HeightButton;
