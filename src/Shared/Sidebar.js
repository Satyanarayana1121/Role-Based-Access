import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            User Management
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/roles"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Role Management
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/permissions"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Permission Management
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
