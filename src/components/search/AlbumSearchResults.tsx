import AlbumSearchResultsElement from './AlbumSearchResultsElement'

import './AlbumSearchResults.scss'

type AlbumSearchResultsProps = {
  albums: {
    coverURL: string
    albumName: string
    artists: string[]
  }[]
}

const AlbumSearchResults = ({ albums }: AlbumSearchResultsProps) => {
  return (
    <div className="AlbumSearchResults">
      {albums.map((album, idx) => (
        <AlbumSearchResultsElement
          coverURL={album.coverURL}
          albumName={album.albumName}
          artists={album.artists}
          key={idx}
        />
      ))}
    </div>
  )
}

export default AlbumSearchResults
