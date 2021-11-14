import AlbumSearchResultsElement from "./AlbumSearchResultsElement";

import "./AlbumSearchResults.scss"

type AlbumSearchResultsProps = {
    albums: {
        coverURL: string
        albumName: string
        artists: string[]
    }[]
}

const AlbumSearchResults = ({albums}: AlbumSearchResultsProps) => {
    return (
        <div className="AlbumSearchResults">
            <div className="AlbumSearchResults_title">
                Albums.
            </div>

            <div className="AlbumSearchResults_results">
                {albums.length > 0 && albums.map((album, idx) => (
                    <AlbumSearchResultsElement
                        coverURL={album.coverURL}
                        albumName={album.albumName}
                        artists={album.artists}
                        key={idx}
                    />
                ))}
            </div>
        </div>
    )
}

export default AlbumSearchResults;
