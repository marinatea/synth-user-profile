import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  width: 350px;
  background-color: ${colors.color.light};
`;

export const DataWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const DataBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`;

export const MenuButton = styled.button`
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: -170%;
`;

export const UserName = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 26px;
  text-align: left;
`;

export const UserHandle = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 8px;
`;

export const EditProfileButton = styled.button`
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  text-decoration: underline;
  color: ${colors.color.red};
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
  gap: 20%;
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
  text-align: left;
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
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
