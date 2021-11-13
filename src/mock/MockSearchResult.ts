import data from './mock_search_result.json'

export const generateMockSearchResult = (): SearchResult => {
  return data as Object as SearchResult
}
