import React from "react";

interface CallToActionProps {
  extraClasses?: string;
  buttonType?: string;
  text: string;
}

const CallToActionButton: React.FC<CallToActionProps> = ({
  extraClasses,
  buttonType = "primary",
  text,
}) => {
  return (
    <a
      href="#"
      className={`cta-button ${buttonType} w-fit h-fit py-3 px-6 ${extraClasses}`}
    >
      {text}
    </a>
  );
};

export default CallToActionButton;
