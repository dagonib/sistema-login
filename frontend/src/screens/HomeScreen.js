import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div>
      <h1>HomeScreen</h1>
      <div>
        <ul>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeScreen;
