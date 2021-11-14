import './ArtistSearchResults.scss'
import ArtistSearchResultsElement, {
  ArtistInfo,
} from './ArtistSearchResultsElement'

type ArtistSearchResultsProps = {
  artists: ArtistInfo[]
}

const ArtistSearchResults = ({ artists }: ArtistSearchResultsProps) => {
  return (
    <div className="ArtistSearchResults">
      {artists.map(({ name, imageUrl, pageUrl }, index) => (
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
