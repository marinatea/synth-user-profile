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
} from "./PostCardStyles";
import Play from "../../assets/icons/icon_play.svg";
import Like from "../../assets/icons/icon_like.svg";

interface PostCardProps {
  author: string;
  avatar: string;
  title: string;
  likes: number;
  shares: number;
}

const PostCard: React.FC<PostCardProps> = ({
  author,
  avatar,
  title,
  likes,
  shares,
}) => {
  return (
    <Card>
      <CardHeader>
        <Title>{title}</Title>
      </CardHeader>
      <CardFooter>
        <UserWrapper>
          <Avatar src={avatar} alt={author} />
          <Username>{author}</Username>
        </UserWrapper>
        <InterWrapper>
          <FooterAction>
            <img src={Play} alt="play" />
            {likes}
          </FooterAction>
          <FooterAction>
            <img src={Like} alt="play" />
            {shares}
          </FooterAction>
        </InterWrapper>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
