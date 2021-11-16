import './SearchView.scss'
import { useState } from 'react'
import SearchBar from '../components/search/SearchBar'
import SearchResults from '../components/search/SearchResults'
import { spotifySearch } from '../services/SpotifyServices'

type SearchViewState = {
  query: string
  result?: SearchResult
}

const SearchView = () => {
  const [state, setState] = useState<SearchViewState>({ query: '' })

  const handleChange = (query: string) => {
    setState((state) => ({ ...state, query }))
    if (query === '') {
      setState((state) => ({ ...state, result: undefined }))
      return
    }
    spotifySearch(query)
      .then((result) => {
        setState((state) => ({ ...state, result }))
      })
      .catch((_) => setState((state) => ({ ...state, result: undefined })))
  }

  return (
    <div className="SearchView">
      <SearchBar query={state.query} onChange={handleChange} />
      {state.result && state.result && <SearchResults result={state.result} />}
    </div>
  )
}

export default SearchView
