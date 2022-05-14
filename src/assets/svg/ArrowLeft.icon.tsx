
import React from 'react';
import { Colors } from '../../styles/colors';

interface svgProps {
    heigth?: string
    width?: string
    fill?: string
    }

export const ArrowLeftIcon: React.FC<svgProps> = (props) => {
  const { fill = Colors.darkerGray, heigth, width} = props;
  return (
    <svg
      role="img"
      height={heigth}
      width={width}
      fill={fill}
      viewBox="0 0 24 24"
    >
      <path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path>
    </svg>
  );
};