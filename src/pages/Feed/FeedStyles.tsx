import styled from "styled-components";
import { colors } from "../../styles/colors";
import { desktop, tablet } from "../../styles/mixins";

export const FeedWrapper = styled.div`
  padding: 54px 24px;
  background-color: ${colors.color.light};
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  align-content: flex-start;
  margin: 0 auto;

  ${tablet(`
     padding: 64px 64px;
     grid-template-columns: 1fr 2fr;
     gap: 47px;
  `)}

  ${desktop(`
     padding: 72px 135px;
     grid-template-columns: 1fr 3fr;
  `)}
`;

// export const Cards = styled.div`
//   ${tablet(`
//  display: grid;
//      width: 100%;
//   `)}
// `;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;
