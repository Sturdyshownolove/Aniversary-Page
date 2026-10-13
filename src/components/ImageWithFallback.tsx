import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackSrc,
  className,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [attemptIndex, setAttemptIndex] = useState<number>(0);
  const [hasError, setHasError] = useState<boolean>(false);

  // Generate candidate extensions if file fails to load
  const handleError = () => {
    if (attemptIndex === 0) {
      // Try switching extension (.jpg <-> .jpeg <-> .png <-> .webp)
      if (src.endsWith('.jpg')) setImgSrc(src.replace(/\.jpg$/, '.jpeg'));
      else if (src.endsWith('.jpeg')) setImgSrc(src.replace(/\.jpeg$/, '.png'));
      else if (src.endsWith('.png')) setImgSrc(src.replace(/\.png$/, '.webp'));
      else if (src.endsWith('.webp')) setImgSrc(src.replace(/\.webp$/, '.jpg'));
      else setImgSrc(src + '.jpg');
      setAttemptIndex(1);
    } else if (attemptIndex === 1) {
      // Try uppercase .JPG / .JPEG
      if (src.endsWith('.jpg')) setImgSrc(src.replace(/\.jpg$/, '.JPG'));
      else if (src.endsWith('.jpeg')) setImgSrc(src.replace(/\.jpeg$/, '.JPEG'));
      else if (src.endsWith('.png')) setImgSrc(src.replace(/\.png$/, '.PNG'));
      else setImgSrc(fallbackSrc || 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80');
      setAttemptIndex(2);
    } else {
      // Final fallback image
      setImgSrc(fallbackSrc || 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80');
      setHasError(true);
    }
  };

  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={className}
    />
  );
};
