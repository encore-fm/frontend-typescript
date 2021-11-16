import './SearchResults.scss'

import SearchResultsSection from './SearchResultsSection'
import ArtistSearchResults from './ArtistSearchResults'
import TrackSearchResults from './TrackSearchResults'
import AlbumSearchResults from './AlbumSearchResults'
import PlaylistSearchResults from './PlaylistSearchResults'

type SearchResultsProps = {
  result: SearchResult
}

const SearchResults = ({ result }: SearchResultsProps) => {
  const defaultImage = `${process.env.PUBLIC_URL}/logo512.png`

  const artists = result.artists.items.map((artist) => ({
    name: artist.name,
    imageUrl: artist.images[0]?.url ?? defaultImage,
    pageUrl: '',
  }))

  const tracks = result.tracks.items.map((track) => ({
    songName: track.name,
    album: track.album.name,
    artists: track.artists.map((artist) => artist.name),
    imageURL: track.album.images[0]?.url ?? defaultImage,
    durationMs: track.duration_ms,
  }))

  const albums = result.albums.items.map((album) => ({
    albumName: album.name,
    coverURL: album.images[0]?.url ?? defaultImage,
    artists: album.artists.map((artist) => artist.name),
  }))

  const playlists = result.playlists.items.map((playlist) => ({
    name: playlist.name,
    imageUrl: playlist.images[0]?.url ?? defaultImage,
    pageUrl: '',
  }))

  return (
    <div className="SearchResults">
      <SearchResultsSection title="Tracks">
        <TrackSearchResults tracks={tracks} />
      </SearchResultsSection>
      <SearchResultsSection title="Artists">
        <ArtistSearchResults artists={artists} />
      </SearchResultsSection>
      <SearchResultsSection title="Albums">
        <AlbumSearchResults albums={albums} />
      </SearchResultsSection>
      <SearchResultsSection title="Playlists">
        <PlaylistSearchResults playlists={playlists} />
      </SearchResultsSection>
    </div>
  )
}

export default SearchResults
