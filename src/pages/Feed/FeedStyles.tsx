import styled from "styled-components";
import { colors } from "../../styles/colors";
import { desktop, tablet } from "../../styles/mixins";

export const FeedWrapper = styled.div`
  padding: 54px 24px;
  background-color: ${colors.color.light};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  ${tablet(`
    grid-template-columns: 1fr; 
    padding: 64px 64px;
  `)}

  ${desktop(`
    grid-template-columns: 1fr 3fr;
  `)}
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(374px, 1fr));
  gap: 24px;
  padding: 0 24px;
`;
