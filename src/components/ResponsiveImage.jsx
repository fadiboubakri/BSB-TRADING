import React from 'react';

const ResponsiveImage = ({ src, alt, className, desktopSrc, mobileSrc }) => {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktopSrc} />
      <source media="(max-width: 767px)" srcSet={mobileSrc} />
      <img src={src} alt={alt} className={className} />
    </picture>
  );
};

export default ResponsiveImage;


