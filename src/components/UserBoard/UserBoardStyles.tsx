import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AvatarContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const EditProfileButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
`;

export const UserName = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 5px 0;
`;

export const UserHandle = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0 0 15px 0;
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 15px;
`;

export const StatItem = styled.div`
  text-align: center;
`;

export const StatValue = styled.div`
  font-weight: bold;
`;

export const StatLabel = styled.div`
  font-size: 0.8rem;
  color: #666;
`;

export const Bio = styled.p`
  text-align: center;
  margin-bottom: 15px;
`;

export const ActionButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 5px;
  font-size: 0.9rem;
`;