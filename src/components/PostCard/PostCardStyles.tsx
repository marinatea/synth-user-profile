import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  width: 374px;
  height: 280px;
  overflow: hidden;
  padding: 0px 24px 0px 24px;
  cursor: pointer;
`;

export const CardHeader = styled.div`
  padding: 56px 0px 24px 0px;
  display: flex;
  justify-content: start;
  height: 232px;
  overflow: hidden;
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
`;

export const Title = styled.h3`
  font-size: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  top: 10px;
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
