import React from "react";
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
  const renderShareMethod = (label: string) => {
    const parts = label.split(" ");
    return (
      <ShareMethod>
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
      </ShareMethod>
    );
  };

  return (
    <Card>
      <CardHeader>
        {shareMethod && (
          <ShareMethod>
            {shareMethod.type === "weblink" && (
              <img src={Link} alt="Link icon" />
            )}
            {renderShareMethod(shareMethod.label)}
          </ShareMethod>
        )}
        <Title>{title}</Title>
      </CardHeader>
      <CardFooter>
        <UserWrapper>
          <Avatar src={avatar} alt={`Avatar of ${author}`} />
          <Username>{author}</Username>
        </UserWrapper>
        <InterWrapper>
          {shares ? (
            <FooterAction>
              <img src={Play} alt="Share icon" />
              {shares}
            </FooterAction>
          ) : null}
          {likes ? (
            <FooterAction>
              <img src={Like} alt="Like icon" />
              {likes}
            </FooterAction>
          ) : null}
          {!shares && !likes && (
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
