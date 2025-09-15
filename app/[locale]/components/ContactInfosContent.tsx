import React from "react";

interface ContactInfosProps {
  icon: string;
  title: string;
  text: string;
  link: string;
}

const ContactInfosContent: React.FC<ContactInfosProps> = ({
  icon,
  title,
  text,
  link,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <img src={`${icon}`} alt="" className="w-fit" />
      <div className="flex flex-col gap-2">
        <h4 className="text-h4">{title}</h4>
        <p className="text-medium-normal">{text}</p>
        <a href="#" className="text-regular-normal underline">
          {link}
        </a>
      </div>
    </div>
  );
};

export default ContactInfosContent;
