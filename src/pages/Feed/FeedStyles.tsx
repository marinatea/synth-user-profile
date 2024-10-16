import styled from "styled-components";
import { colors } from "../../styles/colors";
import { desktop, tablet } from "../../styles/mixins";

export const FeedWrapper = styled.div`
  padding: 54px 24px;
  background-color: ${colors.color.light};
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  overflow-y: auto; /* Zmiana na overflow-y dla lepszej kontroli */
  align-content: flex-start;
  margin: 0 auto;

  ${tablet(`
     padding: 64px 64px;
     grid-template-columns: 2fr;
     gap: 47px;     
  `)}

  ${desktop(`
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
