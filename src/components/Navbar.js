// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
      <Link className="mb-4 hover:underline" to="/">
        Home
      </Link>
      {/* <Link className="mb-4 hover:underline" to="/about">
        About
      </Link> */}
      <Link className="mb-4 hover:underline" to="/users">
        Users
      </Link>
      <Link className="mb-4 hover:underline" to="/inputSample">
        inputSample
      </Link>
      <Link className="mb-4 hover:underline" to="/reRendering">
        reRendering
      </Link>
      <Link className="mb-4 hover:underline" to="/userList">
        UserList
      </Link>
      <Link className="mb-4 hover:underline" to="/counter">
        Counter
      </Link>
      <Link className="mb-4 hover:underline" to="/contextSample">
        ContextSample
      </Link>
      <Link className="mb-4 hover:underline" to="/classHello">
        Class Hello
      </Link>
      <Link className="mb-4 hover:underline" to="/classCounter">
        Class Counter
      </Link>
    </div>
  );
};

export default Navbar;
