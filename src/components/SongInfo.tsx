import React from 'react'
import { prettyTime } from '../util/Formatter'
import './SongInfo.scss'

type SongInfoProps = {
  songName: string
  album: string
  artists: string[]
  suggestedBy?: string
  durationMs?: number
}

const SongInfo = ({
  songName,
  album,
  artists,
  suggestedBy,
  durationMs,
}: SongInfoProps) => {
  return (
    <div className="SongInfo">
      <div className="SongInfo_songName">{songName}</div>
      <div className="SongInfo_album">{album}</div>
      <div className="SongInfo_artists">{artists.join(', ')}</div>

      {suggestedBy && (
        <div className="SongInfo_suggestedBy">
          suggested by <span className="highlight">{suggestedBy}</span>
        </div>
      )}

      {durationMs && (
        <div className="SongInfo_duration">{prettyTime(durationMs)}</div>
      )}
    </div>
  )
}

export default SongInfo
