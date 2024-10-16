import React, { useState } from "react";
import userData from "../../userData.json";
import Edit from "../../assets/icons/editred.svg";
import Menu from "../../assets/icons/icon_3dots.svg";
import Report from "../../assets/icons/report.svg";
import Block from "../../assets/icons/hide.svg";

import {
  ProfileContainer,
  Avatar,
  EditProfileButton,
  UserName,
  UserHandle,
  StatsContainer,
  StatItem,
  StatValue,
  ActionButton,
  DataWrapper,
  DataBlock,
  MenuButton,
  AvatarWrapper,
  MenuContainer,
  Bio,
} from "./UserBoardStyles";

interface UserProfileProps {
  userIndex: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ userIndex }) => {
  const user = userData.users[userIndex];
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  const handleMenuAction = (action: "report" | "block") => {
    if (action === "report") {
      alert("User reported");
    } else if (action === "block") {
      alert("User blocked");
    }
    setMenuVisible(false);
  };

  return (
    <ProfileContainer>
      <DataWrapper>
        <AvatarWrapper>
          <Avatar src={user.avatarUrl} alt="avatar" />
          <MenuButton onClick={toggleMenu}>
            <img src={Menu} alt="menu" />
          </MenuButton>
          {menuVisible && (
            <MenuContainer visible={menuVisible}>
              <ActionButton onClick={() => handleMenuAction("report")}>
                <img src={Report} alt="report" />
                Report User
              </ActionButton>
              <ActionButton onClick={() => handleMenuAction("block")}>
                <img src={Block} alt="block" />
                Block User
              </ActionButton>
            </MenuContainer>
          )}
        </AvatarWrapper>
        <DataBlock>
          <UserName>{`${user.firstName} ${user.lastName}`}</UserName>
          <UserHandle>{user.tag}</UserHandle>
          <EditProfileButton>
            <img src={Edit} alt="edit" />
            Edit profile
          </EditProfileButton>
        </DataBlock>
      </DataWrapper>
      <StatsContainer>
        <StatItem>
          <StatValue>{user.synths}</StatValue>
          synths
        </StatItem>
        <StatItem>
          <StatValue>{user.followers}</StatValue>
          followers
        </StatItem>
        <StatItem>
          <StatValue>{user.followings}</StatValue>
          following
        </StatItem>
      </StatsContainer>
      <Bio>{user.bio}</Bio>
    </ProfileContainer>
  );
};

export default UserProfile;
