import TrackSearchResultsElement from "./TrackSearchResultsElement";

import "./TrackSearchResults.scss"

type TrackSearchResultsProps = {
    tracks: {
        songName: string
        album: string
        artists: string[]
        imageURL: string
        durationMs: number
    }[]
}

const TrackSearchResults = ({tracks}: TrackSearchResultsProps) => {
    return (
        <div className="TrackSearchResults">
            <div className="TrackSearchResults_title">
                Songs.
            </div>
            {TrackSearchResults.length > 0 && tracks.map((track, idx) => (
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

export default TrackSearchResults;
