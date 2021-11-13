import './SearchResultSection.scss'

type SearchResultSectionProps = {
  title: string
  children: React.ReactNode
}

const SearchResultSection = ({ title, children }: SearchResultSectionProps) => {
  return (
    <section className="SearchResultSection">
      <h2 className="SearchResultSection__title">{title}</h2>
      {children}
    </section>
  )
}

export default SearchResultSection
