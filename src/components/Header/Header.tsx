import React from "react";
import userData from "../../userData.json";
import Logo from "../../assets/icons/logo.svg";
import AddButton from "../AddButton/AddButton";

import {
  HeaderContainer,
  NavContainer,
  UserActions,
  NavWrapper,
  IconButton,
  StyledNavLink,
} from "./HeaderStyles";
import UserBar from "../UserBar/UserBar";

interface HeaderProps {
  userIndex: number;
}

const Header: React.FC<HeaderProps> = ({ userIndex }) => {
  const user = userData.users[userIndex];

  return (
    <>
      <HeaderContainer>
        <NavWrapper>
          <IconButton>
            <img src={Logo} alt="Logo" />
          </IconButton>
          <UserActions>
            {user && (
              <UserBar
                userName={`${user.firstName} ${user.lastName}`}
                avatarUrl={user.avatarUrl}
              />
            )}
          </UserActions>
        </NavWrapper>
        <NavContainer>

          <StyledNavLink
            to="/feed"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Feed
          </StyledNavLink>

          <StyledNavLink
            to="/explore"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Explore
          </StyledNavLink>

          <StyledNavLink
            to="/discussions"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Discussions
          </StyledNavLink>
        </NavContainer>
        <AddButton />
      </HeaderContainer>
    </>
  );
};

export default Header;
