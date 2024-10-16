import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardFooter,
  CardHeader,
  FooterAction,
  InterWrapper,
  Title,
  Username,
  UserWrapper,
  ShareMethod,
  ShareButton,
} from "./PostCardStyles";
import Play from "../../assets/icons/icon_play.svg";
import Like from "../../assets/icons/icon_like.svg";
import { colors } from "../../styles/colors";
import Link from "../../assets/icons/icon_link.svg";
interface PostCardProps {
  author: string;
  avatar: string;
  title: string;
  likes?: number;
  shares?: number;
  shareMethod?: {
    type: string;
    label: string;
  } | null;
}

const PostCard: React.FC<PostCardProps> = ({
  author,
  avatar,
  title,
  likes,
  shares,
  shareMethod,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const renderShareMethod = (label: string) => {
    const parts = label.split(" ");
    return (
      <>
        {parts.map((part, index) => (
          <span key={index}>
            {part.startsWith("#") ? (
              <span style={{ background: colors.color.hover }}>{part}</span>
            ) : (
              part
            )}
            {index < parts.length - 1 && " "}
          </span>
        ))}
      </>
    );
  };

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <Card
      onClick={toggleFlip}
      style={{
        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)",
        transition: "transform 0.6s",
      }}
    >
      <CardHeader>
        {shareMethod && (
          <ShareMethod>
            {shareMethod.type === "weblink" && <img src={Link} alt="link" />}
            {renderShareMethod(shareMethod.label)}
          </ShareMethod>
        )}
        <Title>{title}</Title>
      </CardHeader>

      <CardFooter>
        <UserWrapper>
          <Avatar src={avatar} alt={author} />
          <Username>{author}</Username>
        </UserWrapper>
        <InterWrapper>
          {shares !== 0 && (
            <FooterAction>
              <img src={Play} alt="share" />
              {shares}
            </FooterAction>
          )}
          {likes !== 0 && (
            <FooterAction>
              <img src={Like} alt="like" />
              {likes}
            </FooterAction>
          )}
          {shares === 0 && likes === 0 && (
            <FooterAction>
              <ShareButton>Share</ShareButton>
            </FooterAction>
          )}
        </InterWrapper>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
