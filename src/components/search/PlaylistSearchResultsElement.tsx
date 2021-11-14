import './PlaylistSearchResultsElement.scss'

type PlaylistSearchResultsElementProps = {
  name: string
  imageUrl: string
  pageUrl: string
}

const PlaylistSearchResultsElement = ({
  name,
  imageUrl,
  pageUrl,
}: PlaylistSearchResultsElementProps) => {
  return (
    <div className="PlaylistSearchResultsElement">
      <img
        className="PlaylistSearchResultsElement_image"
        src={imageUrl}
        alt={name}
      />
      <div className="PlaylistSearchResultsElement_name">{name}</div>
    </div>
  )
}

export default PlaylistSearchResultsElement
