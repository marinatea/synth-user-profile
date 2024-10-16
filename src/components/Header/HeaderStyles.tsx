import styled from "styled-components";
import { tablet, desktop } from "../../styles/mixins";
import { colors } from "../../styles/colors";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.color.white};
  box-shadow: 0 1px 24px rgba(0, 0, 0, 0.2);
  height: 274px;
  padding-inline: 24px;
  padding-top: 24px;
  align-items: center;
  gap: 12px;
  position: relative;
  z-index: 1;

  ${tablet(`
    padding-inline: 50px;
    height: 112px;
  `)}

  ${desktop(`
    padding-inline: 135px;
  `)}
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 23px;

  ${tablet(`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `)}
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  ${tablet(`
    flex-direction: row;
    gap: 36px;
  `)}
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  position: relative;
  color: ${colors.color.secondary};
  padding-bottom: 16px;
  transition: color 0.3s ease;
  text-transform: uppercase;

  &.active {
    color: ${colors.color.primary};
  }

  &:hover {
    color: ${colors.color.primary};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &.active::after {
    transform: scaleX(1);
  }

  &:hover::after {
    color: ${colors.color.primary};
  }

  ${tablet(`
    &::after {
      transform-origin: center;
      background: ${colors.color.gradient};
    }
  `)}
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
