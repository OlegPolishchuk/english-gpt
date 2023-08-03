import React from 'react';

import Image from 'next/image';

interface Props {
  className?: string;
  src: string;
  width?: number;
  height?: number;
  alt?: string;
}

export const UserAvatar = ({
  src,
  height,
  className,
  width,
  alt = 'this is my avatar',
}: Props) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={!width && !height}
      className={className}
      style={{ borderRadius: '50%' }}
    />
  );
};
