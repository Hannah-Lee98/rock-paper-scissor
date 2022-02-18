import React, { FC } from 'react';

export const PentagonIcon: FC<any> = props => {
  const { style, className } = props;
  return (
    <svg
      className={className}
      style={{ ...style }}
      width="490"
      height="467"
      viewBox="0 0 490 467"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100.5 459L393 459L482.5 180L246.5 8.00002L8.00004 180L100.5 459Z"
        stroke="black"
        opacity="0.1"
        strokeWidth="15"
        strokeLinejoin="round"
      />
    </svg>
  );
};
