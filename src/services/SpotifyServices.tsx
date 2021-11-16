const SPOTIFY_BASE_API_URL = 'https://api.spotify.com/v1'
const CLIENT_ID = '86d29b349f3445b588b8ccb4e504724f'
const CLIENT_SECRET = '9a26cbb98d6f436f8b06e649cda4fc95'

type AuthToken = {
  access_token?: string
  token_type?: string
  expires_in?: number
}

type StoredAuthToken = {
  token: AuthToken
  expiryMicros: number
}

const spotifySearch = async (query: string): Promise<SearchResult> => {
  const endpoint = `${SPOTIFY_BASE_API_URL}/search`
  query = sanitizeQuery(query)

  const token = await authToken().catch((err) => {
    console.error('Failed to get auth token.')
    return Promise.reject(err)
  })

  const requestString = `${endpoint}?q=${query}&type=album,artist,track,playlist`
  const headers = { Authorization: `Bearer ${token.access_token}` }

  const results = await fetch(requestString, { headers: headers })
  if (!results.ok) {
    console.error('Failed to fetch songs.')
    return Promise.reject()
  }

  const searchResults = (await results.json()) as SearchResult

  return searchResults
}

// Just for testing. In future this should be done over encore backend.
const authToken = async (): Promise<AuthToken> => {
  const storedToken = localStorage.getItem('spotifyToken')
  if (storedToken) {
    try {
      const token = JSON.parse(storedToken) as StoredAuthToken
      if (token.expiryMicros < window.performance.now()) {
        return token.token
      }
    } catch {}
  }

  const newToken = await requestAuthToken()
  const tokenStore: StoredAuthToken = {
    token: newToken,
    expiryMicros: window.performance.now(),
  }

  localStorage.setItem('spotifyToken', JSON.stringify(tokenStore))

  return newToken
}

const requestAuthToken = async (): Promise<AuthToken> => {
  const endpoint = 'https://accounts.spotify.com/api/token'
  const headers = {
    Authorization: `Basic ${btoa(CLIENT_ID + ':' + CLIENT_SECRET)}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  }
  const formBody = 'grant_type=client_credentials'

  const result = await fetch(endpoint, {
    headers: headers,
    method: 'POST',
    body: formBody,
  })
  const authToken = (await result.json()) as AuthToken

  return authToken
}

const sanitizeQuery = (query: string) => {
  return encodeURIComponent(query)
}

export { spotifySearch }
