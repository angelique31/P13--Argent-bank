import React, { useState } from "react";
import {
  Input,
  InputContainer,
  Buttons,
  ButtonContainer,
  EditButton,
  Header,
} from "./EditableNameStyles";

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
    // onCancel();
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
      <Header>
        <EditButton onClick={() => setEditing(true)}>Edit Name</EditButton>
      </Header>
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
