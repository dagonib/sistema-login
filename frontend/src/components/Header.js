import React from 'react';
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <Outlet />
    </div>
  );
};

export default Header;
