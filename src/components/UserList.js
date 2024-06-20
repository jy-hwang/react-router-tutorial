import React, { useRef, useState } from 'react';
import CreateUser from './CreateUser';

function User({ user }) {
  return (
    <div>
      <h1>
        {user.first_name} {user.last_name}
      </h1>
      <p>{user.gender}</p>
      <p>{user.age}</p>
    </div>
  );
}

const UserList = ({ users }) => {
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
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className="border-b hover:bg-gray-50" key={user.id}>
              <td className="py-3 px-4">{user.id}</td>
              <td className="py-3 px-4">{user.first_name}</td>
              <td className="py-3 px-4">{user.last_name}</td>
              <td className="py-3 px-4">{user.gender}</td>
              <td className="py-3 px-4">{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
