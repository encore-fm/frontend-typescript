import React from 'react'
import PlaylistElement from './PlaylistElement'
import './Playlist.scss'

type PlaylistViewProps = {
  playlist: Song[]
}

const Playlist = ({ playlist }: PlaylistViewProps) => {
  return (
    <div className="Playlist">
      {playlist.length > 0 &&
        playlist.map((song, idx) => (
          <PlaylistElement
            songName={song.name}
            album={song.albumName}
            artists={song.artists}
            suggestedBy={song.suggestedBy}
            imageURL={song.coverURL}
            isLastElement={idx === playlist.length - 1}
            key={idx}
          />
        ))}
    </div>
  )
}

export default Playlist
