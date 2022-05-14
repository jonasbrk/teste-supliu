import React from 'react';
import { Small } from '../../styles/typogaphy';
import { ITrack } from '../../typings/response';
import { useTimeFormater } from '../../utils/useTimeFormater';
import { SongContainer, SongWrapper } from './Song.styles';

interface SongProps {
data: ITrack
}
export const Song: React.FC<SongProps> = (props) => {
  const {id, duration, number, title } = props.data;
  return (
    <SongContainer>
      <SongWrapper column='index'>
        <Small fontWeight='regular'>
          {number}
        </Small>   
      </SongWrapper>
      <SongWrapper column='first'>
        <Small fontWeight='regular'>
          {title}
        </Small>      
      </SongWrapper>
      <SongWrapper column='last'>
        <Small fontWeight='regular'>
          {useTimeFormater(duration)}
        </Small>
      </SongWrapper>
    </SongContainer>
  );
};
