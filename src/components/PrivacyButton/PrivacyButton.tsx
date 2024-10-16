import { useState } from "react";
import {
  ToggleInput,
  ToggleLabel,
  ToggleSlider,
  ToggleSwitch,
  ToggleWrapper,
} from "./PrivacyButtonStyles";

const PrivacyToggle: React.FC = () => {
  const [isPublic, setIsPublic] = useState(true);

  const handleToggle = () => {
    setIsPublic(!isPublic);
  };

  return (
    <ToggleWrapper>
      <ToggleLabel>Public</ToggleLabel>
      <ToggleSwitch>
        <ToggleInput
          type="checkbox"
          checked={isPublic}
          onChange={handleToggle}
        />
        <ToggleSlider />
      </ToggleSwitch>
      <ToggleLabel>Private</ToggleLabel>
    </ToggleWrapper>
  );
};

export default PrivacyToggle;
