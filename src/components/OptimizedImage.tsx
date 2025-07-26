import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  loading = 'lazy',
  priority = false 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      width={width}
      height={height}
      {...(priority && { fetchpriority: 'high' })}
      style={{
        maxWidth: '100%',
        height: 'auto',
        imageRendering: 'auto',
        transform: isLoaded ? 'none' : 'translateZ(0)',
        willChange: isLoaded ? 'auto' : 'transform',
        backfaceVisibility: 'hidden',
        perspective: 1000,
      }}
      onLoad={(e) => {
        setIsLoaded(true);
        // Safari-specific optimizations
        const img = e.target as HTMLImageElement;
        img.style.transform = 'none';
        img.style.willChange = 'auto';
      }}
      onError={() => {
        setHasError(true);
        setIsLoaded(true);
      }}
    />
  );
};

export default OptimizedImage;