import React, { useState } from 'react';

const AddRoleModal = ({ onClose, onSave }) => {
  const [roleName, setRoleName] = useState('');
  const [permissions, setPermissions] = useState([]);

  const handleTogglePermission = (permission) => {
    setPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((p) => p !== permission)
        : [...prev, permission]
    );
  };

  const handleSave = () => {
    if (roleName.trim()) {
      onSave({ name: roleName, permissions });
      onClose();
    }
  };

  return (
    <div className="assign-permissions">
      <h2>Add New Role</h2>
      <input
        type="text"
        placeholder="Role Name"
        value={roleName}
        onChange={(e) => setRoleName(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <ul className="permission-list">
        {['Read', 'Write', 'Delete'].map((permission) => (
          <li key={permission}>
            <input
              type="checkbox"
              checked={permissions.includes(permission)}
              onChange={() => handleTogglePermission(permission)}
            />
            <label>{permission}</label>
          </li>
        ))}
      </ul>
      <div className="permission-buttons">
        <button className="save" onClick={handleSave}>
          Save
        </button>
        <button className="cancel" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddRoleModal;
