import React from "react";
import './PlaylistElement.scss';

type PlaylistElementProps = {
    songName: string
    album: string
    artists: string[]
    suggestedBy: string
    imageURL: string

    isLastElement: boolean
}

const PlaylistElement = ({songName, album, artists, suggestedBy, imageURL, isLastElement = false}:
                             PlaylistElementProps) => {
    return (
        <div className={`PlaylistElement ${isLastElement ? "PlaylistElement--NoBorder" : ""}`}>
            <img className="PlaylistElement_image" src={imageURL} alt={songName}/>
            <div className="PlaylistElement_songInfo">
                <div className="PlaylistElement_songInfo_songName">
                    {songName}
                </div>
                <div className="PlaylistElement_songInfo_album">
                    {album}
                </div>
                <div className="PlaylistElement_songInfo_artists">
                    {artists.join(', ')}
                </div>
                <div className="PlaylistElement_songInfo_suggestedBy">
                    {`suggested by ${suggestedBy}`}
                </div>
            </div>
        </div>
    )
};

export default PlaylistElement;
