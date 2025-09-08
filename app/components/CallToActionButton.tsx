import React from "react";

interface CallToActionProps {
  extraClasses?: string;
}

const CallToActionButton: React.FC<CallToActionProps> = ({ extraClasses }) => {
  return (
    <div className={`cta w-fit h-fit ${extraClasses}`}>
      <a href="#" className="cta-button-primary">
        Kérjen ajánlatot!
      </a>
    </div>
  );
};

export default CallToActionButton;
