import React, { useState } from 'react';

const AssignPermissionModal = ({ role, onClose, onSave }) => {
  const [selectedPermissions, setSelectedPermissions] = useState(role.permissions);

  const handleTogglePermission = (permission) => {
    setSelectedPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((p) => p !== permission)
        : [...prev, permission]
    );
  };

  const handleSave = () => {
    onSave(role.id, selectedPermissions);
    onClose();
  };

  return (
    <div className="assign-permissions">
      <h2>Assign Permissions</h2>
      <ul className="permission-list">
        {['Read', 'Write', 'Delete'].map((permission) => (
          <li key={permission}>
            <input
              type="checkbox"
              checked={selectedPermissions.includes(permission)}
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

export default AssignPermissionModal;
