import React from "react";
import { AddButtonStyles, AddImg } from "./AddButtonStyles";
import Add from "../../assets/icons/plus.svg";

const AddButton: React.FC = () => {
  return (
    <AddButtonStyles aria-label="Add item">
      <AddImg src={Add} alt="Add icon" />
    </AddButtonStyles>
  );
};

export default AddButton;
