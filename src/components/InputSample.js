import React, { useState, useRef } from 'react';

const InputSample = () => {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const nameInput = useRef();

  const { name, nickname } = inputs;

  const onChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    // const name = e.target.name;
    // const value = e.target.value;
    // console.log(e);
    const { name, value } = e.target;
    // const nextInputs = { ...inputs};
    setInputs({
      ...inputs,
      [name]: value, //nextInputs[name] = value
    });
  };

  const onReset = (e) => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  };

  return (
    <>
      <div className="gap-4">
        <input
          name="name"
          placeholder="이름"
          onChange={onChange}
          value={name}
          ref={nameInput}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="nickname"
          placeholder="닉네임"
          onChange={onChange}
          value={nickname}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={onReset}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          초기화
        </button>
      </div>
      <div>
        <b>값 : </b>
        이름 (닉네임) {name} ({nickname})
      </div>
    </>
  );
};

export default InputSample;
