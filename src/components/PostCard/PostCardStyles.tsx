import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Card = styled.div`
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  width: 100%;
  flex-wrap: wrap;
  // height: 280px;
  padding: 0px 24px 0px 24px;
  cursor: pointer;
  background-color: ${colors.color.white};

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const CardHeader = styled.div`
  padding: 56px 0px 24px 0px;
  height: 232px;
  overflow: hidden;
  gap: 10px;
  position: relative;
`;

export const ShareMethod = styled.div`
  font-size: 16px;
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: absolute;
  top: 24px;
  max-width: 100%;
  display: flex;
  gap: 5px;
`;

export const ShareButton = styled.button`
  text-decoration: none;
  background: none;
  border: none;
  font-size: 18px;
  color: ${colors.color.red};
  cursor: pointer;
  padding: 8px;
  border-radius: 5px;
  transition: transform 0.3s ease;

  &:hover {
    color: ${colors.color.darkred};
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const Username = styled.span`
  font-weight: bold;
  transition: transform 0.2s ease;

  &:hover {
    color: ${colors.color.black};
  }
`;

export const Title = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 36px;
  line-height: 42px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
`;

export const UserWrapper = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const InterWrapper = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const FooterAction = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  text-align: left;
  gap: 8px;

  &:hover {
    color: #424242;
  }
`;
