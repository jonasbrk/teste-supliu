import React from 'react';

export const useTimeFormater = (seg : number, cursive ?: boolean) => {
  let formatedTime = '';
  
  if (seg <= 3600) {
    let minString = Math.floor(seg / 60);
    let segString = String(((seg % 60)).toFixed(0)).padStart(2, '0');

    formatedTime = `${minString}${cursive ? 'min ' : ':'}${segString}${
      cursive ? 'seg' : ''
    }`;
  } else {
    let hr = Math.floor(seg / 3600);
    let min = Math.floor((seg % 3600)).toFixed(0);
  
    formatedTime = `${hr}${cursive ? 'h ' : ''}${min}${cursive ? 'min' : ''}`;
  }
  
  return formatedTime;
};