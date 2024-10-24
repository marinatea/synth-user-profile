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
  SpanS,
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
          <DataBlock>
            <UserName>{`${user.firstName} ${user.lastName}`}</UserName>{" "}
            <MenuButton onClick={toggleMenu}>
              <img src={Menu} alt="menu" />
            </MenuButton>
            <UserHandle>{user.tag}</UserHandle>
            <EditProfileButton>
              <img src={Edit} alt="edit" />
              Edit profile
            </EditProfileButton>
          </DataBlock>

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
      </DataWrapper>
      <StatsContainer>
        <StatItem>
          <StatValue>
            {user.synths} <SpanS>synths</SpanS>
          </StatValue>
          <StatValue>
            {user.followers} <SpanS>followers</SpanS>
          </StatValue>
          <StatValue>
            {user.followings} <SpanS>following</SpanS>
          </StatValue>
        </StatItem>
        <Bio>{user.bio}</Bio>
      </StatsContainer>
    </ProfileContainer>
  );
};

export default UserProfile;
