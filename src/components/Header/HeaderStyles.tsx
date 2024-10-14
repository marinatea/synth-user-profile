import styled from "styled-components";
import { tablet, desktop } from "../../styles/mixins";
import { colors } from "../../styles/colors";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0 1px 24px rgba(0, 0, 0, 0.2);
  padding-inline: 24px;
  padding-top: 24px; 
  align-items: center;
  margin: 0 auto;
  gap: 23px;

  ${tablet(`
    padding-inline: 50px;
    padding-top: 24px;
    flex-direction: column;
    margin: 0 auto;
  `)}

  ${desktop(`
    padding-inline: 135px;
    padding-top: 24px;
    margin: 0 auto;
  `)}
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  gap: 23px;

  ${tablet(`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  `)}
`;

export const Logo = styled.div`
  font-family: Open Sans;
  font-size: 23px;
  color: ${colors.color.primary};
  align-items: center;
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  ${tablet(`
   justify-content: flex-start;
   align-items: center;
   gap: 36px;
  `)}
`;

export const NavItem = styled.a`
  text-decoration: none;
  position: relative;
  color: ${colors.color.secondary};
  padding-bottom: 19px;

  &:hover {
    color: ${colors.color.primary};
    transition: width 1s ease;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 1px;
    background-color: transparent;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.2s ease;
    background-color: ${colors.color.red};
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const UserActions = styled.div`
  display: flex;
  align-items: center;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const AddButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #ff4081;
  color: white;
  font-size: 24px;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;
