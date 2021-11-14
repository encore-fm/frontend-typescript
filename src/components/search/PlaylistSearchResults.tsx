import './PlaylistSearchResults.scss'
import PlaylistSearchResultsElement from './PlaylistSearchResultsElement'

type PlaylistSearchResultsProps = {
  playlists: {
    name: string
    imageUrl: string
    pageUrl: string
  }[]
  maxItems?: number
}

const PlaylistSearchResults = ({
  playlists,
  maxItems = 10,
}: PlaylistSearchResultsProps) => {
  return (
    <div className="PlaylistSearchResults">
      {playlists
        .slice(0, maxItems)
        .map(({ name, imageUrl, pageUrl }, index) => (
          <PlaylistSearchResultsElement
            name={name}
            imageUrl={imageUrl}
            pageUrl={pageUrl}
            key={index}
          />
        ))}
    </div>
  )
}

export default PlaylistSearchResults
