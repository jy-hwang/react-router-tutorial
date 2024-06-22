import React, { useEffect } from 'react';

const UserList = ({ users, onRemove, onToggle }) => {
  /*
  useEffect(() => {
    console.log('컴포넌트가 화면에 나타남');
    // props -> state
    // REST API
    // D3 Video.js
    // setInterval, setTimeout
    return () => {
      // clearInterval, clearTimeout
      // 라이브러리 인스턴스 제거
      console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []);
*/

  useEffect(() => {
    console.log('users 값이 설정됨');
    console.log(users);
    return () => {
      console.log('users 값이 바뀌기전');
      console.log(users);
    };
  }, [users]);

  return (
    <div className="overflow-x-auto">
      {/* <div>
        <b>{users[0].first_name}</b>
        <span>({users[0].last_name})</span>
      </div>
      <div>
        <b>{users[1].first_name}</b>
        <span>({users[1].last_name})</span>
      </div>
      <div>
        <b>{users[2].first_name}</b>
        <span>({users[2].last_name})</span>
      </div> */}
      {/* 
      <div>
        <User user={users[0]} />
        <User user={users[1]} />
        <User user={users[2]} />
      </div> */}

      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="text-left py-3 px-4 font-semibold text-sm">id</th>
            <th className="text-left py-3 px-4 font-semibold text-sm">
              first_name
            </th>
            <th className="text-left py-3 px-4 font-semibold text-sm">
              last_name
            </th>
            <th className="text-left py-3 px-4 font-semibold text-sm">
              gender
            </th>
            <th className="text-left py-3 px-4 font-semibold text-sm">age</th>
            <th className="text-left py-3 px-4 font-semibold text-sm">삭제</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className="border-b hover:bg-gray-50" key={user.id}>
              <td
                className={`py-3 px-4 ${user.active ? 'text-red-500' : 'text-gray-500'} cursor-pointer`}
                onClick={() => onToggle(user.id)}
              >
                {user.id}
              </td>
              <td className="py-3 px-4">{user.first_name}</td>
              <td className="py-3 px-4">{user.last_name}</td>
              <td className="py-3 px-4">{user.gender}</td>
              <td className="py-3 px-4">{user.age}</td>
              <td>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  onClick={() => onRemove(user.id)}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
