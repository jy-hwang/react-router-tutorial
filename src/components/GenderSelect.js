// src/GenderSelect.js
import React, { useEffect, useState } from 'react';
import '../assets/css/GenderSelect.css';

const GenderSelect = ({ reset, setGender }) => {
  const [gender, updateGender] = useState('');

  const handleChange = (event) => {
    const selectedGender = event.target.value;
    updateGender(selectedGender);
    setGender(selectedGender); // 부모 컴포넌트의 상태를 업데이트
  };
  useEffect(() => {
    if (reset) {
      setGender('');
    }
  }, [reset]);

  return (
    <div className="select-container">
      <label htmlFor="gender">Select Gender: </label>
      <select id="gender" value={gender} onChange={handleChange}>
        <option value="">Select...</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Non-binary">Non-binary</option>
        <option value="Genderqueer">Genderqueer</option>
        <option value="Genderfluid">Genderfluid</option>
        <option value="Ggender">Agender</option>
        <option value="Other">Other</option>
      </select>
      {gender && <p>You selected: {gender}</p>}
    </div>
  );
};

export default GenderSelect;
