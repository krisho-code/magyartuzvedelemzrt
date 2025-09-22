import React from "react";
import Link from "next/link";

interface CallToActionProps {
  link?: string;
  extraClasses?: string;
  buttonType?: string;
  text: string;
  mobileToggle?: () => void;
}

const CallToActionButton: React.FC<CallToActionProps> = ({
  link = "#",
  extraClasses,
  buttonType = "primary",
  text,
  mobileToggle,
}) => {
  return (
    <Link
      href={link}
      className={`cta-button ${buttonType} block w-fit h-fit py-3 px-6 ${extraClasses}`}
      onClick={mobileToggle}
    >
      {text}
    </Link>
  );
};

export default CallToActionButton;
