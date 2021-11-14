import './SearchBar.scss'

type SearchBarProps = {
  query: string
  onChange?: (query: string) => void
}

const SearchBar = ({ query, onChange }: SearchBarProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.target.value)
  }

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar
