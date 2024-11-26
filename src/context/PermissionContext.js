import React, { createContext, useState } from 'react';

export const PermissionContext = createContext();

export const PermissionProvider = ({ children }) => {
  const [permissions, setPermissions] = useState([
    { id: 1, name: 'Read', description: 'Allows reading data' },
    { id: 2, name: 'Write', description: 'Allows writing data' },
    { id: 3, name: 'Delete', description: 'Allows deleting data' },
  ]);

  return (
    <PermissionContext.Provider value={{ permissions }}>
      {children}
    </PermissionContext.Provider>
  );
};
