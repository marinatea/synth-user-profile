import React from "react";
import UserBoard from "../../UserBoard/UserBoard";
import { FeedWrapper } from "./FeedStyles";

const Feed: React.FC = () => {
  return (
    <FeedWrapper>
      <UserBoard userIndex={1}></UserBoard>
    </FeedWrapper>
  );
};

export default Feed;
