import React from "react";
import { Image } from "@imagekit/react";

const image = ({path, alt, className, w, h}) => {
  return (
    <Image
      urlEndpoint={import.meta.env.VITE_URL_IMAGEKIT_ENDPOINT}
      src={path}
      transformation={[
        {
          height: h,
          width: w,
        },
      ]}
      loading="lazy"
      alt={alt}
      className={className}
      lqip={{ active: true, quality: 20 }}
    />
  );
};

export default image;
