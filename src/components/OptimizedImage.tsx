import React from 'react';

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
        transform: 'translateZ(0)', // Force hardware acceleration for Safari
      }}
      onLoad={(e) => {
        // Safari-specific optimization: remove transform after load
        (e.target as HTMLImageElement).style.transform = '';
      }}
    />
  );
};

export default OptimizedImage;