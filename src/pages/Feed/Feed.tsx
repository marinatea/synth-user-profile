import React from "react";
import UserBoard from "../../components/UserBoard/UserBoard";
import { CardWrapper, FeedWrapper } from "../Feed/FeedStyles";
import PostCard from "../../components/PostCard/PostCard";
import postData from "../../postData.json";

const Feed: React.FC = () => {
  return (
    <FeedWrapper>
      <UserBoard userIndex={1} />
      {/* <Cards> */}
      <CardWrapper>
        {postData.posts.map((post, index) => (
          <PostCard
            key={index}
            author={post.author}
            avatar={post.avatar}
            title={post.title}
            shareMethod={post.shareMethod || null}
            likes={post.reactions?.likes ?? 0}
            shares={post.reactions?.shares ?? 0}
          />
        ))}
      </CardWrapper>
      {/* </Cards> */}
    </FeedWrapper>
  );
};

export default Feed;
