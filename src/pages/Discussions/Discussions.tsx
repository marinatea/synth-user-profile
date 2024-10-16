import React from "react";
import { DiscussionsWrapper } from "./DiscussionsStyles";

const Discussions: React.FC = () => {
  return (
    <DiscussionsWrapper>
       <header>
        <h1>Discussions</h1>
      </header>
      <main>
        <p>This is the discussions page.</p>
      </main>
    </DiscussionsWrapper>
  );
};

export default Discussions;
