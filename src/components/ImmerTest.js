import React from 'react';
import { produce } from 'immer';

window.produce = produce;

const ImmerTest = () => {
  const state = {
    number: 1,
    dontChangeMe: 2,
  };

  const nextState = produce(state, (draft) => {
    draft.number += 1;
  });

  console.log(nextState);

  const array = [
    { id: 1, text: 'hello' },
    { id: 2, text: 'bye' },
    { id: 3, text: 'lalala' },
    { id: 4, text: 'blahblahblah' },
  ];

  const nextArray = produce(array, (draft) => {
    draft.push({ id: 5, text: 'hello5' });
    draft[0].text = draft[0].text + 'World';
  });
  console.log(nextArray);
  console.log(array);

  return <div>Hello</div>;
};

export default ImmerTest;
