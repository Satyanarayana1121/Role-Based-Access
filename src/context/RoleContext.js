import React, { createContext, useState } from 'react';

export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
  ]);

  const addRole = (newRole) => {
    setRoles((prevRoles) => [
      ...prevRoles,
      { id: Date.now(), ...newRole },
    ]);
  };

  const updateRole = (id, updatedRole) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.id === id ? { ...role, ...updatedRole } : role
      )
    );
  };

  const deleteRole = (id) => {
    setRoles((prevRoles) => prevRoles.filter((role) => role.id !== id));
  };

  return (
    <RoleContext.Provider value={{ roles, addRole, updateRole, deleteRole }}>
      {children}
    </RoleContext.Provider>
  );
};
