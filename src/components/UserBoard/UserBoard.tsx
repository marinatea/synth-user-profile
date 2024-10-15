import React from "react";
import userData from "../../userData.json";
import Edit from "../../assets/icons/icon_edit.svg";
import Menu from "../../assets/icons/icon_3dots.svg";
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
  // ActionButton,
  DataWrapper,
  DataBlock,
  MenuButton,
  AvatarWrapper,
} from "./UserBoardStyles";

interface UserProfileProps {
  userIndex: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ userIndex }) => {
  const user = userData.users[userIndex];

  return (
    <ProfileContainer>
      <DataWrapper>
        <AvatarWrapper>
        <Avatar src={user.avatarUrl} alt="avatar" />
        <MenuButton>
          <img src={Menu} alt="menu" />
          </MenuButton>
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

      {/* <ActionButton>Report User</ActionButton>
      <ActionButton>Block User</ActionButton> */}
    </ProfileContainer>
  );
};

export default UserProfile;
