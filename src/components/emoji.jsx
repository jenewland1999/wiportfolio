import * as React from "react";

const Emoji = ({ emoji, isDecorative = false, label = "" }) => {
  return (
    <span
      role="img"
      aria-hidden={isDecorative}
      aria-label={!isDecorative && label}
    >
      {emoji}
    </span>
  );
};

export default Emoji;
