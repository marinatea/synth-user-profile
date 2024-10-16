import styled from "styled-components";
import { colors } from "../../styles/colors";
import { desktop, tablet } from "../../styles/mixins";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  width: 100%;
  background-color: ${colors.color.light};
  margin-bottom: 24px;
  gap: 24px;

  ${tablet(`

     margin-bottom: 0;
 `)}

  ${desktop(`
     align-items: flex-start;
      gap: 32px;
  `)}
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

export const MenuContainer = styled.div<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: ${colors.color.white};
  border-radius: 8px;
  position: absolute;
  right: -190px;
  top: 38px;
  z-index: 1;
  width: 176px;
  height: 124px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  ${tablet(`
     right: -355px;
     top: 30px;
  `)}
`;

export const ActionButton = styled.button`
  border: none;
  padding: 8px 24px;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 18.75px;
  text-align: left;
  height: 38px;
  background-color: ${colors.color.white};
  display: flex;
  gap: 16px;
  width: 100%;
  transition: background-color 0.5s ease, transform 0.5s ease;

  &:hover {
    background: ${colors.color.light};
    transition: opacity 0.3s ease;
  }
`;

export const MenuButton = styled.button`
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 2%;
  right: -165%;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserName = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 26px;
  text-align: left;
  color: ${colors.color.primary};
`;

export const UserHandle = styled.p`
  color: ${colors.color.primary};
  margin-bottom: 8px;
`;

export const EditProfileButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 24px;
  text-decoration: underline;
  color: ${colors.color.red};
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  &:hover {
    color: ${colors.color.primary};
    transition: opacity 0.5s ease;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 30rem;
  margin-bottom: 24px;
  gap: 24px;

  ${desktop(`
  align-items: start;
  width: 80%;
  `)}
`;

export const StatItem = styled.div`
  text-align: center;
  color: ${colors.color.primary};
  font-size: 16px;
  display: flex;
  gap: 5%;
`;

export const StatValue = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export const SpanS = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

export const Bio = styled.p`
  width: 100%;
`;
