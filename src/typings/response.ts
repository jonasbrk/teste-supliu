export interface ITrack {
id: number,
title: string,
number: number,
duration: number,   
}

export interface IAlbum {
    id: number,
    name: string,
    tracks: ITrack[],
    year: number,
}
