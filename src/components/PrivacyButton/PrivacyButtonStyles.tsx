import styled from "styled-components";
import { colors } from "../../styles/colors";
import { desktop, tablet } from "../../styles/mixins";

export const ToggleWrapper = styled.div`
  align-items: center;
  display: none;

  ${desktop(`
    position: absolute;
      left: 26em;
      top: 11.2rem;
      display: flex;
  `)}
`;

export const ToggleLabel = styled.span`
  margin-inline: 10px;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  color: ${colors.color.primary};
  display: none;

  ${tablet(`
 display: flex;
  `)}
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${colors.color.red};
  }

  &:checked + span:before {
    transform: translateX(26px);
  }
`;

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background-color: ${colors.color.white};
    transition: 0.4s;
    border-radius: 50%;
  }
`;
