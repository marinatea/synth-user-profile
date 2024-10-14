import React from "react";
import userData from "../../userData.json";
import Logo from "../../assets/icons/logo.svg";
import AddButton from "../AddButton/AddButton";

import {
  HeaderContainer,
  NavContainer,
  NavItem,
  UserActions,
  NavWrapper,
  IconButton,
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
          <NavItem href="#">FEED</NavItem>
          <NavItem href="#">EXPLORE</NavItem>
          <NavItem href="#">DISCUSSIONS</NavItem>
        </NavContainer>
        <AddButton />
      </HeaderContainer>
    </>
  );
};

export default Header;
