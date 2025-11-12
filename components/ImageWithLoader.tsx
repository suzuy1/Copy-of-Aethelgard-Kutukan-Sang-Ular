
import React, { useState } from 'react';

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full bg-slate-800">
      {isLoading && (
        <div className="absolute inset-0 bg-slate-700 animate-pulse"></div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-700 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default ImageWithLoader;
