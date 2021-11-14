import TrackSearchResultsElement from './TrackSearchResultsElement'

import './TrackSearchResults.scss'

type TrackSearchResultsProps = {
  tracks: {
    songName: string
    album: string
    artists: string[]
    imageURL: string
    durationMs: number
  }[]
  maxItems?: number
}

const TrackSearchResults = ({
  tracks,
  maxItems = 3,
}: TrackSearchResultsProps) => {
  return (
    <div className="TrackSearchResults">
      {tracks.slice(0, maxItems).map((track, idx) => (
        <TrackSearchResultsElement
          songName={track.songName}
          album={track.album}
          artists={track.artists}
          imageURL={track.imageURL}
          durationMs={track.durationMs}
          key={idx}
        />
      ))}
    </div>
  )
}

export default TrackSearchResults
