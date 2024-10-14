import { AddButtonStyles, AddImg } from "./AddButtonStyles";
import Add from "../../assets/icons/plus.svg";

const AddButton: React.FC = () => {
  return (
    <AddButtonStyles>
      <AddImg src={Add} alt="add" />
    </AddButtonStyles>
  );
};

export default AddButton;
