import React from 'react';
import {
  ProfileContainer,
  AvatarContainer,
  Avatar,
  EditProfileButton,
  UserName,
  UserHandle,
  StatsContainer,
  StatItem,
  StatValue,
  StatLabel,
  Bio,
  ActionButton
} from './UserBoardStyles';

interface UserProfileProps {
  name: string;
  handle: string;
  avatarUrl: string;
  synths: number;
  followers: number;
  following: number;
  bio: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  handle,
  avatarUrl,
  synths,
  followers,
  following,
  bio
}) => {
  return (
    <ProfileContainer>
      <AvatarContainer>
        <Avatar src={avatarUrl} alt={`${name}'s avatar`} />
        <EditProfileButton>✏️</EditProfileButton>
      </AvatarContainer>
      <UserName>{name}</UserName>
      <UserHandle>@{handle}</UserHandle>
      <StatsContainer>
        <StatItem>
          <StatValue>{synths}</StatValue>
          <StatLabel>synths</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>{followers}</StatValue>
          <StatLabel>followers</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>{following}</StatValue>
          <StatLabel>following</StatLabel>
        </StatItem>
      </StatsContainer>
      <Bio>{bio}</Bio>
      <div>
        <ActionButton>Report User</ActionButton>
        <ActionButton>Block User</ActionButton>
      </div>
    </ProfileContainer>
  );
};

export default UserProfile;