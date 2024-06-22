import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중 ...');
  return users.filter((user) => user.active).length;
}

function UsersParent() {
  console.log('rerendering..');
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs],
  );

  const [users, setUsers] = useState([
    { id: 1, username: 'jackie', email: 'jackie@abc.com', active: true },
    { id: 2, username: 'michael', email: 'michael@abc.com', active: false },
    { id: 3, username: 'tester', email: 'tester@abc.com', active: false },
    { id: 4, username: 'liz', email: 'liz@abc.com', active: true },
  ]);
  const nextId = useRef(5);

  const onCreate = useCallback(() => {
    console.log(nextId.current, username, email);

    const user = {
      username: username,
      email: email,
      id: nextId.current,
    };

    setUsers((users) => users.concat(user));
    setInputs({ username: '', email: '' });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user,
      ),
    );
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default React.memo(UsersParent);
