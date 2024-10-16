import styled from "styled-components";
import { colors } from "../../styles/colors";
import { tablet } from "../../styles/mixins";

export const AddButtonStyles = styled.button`
  position: absolute;
  right: 20px;
  top: calc(240px);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: ${colors.color.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  color: ${colors.color.white};
  font-size: 24px;
  border: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }

  ${tablet(`
  top: calc(80px);
  width: 64px;
  height: 64px;
  `)}
`;

export const AddImg = styled.img`
  width: 20px;
  height: 20px;
`;
