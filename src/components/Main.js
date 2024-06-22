// src/components/Main.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import InputSample from './InputSample';
import Users from './users(not_use)/Users';
import ReRendering from './ReRendering';
import UsersParent from './users/UsersParent';
import Counter from './Counter';

const Main = () => {
  return (
    <div className="flex-1 p-4">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/profiles/:username" Component={Profile} />
        <Route path="/inputSample" Component={InputSample} />
        {/* <Route path="/usersList" element={<UserList users={users} />} /> */}
        <Route path="/users" Component={Users} />
        <Route path="/userList" Component={UsersParent} />
        <Route path="/reRendering" Component={ReRendering} />
        <Route path="/counter" Component={Counter} />
      </Routes>
    </div>
  );
};

export default Main;
