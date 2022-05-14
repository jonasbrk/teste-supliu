import React from 'react';
import { Colors } from '../../styles/colors';

interface svgProps {
    heigth?: string
    width?: string
    fill?: string
    strokeWidth?: string
    }

export const LoadingIcon: React.FC<svgProps> = (props) => {
  const { fill = Colors.darkerGray , heigth = '100%' ,width = '100%', strokeWidth = '6'} = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: 'auto', display: 'block', shapeRendering: 'auto', transform: 'translate(-1px, -1px)' }} width={width} height={heigth} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" >
      <circle cx="50" cy="50" fill="none" stroke={fill} strokeWidth={strokeWidth} r="35" strokeDasharray="164.93361431346415 56.97787143782138">
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1" />
      </circle>
    </svg >
  );
};