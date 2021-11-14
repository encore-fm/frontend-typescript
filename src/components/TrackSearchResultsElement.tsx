import SongInfo from './SongInfo';
import SuggestButton from './SuggestButton';

import "./TrackSearchResultsElement.scss";

type TrackSearchResultsElementProps = {
    songName: string
    album: string
    artists: string[]
    imageURL: string
    durationMs: number
}

const TrackSearchResultsElement = ({ songName, album, artists, imageURL, durationMs }: TrackSearchResultsElementProps) => {
    return (
        <div className="TrackSearchResultsElement">
            <img className="TrackSearchResultsElement_image" src={imageURL} alt={album}/>

            <div className="TrackSearchResultsElement_songInfo">
                <SongInfo
                    songName={songName}
                    album={album}
                    artists={artists}
                    durationMs={durationMs}
                />
            </div>

            <div className="TrackSearchResultsElement_suggestButton">
                <SuggestButton 
                    onClick={() => {} /*todo*/}
                />
            </div>
    </div>
    )
}

export default TrackSearchResultsElement;
