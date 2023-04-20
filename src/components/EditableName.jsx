import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  ::placeholder {
    color: #c4c4c4;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const Buttons = styled.button`
  width: 70px;
  padding: 5px;
  color: blue;
  background-color: white;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;
  border: none;
  &:hover {
    transform: scale(1.06);
  }
  &:focus {
    box-shadow: 0px 0px 3px 1px blue;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

/**
 * Composant permettant à l'utilisateur de modifier son nom complet.
 * Component allowing the user to edit their full name.
 * @param {Object} props - Les propriétés passées au composant. The properties passed to the component.
 * @param {string} props.fullName - Le nom complet actuel de l'utilisateur. The current full name of the user.
 * @param {Function} props.onSave - Fonction appelée lorsque l'utilisateur enregistre les modifications apportées à son nom. Function called when the user saves the changes made to their name.
 * @param {Function} props.onCancel - Fonction appelée lorsque l'utilisateur annule les modifications apportées à son nom. Function called when the user cancels the changes made to their name.
 * @returns {JSX.Element} Le rendu du composant EditableName.
 */

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
    setEditing(false);
  };

  const handleCancel = () => {
    setInputFirstName(fullName ? fullName.split(" ")[0] : "");
    setInputLastName(fullName ? fullName.split(" ")[1] : "");
    onCancel();
    // setEditing(false);
  };

  //Gestion de l'affichage du nom en appuyant sur "entrée"
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSave();
    }
  };

  if (!editing) {
    return (
      <div className="header">
        <button className="edit-button" onClick={() => setEditing(true)}>
          Edit Name
        </button>
      </div>
    );
  }

  return (
    <div>
      <InputContainer>
        <Input
          type="text"
          placeholder="Tony"
          value={inputFirstName}
          onChange={(e) => setInputFirstName(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Input
          type="text"
          placeholder="Jarvis"
          value={inputLastName}
          onChange={(e) => setInputLastName(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </InputContainer>
      <ButtonContainer>
        <Buttons onClick={handleSave}>Save</Buttons>
        <Buttons onClick={handleCancel}>Cancel</Buttons>
      </ButtonContainer>
    </div>
  );
};

export default EditableName;
