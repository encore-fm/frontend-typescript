import './ArtistSearchResults.scss'
import ArtistSearchResultsElement, {
  ArtistInfo,
} from './ArtistSearchResultsElement'

type ArtistSearchResultsProps = {
  artists: ArtistInfo[]
  maxItems?: number
}

const ArtistSearchResults = ({
  artists,
  maxItems = 10,
}: ArtistSearchResultsProps) => {
  return (
    <div className="ArtistSearchResults">
      {artists.slice(0, maxItems).map(({ name, imageUrl, pageUrl }, index) => (
        <ArtistSearchResultsElement
          name={name}
          imageUrl={imageUrl}
          pageUrl={pageUrl}
          key={index}
        />
      ))}
    </div>
  )
}

export default ArtistSearchResults
