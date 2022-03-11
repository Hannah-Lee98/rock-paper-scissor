import React, { FC } from 'react';

export const TriangleIcon: FC<any> = props => {
  const { style, className } = props;
  return (
    <svg
      className={className}
      style={{ ...style }}
      width="434"
      height="375"
      viewBox="0 0 434 375"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity={0.2}
        id="Polygon 1"
        d="M13.484 367.5L217 15L420.516 367.5H13.484Z"
        stroke="black"
        strokeWidth="15"
      />
    </svg>
  );
};
