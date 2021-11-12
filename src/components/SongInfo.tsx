import React from 'react'
import './SongInfo.scss'

type SongInfoProps = {
    songName: string
    album: string
    artists: string[]
    suggestedBy: string
}

const SongInfo = ({ songName, album, artists, suggestedBy }: SongInfoProps) => {
    return (
        <div className="SongInfo">
            <div className="SongInfo_songName">{songName}</div>
            <div className="SongInfo_album">{album}</div>
            <div className="SongInfo_artists">{artists.join(', ')}</div>
            <div className="SongInfo_suggestedBy">
                suggested by <span className="highlight">{suggestedBy}</span>
            </div>
        </div>
    )
}

export default SongInfo
