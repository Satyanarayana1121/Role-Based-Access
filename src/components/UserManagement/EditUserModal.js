import React, { useState } from 'react';

const EditUserModal = ({ user, onClose, onSave }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);

  const handleSave = () => {
    if (name && email && role) {
      onSave(user.id, { name, email, role });
      onClose();
    }
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container">
        <h2 className="modal-header">Edit User</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="modal-input"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="modal-input"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="modal-input"
        >
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
        </select>
        <div className="modal-buttons">
          <button className="save" onClick={handleSave}>
            Save
          </button>
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default EditUserModal;
