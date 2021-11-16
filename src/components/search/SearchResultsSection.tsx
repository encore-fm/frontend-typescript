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
      <header>
        <h2 className="SearchResultsSection__title">{title}</h2>
        <div className="SearchResultsSection__button-more">more</div>
      </header>
      {children}
    </section>
  )
}

export default SearchResultsSection
