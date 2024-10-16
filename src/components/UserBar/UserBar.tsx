import React, { useState } from "react";
import Arrow from "../../assets/icons/a_icon_arrow.svg";
import Notifications from "../../assets/icons/notifications.svg";
import Share from "../../assets/icons/share_recap.svg";
import Medium from "../../assets/icons/medium.svg";
import Edit from "../../assets/icons/report.svg";
import Settings from "../../assets/icons/settings.svg";

import {
  UserBarContainer,
  Avatar,
  UserName,
  IconButton,
  MenuContainer,
  ActionButton,
  IconButt,
  IconWrapper,
} from "./UserBarStyles";

interface UserBarProps {
  userName: string;
  avatarUrl: string;
}

const UserBar: React.FC<UserBarProps> = ({ userName, avatarUrl }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  const handleMenuAction = (action: "report" | "block") => {
    if (action === "report") {
      alert("User reported");
    } else if (action === "block") {
      alert("User blocked");
    }
    setMenuVisible(false);
  };

  return (
    <UserBarContainer>
      <UserName>
        <Avatar src={avatarUrl} alt="User avatar" />
        {userName}
        <IconButt onClick={toggleMenu} aria-label="Toggle edit">
          <img src={Arrow} alt="Arrow icon" />
        </IconButt>
        {menuVisible && (
          <MenuContainer visible={menuVisible}>
            <ActionButton onClick={() => handleMenuAction("report")}>
              <img src={Edit} alt="report" />
              Edit Profile
            </ActionButton>
            <ActionButton onClick={() => handleMenuAction("block")}>
              <img src={Settings} alt="block" />
              Settings
            </ActionButton>
          </MenuContainer>
        )}
      </UserName>

      <IconWrapper>
        <IconButton aria-label="Notifications">
          <img src={Notifications} alt="Notifications icon" />
        </IconButton>

        <IconButton aria-label="Share">
          <img src={Share} alt="Share icon" />
        </IconButton>

        <IconButton aria-label="Medium">
          <img src={Medium} alt="Medium icon" />
        </IconButton>
      </IconWrapper>
    </UserBarContainer>
  );
};

export default UserBar;
