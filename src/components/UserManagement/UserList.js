import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import AddUserModal from './AddUserModal';
import EditUserModal from './EditUserModal';
import DeleteUserModal from './DeleteUserModal';

const UserList = () => {
  const { users, addUser, updateUser, deleteUser } = useContext(UserContext);

  // Modal States
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null); // Selected user for edit or delete

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">User Management</h2>
      {/* Add User Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setIsAddModalOpen(true)}
      >
        Add User
      </button>

      {/* User Table */}
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Role</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">{user.role}</td>
              <td className="py-2 px-4">
                {/* Edit Button */}
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => {
                    setSelectedUser(user);
                    setIsEditModalOpen(true);
                  }}
                >
                  Edit
                </button>

                {/* Delete Button */}
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => {
                    setSelectedUser(user);
                    setIsDeleteModalOpen(true);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modals */}
      {isAddModalOpen && (
        <AddUserModal
          onClose={() => setIsAddModalOpen(false)}
          onSave={(newUser) => {
            addUser(newUser);
            setIsAddModalOpen(false);
          }}
        />
      )}

      {isEditModalOpen && selectedUser && (
        <EditUserModal
          user={selectedUser}
          onClose={() => setIsEditModalOpen(false)}
          onSave={(id, updatedData) => {
            updateUser(id, updatedData);
            setIsEditModalOpen(false);
          }}
        />
      )}

      {isDeleteModalOpen && selectedUser && (
        <DeleteUserModal
          user={selectedUser}
          onClose={() => setIsDeleteModalOpen(false)}
          onDelete={(id) => {
            deleteUser(id);
            setIsDeleteModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default UserList;
