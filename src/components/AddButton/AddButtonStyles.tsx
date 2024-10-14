import styled from "styled-components";
import { colors } from "../../styles/colors";

export const AddButtonStyles = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${colors.color.gradient};

  color: white;
  font-size: 24px;
  border: none;
  cursor: pointer;
`;
