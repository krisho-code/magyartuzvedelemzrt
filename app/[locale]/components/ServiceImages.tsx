import React from "react";

interface ServiceImagesProps {
  imgs: string;
}

const ServiceImages: React.FC<ServiceImagesProps> = ({ imgs }) => {
  return (
    <section className="service-images-section flex items-center justify-center py-16">
      <div className="container grid grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        <img src={`${imgs}`} alt="" />
        <img src={`${imgs}`} alt="" />
        <img src={`${imgs}`} alt="" />
        <img src={`${imgs}`} alt="" />
      </div>
    </section>
  );
};

export default ServiceImages;
