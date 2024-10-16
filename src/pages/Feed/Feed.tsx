import React from "react";
import UserBoard from "../../components/UserBoard/UserBoard";
import { CardWrapper, FeedWrapper } from "../Feed/FeedStyles";
import PostCard from "../../components/PostCard/PostCard";
import postData from "../../postData.json";

const Feed: React.FC = () => {
  return (
    <FeedWrapper>
      <aside>
        <UserBoard userIndex={1} />
      </aside>
      <main>
        <CardWrapper>
          {postData.posts.map((post, index) => (
            <PostCard
              key={index}
              author={post.author}
              avatar={post.avatar}
              title={post.title}
              shareMethod={post.shareMethod || null}
              likes={post.reactions?.likes ?? 0}
              shares={post.reactions?.shares ?? 0}        />
          ))}
        </CardWrapper>
      </main>
    </FeedWrapper>
  );
};

export default Feed;
