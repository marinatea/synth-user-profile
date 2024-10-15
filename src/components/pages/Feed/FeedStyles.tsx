import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { desktop, tablet } from "../../../styles/mixins";

export const FeedWrapper = styled.div`
  padding: 54px 24px;
  background-color: ${colors.color.light};
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-start;
  position: absolute;

  ${tablet(`
     padding: 64px 64px;
  `)}

  ${desktop(`
     padding: 72px 136px;
  `)}
`;
