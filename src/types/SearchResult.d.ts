type SearchResult = {
  tracks: ItemList<SpotifyTrack>
  albums: ItemList<SpotifyAlbum>
  artists: ItemList<SpotifyArtist>
  playlists: ItemList<SpotifyPlaylist>
}

type ItemList<T> = {
  items: T[]
}

type SpotifyImage = {
  url: string
  height: number
  width: number
}

type SpotifyTrack = {
  album: SpotifyAlbum
  artists: SpotifyArtist[]
  duration_ms: number
  explicit: boolean
  id: string
  is_playable?: boolean
  name: string
  popularity: number
  uri: string
}

type SpotifyAlbum = {
  album_type: string
  total_tracks: number
  images: SpotifyImage[]
  name: string
  release_date: string
  release_date_precision: string
  uri: string
  artists: SpotifyArtist[]
  tracks: ItemList<SpotifyTrack>
}

type SpotifyArtist = {
  followers: SpotifyFollowers
  genres: string[]
  id: string
  images: SpotifyImage[]
  name: string
  popularity: number
  uri: string
}

type SpotifyPlaylist = {
  collaborative: boolean
  description?: string
  followers: SpotifyFollowers
  id: string
  images: SpotifyImage[]
  name: string
  owner: SpotifyPlaylistOwner
  public: boolean
  tracks: ItemList<SpotifyTrack>
  uri: string
}

type SpotifyFollowers = {
  total: number
}

type SpotifyPlaylistOwner = {
  display_name?: string
  followers: SpotifyFollowers
  id: string
}
