import React from "react";
import UserBoard from "../../components/UserBoard/UserBoard";
import { CardWrapper, FeedWrapper } from "../Feed/FeedStyles";
import PostCard from "../../components/PostCard/PostCard";
import postData from "../../postData.json";
import PrivacyToggle from "../../components/PrivacyButton/PrivacyButton";

const Feed: React.FC = () => {
  return (
    <FeedWrapper>
      <UserBoard userIndex={1} />
            <PrivacyToggle />
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
    </FeedWrapper>
  );
};

export default Feed;
