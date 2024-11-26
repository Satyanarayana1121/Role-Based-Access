import React from 'react';

const DeleteUserModal = ({ user, onClose, onDelete }) => {
  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container">
        <h2 className="modal-header">Delete User</h2>
        <p>
          Are you sure you want to delete <strong>{user.name}</strong>?
        </p>
        <div className="modal-buttons">
          <button
            className="save"
            onClick={() => {
              onDelete(user.id);
              onClose();
            }}
          >
            Confirm
          </button>
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteUserModal;
