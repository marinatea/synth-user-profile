import React, { useState } from "react";
import userData from "../../userData.json";
import Edit from "../../assets/icons/icon_edit.svg";
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
  StatLabel,
  Bio,
  ActionButton,
  DataWrapper,
  DataBlock,
  MenuButton,
  AvatarWrapper,
  MenuContainer,
} from "./UserBoardStyles";

interface UserProfileProps {
  userIndex: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ userIndex }) => {
  const user = userData.users[userIndex];
  const [editMenuVisible, setEditMenuVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleEditMenu = () => {
    setEditMenuVisible((prev) => !prev);
  };

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
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
              <ActionButton onClick={() => alert("Report User")}>
                {" "}
                <img src={Report} alt="report" />
                Report User
              </ActionButton>
              <ActionButton onClick={() => alert("Block User")}>
                {" "}
                <img src={Block} alt="" />
                Block User
              </ActionButton>
            </MenuContainer>
          )}
        </AvatarWrapper>
        <DataBlock>
          <UserName>{`${user.firstName} ${user.lastName}`}</UserName>
          <UserHandle>{user.tag}</UserHandle>
          <EditProfileButton onClick={toggleEditMenu}>
            <img src={Edit} alt="edit" />
            Edit profile
          </EditProfileButton>
        </DataBlock>
      </DataWrapper>
      {editMenuVisible && (
        <MenuContainer visible={menuVisible}>
          <ActionButton onClick={() => alert("Edit User")}>
            Edit User
          </ActionButton>
        </MenuContainer>
      )}
      <StatsContainer>
        <StatItem>
          <StatValue>{user.synths}</StatValue>
          <StatLabel>synths</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>{user.followers}</StatValue>
          <StatLabel>followers</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>{user.followings}</StatValue>
          <StatLabel>following</StatLabel>
        </StatItem>
      </StatsContainer>

      <Bio>{user.bio}</Bio>
    </ProfileContainer>
  );
};

export default UserProfile;
