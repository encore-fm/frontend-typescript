import React from 'react'
import './PlaylistElement.scss'
import { VoteButtons, VoteStatus } from './VoteButtons'
import SongInfo from './SongInfo'

type PlaylistElementProps = {
  songName: string
  album: string
  artists: string[]
  suggestedBy: string
  imageURL: string

  isLastElement: boolean
}

const PlaylistElement = ({
  songName,
  album,
  artists,
  suggestedBy,
  imageURL,
  isLastElement = false,
}: PlaylistElementProps) => {
  return (
    <div
      className={`PlaylistElement ${
        isLastElement ? 'PlaylistElement--NoBorder' : ''
      }`}
    >
      <img className="PlaylistElement_image" src={imageURL} alt={songName} />

      <div className="PlaylistElement_songInfo">
        <SongInfo
          songName={songName}
          album={album}
          artists={artists}
          suggestedBy={suggestedBy}
        />
      </div>

      <div className="PlaylistElement_voteButtons">
        <VoteButtons
          voteStatus={VoteStatus.UP /*todo*/}
          onVote={() => {} /*todo*/}
          numVotes={3} /*todo*/
        />
      </div>
    </div>
  )
}

export default PlaylistElement
