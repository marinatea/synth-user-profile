import styled from "styled-components";
import { colors } from "../../styles/colors";
import { desktop, tablet } from "../../styles/mixins";

export const FeedWrapper = styled.div`
  padding: 54px 24px;
  background-color: ${colors.color.light};
  width: 100%;
  display: flex;
  flex-direction: column;
  

  ${tablet(`
     padding: 64px 64px;
     gap: 47px; 
  `)}

  ${desktop(`
    display: grid;
     padding: 72px 135px;
     grid-template-columns: 1fr 3fr;
  `)}
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;
