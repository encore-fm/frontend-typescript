import './ArtistSearchResultsElement.scss'

export type ArtistInfo = {
  name: string
  imageUrl: string
  pageUrl: string
}

type ArtistSearchResultsElementProps = ArtistInfo

// todo: link with react router
const ArtistSearchResultsElement = ({
  name,
  imageUrl,
  pageUrl,
}: ArtistSearchResultsElementProps) => {
  return (
    <a href={`#${pageUrl}`}>
      <div className="ArtistSearchResultsElement">
        <div className="ArtistSearchResultsElement__image">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="ArtistSearchResultsElement__name">{name}</div>
      </div>
    </a>
  )
}

export default ArtistSearchResultsElement
