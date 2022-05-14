import React, { createContext } from 'react';
import { IAlbum } from '../typings/response';

interface AlbumsContextProps {
    albumsData: IAlbum[]
    setAlbumsData: React.Dispatch<IAlbum[]>
}

export const AlbumsContext = createContext<AlbumsContextProps>({} as AlbumsContextProps);