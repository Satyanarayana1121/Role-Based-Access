import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor' },
  ]);

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, { id: Date.now(), ...user }]);
  };

  const updateUser = (id, updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === id ? { ...user, ...updatedUser } : user))
    );
  };

  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
