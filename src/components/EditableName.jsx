import React, { useState } from "react";

const EditableName = ({ fullName, onSave, onCancel }) => {
  const [editing, setEditing] = useState(false);
  const [inputFirstName, setInputFirstName] = useState(
    fullName ? fullName.split(" ")[0] : ""
  );
  const [inputLastName, setInputLastName] = useState(
    fullName ? fullName.split(" ")[1] : ""
  );

  const handleSave = () => {
    const newName = `${inputFirstName} ${inputLastName}`;
    onSave(newName);
    // setEditing(false);
  };

  const handleCancel = () => {
    setInputFirstName(fullName ? fullName.split(" ")[0] : "");
    setInputLastName(fullName ? fullName.split(" ")[1] : "");
    onCancel();
    // setEditing(false);
  };

  if (!editing) {
    return (
      <div className="header">
        <span>{fullName}</span>
        <button className="edit-button" onClick={() => setEditing(true)}>
          Edit Name
        </button>
      </div>
    );
  }

  return (
    <div>
      <input
        type="text"
        value={inputFirstName}
        onChange={(e) => setInputFirstName(e.target.value)}
      />
      <input
        type="text"
        value={inputLastName}
        onChange={(e) => setInputLastName(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default EditableName;
