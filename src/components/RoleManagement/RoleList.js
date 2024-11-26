import React, { useContext, useState } from 'react';
import { RoleContext } from '../../context/RoleContext';
import AssignPermissionModal from './AssignPermissionModal';
import AddRoleModal from './AddRoleModal';

const RoleList = () => {
  const { roles, addRole, updateRole, deleteRole } = useContext(RoleContext);
  const [selectedRole, setSelectedRole] = useState(null);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddRole = (newRole) => {
    addRole(newRole);
    setIsAddModalOpen(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Role Management</h2>
      
      {/* Add Role Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setIsAddModalOpen(true)}
      >
        Add Role
      </button>

      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4">Role</th>
            <th className="py-2 px-4">Permissions</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td className="py-2 px-4">{role.name}</td>
              <td className="py-2 px-4">{role.permissions.join(', ')}</td>
              <td className="py-2 px-4">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => {
                    setSelectedRole(role);
                    setIsAssignModalOpen(true);
                  }}
                >
                  Assign Permissions
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => deleteRole(role.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modals */}
      {isAssignModalOpen && selectedRole && (
        <AssignPermissionModal
          role={selectedRole}
          onClose={() => setIsAssignModalOpen(false)}
          onSave={updateRole}
        />
      )}

      {isAddModalOpen && (
        <AddRoleModal
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleAddRole}
        />
      )}
    </div>
  );
};

export default RoleList;
