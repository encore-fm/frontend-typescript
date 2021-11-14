import './SearchResultsSection.scss'

type SearchResultsSectionProps = {
  title: string
  children: React.ReactNode
}

const SearchResultsSection = ({
  title,
  children,
}: SearchResultsSectionProps) => {
  return (
    <section className="SearchResultsSection">
      <h2 className="SearchResultsSection__title">{title}</h2>
      {children}
    </section>
  )
}

export default SearchResultsSection
