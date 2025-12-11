import React from "react";
import Image from "next/image";

interface ServiceImagesProps {
  img1: string;
  img2: string;
  img3?: string;
}

const ServiceImages: React.FC<ServiceImagesProps> = ({ img1, img2, img3 }) => {
  return (
    <section className="service-images-section flex items-center justify-center py-16">
      {img3 && (
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8 px-8">
          <Image
            src={img1}
            alt=""
            width={500}
            height={64}
            className="w-full h-64 object-cover"
          />
          <Image
            src={img2}
            alt=""
            width={500}
            height={64}
            className="w-full h-64 object-cover"
          />
          <Image
            src={img3}
            alt=""
            width={500}
            height={64}
            className="w-full h-64 object-cover"
          />
        </div>
      )}
      {!img3 && (
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 px-8">
          <Image
            src={img1}
            alt=""
            width={500}
            height={64}
            className="w-full h-64 object-cover"
          />
          <Image
            src={img2}
            alt=""
            width={500}
            height={64}
            className="w-full h-64 object-cover"
          />
        </div>
      )}
    </section>
  );
};

export default ServiceImages;
