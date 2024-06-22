import React, { useEffect, useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      first_name: 'Diann',
      last_name: 'Dobbs',
      gender: 'Female',
      age: 42,
      active: true,
    },
    {
      id: 2,
      first_name: 'Corbett',
      last_name: 'Eydel',
      gender: 'Male',
      age: 62,
      active: false,
    },
    {
      id: 3,
      first_name: 'Jerrold',
      last_name: 'MacLaverty',
      gender: 'Male',
      age: 51,
      active: false,
    },
    {
      id: 4,
      first_name: 'Erminie',
      last_name: 'Sweetmore',
      gender: 'Genderqueer',
      age: 40,
      active: true,
    },
    {
      id: 5,
      first_name: 'Elvera',
      last_name: 'Barstowk',
      gender: 'Female',
      age: 26,
      active: false,
    },
    {
      id: 6,
      first_name: 'Vinnie',
      last_name: 'Smitton',
      gender: 'Male',
      age: 27,
      active: false,
    },
    {
      id: 7,
      first_name: 'Tove',
      last_name: 'Chue',
      gender: 'Female',
      age: 78,
      active: false,
    },
    {
      id: 8,
      first_name: 'Pren',
      last_name: 'Blakeley',
      gender: 'Male',
      age: 39,
      active: true,
    },
    {
      id: 9,
      first_name: 'Marcile',
      last_name: 'Staton',
      gender: 'Female',
      age: 77,
      active: false,
    },
    {
      id: 10,
      first_name: 'Ludovico',
      last_name: 'Trelease',
      gender: 'Male',
      age: 78,
      active: false,
    },
    {
      id: 11,
      first_name: 'Max',
      last_name: 'Spanton',
      gender: 'Bigender',
      age: 28,
      active: false,
    },
    {
      id: 12,
      first_name: 'Adda',
      last_name: 'Coop',
      gender: 'Female',
      age: 24,
      active: true,
    },
    {
      id: 13,
      first_name: 'Al',
      last_name: 'Guillain',
      gender: 'Male',
      age: 29,
      active: false,
    },
    {
      id: 14,
      first_name: 'Berny',
      last_name: 'Hornung',
      gender: 'Male',
      age: 50,
      active: false,
    },
    {
      id: 15,
      first_name: 'Bertie',
      last_name: 'Godlee',
      gender: 'Female',
      age: 22,
      active: true,
    },
    {
      id: 16,
      first_name: 'Carol-jean',
      last_name: 'Garmston',
      gender: 'Female',
      age: 29,
      active: false,
    },
    {
      id: 17,
      first_name: 'Tommy',
      last_name: 'Petasch',
      gender: 'Female',
      age: 48,
      active: false,
    },
    {
      id: 18,
      first_name: 'Del',
      last_name: 'Emeney',
      gender: 'Female',
      age: 77,
      active: false,
    },
    {
      id: 19,
      first_name: 'Krystyna',
      last_name: 'Simester',
      gender: 'Female',
      age: 44,
      active: true,
    },
    {
      id: 20,
      first_name: 'Loise',
      last_name: 'Carrel',
      gender: 'Female',
      age: 45,
      active: false,
    },
    {
      id: 21,
      first_name: 'Aldwin',
      last_name: 'Sautter',
      gender: 'Male',
      age: 60,
      active: true,
    },
    {
      id: 22,
      first_name: 'Tonya',
      last_name: 'Coughtrey',
      gender: 'Genderfluid',
      age: 21,
      active: false,
    },
    {
      id: 23,
      first_name: 'My',
      last_name: 'Gelsthorpe',
      gender: 'Male',
      age: 74,
      active: true,
    },
    {
      id: 24,
      first_name: 'Ruthi',
      last_name: 'Mulvin',
      gender: 'Female',
      age: 69,
      active: true,
    },
    {
      id: 25,
      first_name: 'Reggy',
      last_name: 'Geach',
      gender: 'Male',
      age: 61,
      active: false,
    },
    {
      id: 26,
      first_name: 'Margalit',
      last_name: 'Kinver',
      gender: 'Female',
      age: 34,
      active: true,
    },
    {
      id: 27,
      first_name: 'Evangeline',
      last_name: 'Scough',
      gender: 'Female',
      age: 38,
      active: true,
    },
    {
      id: 28,
      first_name: 'Frankie',
      last_name: 'Aymeric',
      gender: 'Male',
      age: 67,
      active: false,
    },
    {
      id: 29,
      first_name: 'Torre',
      last_name: 'Antonnikov',
      gender: 'Male',
      age: 37,
      active: true,
    },
    {
      id: 30,
      first_name: 'Lance',
      last_name: 'Slyne',
      gender: 'Male',
      age: 76,
      active: true,
    },
  ]);

  const [inputs, setInputs] = useState({
    first_name: '',
    last_name: '',
    age: '',
    gender: '',
  });
  const { first_name, last_name, age, gender } = inputs;

  const [resetGenderSelect, setResetGenderSelect] = useState(false);

  const onChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleGenderChange = (selectedGender) => {
    setInputs({
      ...inputs,
      gender: selectedGender,
    });
  };

  const nextId = useRef(31);

  const onCreate = () => {
    console.log(nextId.current, first_name, last_name, gender, age);
    const user = {
      id: nextId.current,
      first_name: first_name,
      last_name: last_name,
      age: age,
      gender: gender,
      //...inputs
    };
    //setUsers([...users, user]);
    setUsers(users.concat(user));
    setInputs({ first_name: '', last_name: '', age: '', gender: '' });
    //users.push({
    //console.log(nextId.current);
    //nextId.current += 1;

    setResetGenderSelect(true);
    setTimeout(() => setResetGenderSelect(false), 0); // Reset the reset state after a moment
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user,
      ),
    );
  };

  return (
    <>
      <CreateUser
        first_name={first_name}
        last_name={last_name}
        age={age}
        gender={gender}
        onChange={onChange}
        onCreate={onCreate}
        reset={resetGenderSelect}
        setGender={handleGenderChange}
      />

      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
};

export default Users;
