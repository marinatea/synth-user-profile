import styled, { keyframes } from "styled-components";
import { tablet } from "../../styles/mixins";
import { colors } from "../../styles/colors";

export const UserBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const UserName = styled.span`
  font-weight: bold;
  white-space: nowrap;
`;

const shake = keyframes`
  0% { transform: translate(0); }
  25% { transform: translate(-1px, 1px); }
  50% { transform: translate(-1px, -1px); }
  75% { transform: translate(1px, 1px); }
  100% { transform: translate(0); }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    animation: ${shake} 0.5s infinite;
  }
`;

export const IconButt = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuContainer = styled.div<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  position: absolute;
  z-index: 1;
  width: 176px;
  height: 124px;
  right: 180px;
  top: 55px;

  ${tablet(`
     
  `)}
`;

export const ActionButton = styled.button`
  border: none;
  padding: 8px 24px;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 18.75px;
  text-align: left;
  height: 38px;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  gap: 16px;
  width: 100%;
  transition: background-color 0.5s ease, transform 0.5s ease;

  &:hover {
    background: ${colors.color.light};
    transition: opacity 0.3s ease;
  }
`;

export const MenuButton = styled.button`
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: -170%;
`;
