import React, { useContext } from 'react';
import { PermissionContext } from '../../context/PermissionContext';

const PermissionTable = () => {
  const { permissions } = useContext(PermissionContext);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Permission Management</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4">Permission</th>
            <th className="py-2 px-4">Description</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <tr key={permission.id}>
              <td className="py-2 px-4">{permission.name}</td>
              <td className="py-2 px-4">{permission.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionTable;
