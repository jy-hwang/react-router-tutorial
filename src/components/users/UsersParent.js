import React, {
  useRef,
  useReducer,
  useMemo,
  useCallback,
  createContext,
} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from '../../hooks/useInputs';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중 ...');
  return users.filter((user) => user.active).length;
}

function UsersParent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;

  const [form, onChange, reset] = useInputs({
    username: '',
    email: '',
  });

  const { username, email } = form;

  const nextId = useRef(5);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    nextId.current += 1;
    reset();
  }, [username, email, reset]);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
      <div>활성 사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default React.memo(UsersParent);

export const UserDispatch = createContext(null);

const initialState = {
  users: [
    { id: 1, username: 'jackie', email: 'jackie@abc.com', active: true },
    { id: 2, username: 'michael', email: 'michael@abc.com', active: false },
    { id: 3, username: 'tester', email: 'tester@abc.com', active: false },
    { id: 4, username: 'liz', email: 'liz@abc.com', active: true },
  ],
};

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user,
        ),
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      throw new Error('Unhandled action');
  }
}
