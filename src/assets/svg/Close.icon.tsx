import React from 'react';
import { Colors } from '../../styles/colors';

interface svgProps {
    height?: string
    width?: string
    fill?: string
    }

export const CloseIcon: React.FC<svgProps> = (props) => {
  const { fill = Colors.darkerGray, height, width} = props;
  return (
    <svg
      role="img"
      height={height}
      width={width}
      fill={fill}
      className="Svg-sc-1bi12j5-0 hDgDGI mOLTJ2mxkzHJj6Y9_na_"
      viewBox="0 0 24 24"
    >
      <path d="M3.293 3.293a1 1 0 011.414 0L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 010-1.414z"></path>
    </svg>
  );
};