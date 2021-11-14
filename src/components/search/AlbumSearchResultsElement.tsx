import './AlbumSearchResultsElement.scss'

type AlbumSearchResultsElementProps = {
  coverURL: string
  albumName: string
  artists: string[]
}

const AlbumSearchResultsElement = ({
  coverURL,
  albumName,
  artists,
}: AlbumSearchResultsElementProps) => {
  return (
    <div className="AlbumSearchResultsElement">
      <img
        className="AlbumSearchResultsElement_image"
        src={coverURL}
        alt={albumName}
      />
      <div className="AlbumSearchResultsElement_albumName">{albumName}</div>
      <div className="AlbumSearchResultsElement_artists">
        {artists.length > 0 && artists[0]}
      </div>
    </div>
  )
}

export default AlbumSearchResultsElement
