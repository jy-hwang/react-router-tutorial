import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({
      type: 'INCREMENT',
    });
  };

  const onDecrease = () => {
    dispatch({
      type: 'DECREMENT',
    });
  };

  return (
    <div>
      <h1 className="text-5xl">{number}</h1>
      <button
        onClick={onIncrease}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        +
      </button>
      <button
        onClick={onDecrease}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        -
      </button>
    </div>
  );
}

export default Counter;
