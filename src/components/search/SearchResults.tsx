import './SearchResults.scss'

import SearchResultsSection from './SearchResultsSection'
import ArtistSearchResults from './ArtistSearchResults'
import { generateMockSearchResult } from '../../mock/MockSearchResult'
import TrackSearchResults from './TrackSearchResults'
import AlbumSearchResults from './AlbumSearchResults'
import PlaylistSearchResults from './PlaylistSearchResults'

type SearchResultsProps = {}

const SearchResults = (props: SearchResultsProps) => {
  const artist = generateMockSearchResult().artists.items[0]
  const artists = [...Array(10)].map((_) => ({
    name: artist.name,
    imageUrl: artist.images[0].url,
    pageUrl: '',
  }))

  const tracks = generateMockSearchResult().tracks.items.map((track) => ({
    songName: track.name,
    album: track.album.name,
    artists: track.artists.map((artist) => artist.name),
    imageURL: track.album.images[0].url,
    durationMs: track.duration_ms,
  }))

  const albums = generateMockSearchResult().albums.items.map((album) => ({
    albumName: album.name,
    coverURL: album.images[0].url,
    artists: album.artists.map((artist) => artist.name),
  }))

  const playlists = generateMockSearchResult().playlists.items.map(
    (playlist) => ({
      name: playlist.name,
      imageUrl: playlist.images[0].url,
      pageUrl: '',
    }),
  )

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
