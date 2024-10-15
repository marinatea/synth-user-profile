import React from "react";
import UserBoard from "../../UserBoard/UserBoard";
import { CardWrapper, FeedWrapper } from "./FeedStyles";
import PostCard from "../../PostCard/PostCard";
import postData from "../../../postData.json";

const Feed: React.FC = () => {
  return (
    <FeedWrapper>
      <UserBoard userIndex={1} />
      <CardWrapper>
        {postData.posts.map((post, index) => (
          <PostCard
            key={index}
            author={post.author}
            avatar={post.avatar}
            title={post.title}
            likes={post.likes}
            shares={post.shares}
          />
        ))}
      </CardWrapper>
    </FeedWrapper>
  );
};

export default Feed;
