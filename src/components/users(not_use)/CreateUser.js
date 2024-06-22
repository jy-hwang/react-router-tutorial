import React, { useState } from 'react';
import GenderSelect from './GenderSelect';

function CreateUser({
  first_name,
  last_name,
  age,
  gender,
  onChange,
  onCreate,
  reset,
  setGender,
}) {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <div>
      <input
        name="first_name"
        placeholder="firstName"
        onChange={onChange}
        value={first_name}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="last_name"
        placeholder="lastName"
        onChange={onChange}
        value={last_name}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        name="age"
        min={1}
        max={99}
        placeholder="age"
        onChange={onChange}
        value={age}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <GenderSelect reset={reset} setGender={setGender} />
      <button
        onClick={onCreate}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        등록
      </button>
    </div>
  );
}

export default CreateUser;
