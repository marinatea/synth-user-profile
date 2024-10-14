import React from "react";
import Arrow from "../../assets/icons/a_icon_arrow.svg";
import Notifications from "../../assets/icons/notifications.svg";
import Share from "../../assets/icons/share_recap.svg";
import Medium from "../../assets/icons/medium.svg";

import {
  UserBarContainer,
  Avatar,
  UserName,
  IconButton,
} from "./UserBarStyles";

interface UserBarProps {
  userName: string;
  avatarUrl: string;
}

const UserBar: React.FC<UserBarProps> = ({ userName, avatarUrl }) => {
  return (
    <UserBarContainer>
      <Avatar src={avatarUrl} alt={"avatar"} />
      <UserName>{userName}</UserName>
      <IconButton>
        <img src={Arrow} alt="Arrow" />
      </IconButton>
      <IconButton>
        <img src={Notifications} alt="Notifications" />
      </IconButton>
      <IconButton>
        <img src={Share} alt="Share" />
      </IconButton>
      <IconButton>
        <img src={Medium} alt="Medium" />
      </IconButton>{" "}
    </UserBarContainer>
  );
};

export default UserBar;
