import React, { useState } from 'react';

const AddUserModal = ({ onClose, onSave }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleSave = () => {
    if (name && email && role) {
      onSave({ name, email, role });
      onClose();
    }
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container">
        <h2 className="modal-header">Add User</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="modal-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="modal-input"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="modal-input"
        >
          <option value="" disabled>
            Select Role
          </option>
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

export default AddUserModal;
