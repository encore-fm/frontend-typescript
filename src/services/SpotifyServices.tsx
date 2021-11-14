const SPOTIFY_BASE_API_URL = 'https://api.spotify.com/v1'
const CLIENT_ID = '****'
const CLIENT_SECRET = '****'

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

  const token = await authToken().catch(err => {
    console.log('Failed to get auth token.')
    return Promise.reject(err)
  })

  const requestString = `${endpoint}?q=${query}&type=album,artist,track,playlist`
  const headers = { Authorization: `Bearer ${token.access_token}` }

  const results = await fetch(requestString, { headers: headers });
  if (!results.ok) {
    console.log('Failed to fetch songs.')
    return Promise.reject();
  }

  const searchResults = (await results.json()) as SearchResult;

  return searchResults;
}

// Just for testing. In future this should be done over encore backend.
const authToken = async (): Promise<AuthToken> => {
  const storedToken = localStorage.getItem('spotifyToken')
  if (storedToken) {
    try {
      const token = JSON.parse(storedToken) as StoredAuthToken
      if (token.expiryMicros < window.performance.now()) {
        console.log('Found unexpired token.')
        return token.token
      }
    } catch {}
  }

  console.log('Generating new token')
  const token = await requestAuthToken()

  console.log('Storing token.')
  const tokenStore: StoredAuthToken = {
    token: token,
    expiryMicros: window.performance.now(),
  }
  
  localStorage.setItem('spotifyToken', JSON.stringify(tokenStore))

  return token
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
