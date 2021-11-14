import './SearchView.scss'
import { useState } from 'react'
import SearchBar from '../components/search/SearchBar'
import SearchResults from '../components/search/SearchResults'

type SearchViewState = {
  query: string
  result?: SearchResult
}

const SearchView = () => {
  const [state, setState] = useState<SearchViewState>({ query: '' })

  return (
    <div className="SearchView">
      <SearchBar
        query={state.query}
        onChange={(q) => setState({ ...state, query: q })}
      />
      <SearchResults />
    </div>
  )
}

export default SearchView
