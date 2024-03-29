import { useEffect, useRef, useState } from 'react'
import Playlist from '../components/Playlist'
import Player from '../components/Player'

type MainViewState = {
  isPlaying: boolean
  progress: number
}

const playlist: Song[] = [
  {
    id: '123',
    name: 'song name',
    artists: ['omar, anton'],
    suggestedBy: 'anton',
    albumName: 'rick roll',
    coverURL:
      'https://s.yimg.com/ny/api/res/1.2/M142gEoUDb8sPr_LZCGNpw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQxMw--/https://s.yimg.com/uu/api/res/1.2/_fPK2Z4nDW.dPiYeimLx8w--~B/aD00MDA7dz02MjA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/thewrap.com/e3a98e6aea832ab72f5a406c2faaa419',
    duration: 60 * 1000,
    score: 3,
    timeAdded: new Date(),
    upvoters: [],
    downvoters: [],
  },
  {
    id: '321',
    name: 'name of song',
    artists: ['anton, omar'],
    suggestedBy: 'omar',
    albumName: 'roll rick',
    coverURL:
      'https://static.giga.de/wp-content/uploads/2016/02/whenever-you-need-somebody-rcm797x0.jpg',
    duration: 60 * 1000,
    score: 3,
    timeAdded: new Date(),
    upvoters: [],
    downvoters: [],
  },
]

const MainView = () => {
  const [state, setState] = useState<MainViewState>({
    isPlaying: false,
    progress: 0,
  })

  let timeout = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    if (state.isPlaying) {
      timeout.current = setTimeout(() => {
        setState((state) => ({
          ...state,
          progress: state.progress + 100,
        }))
      }, 100)
    } else {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
    }
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
    }
  }, [state.isPlaying, state.progress])

  return (
    <div className="App">
      <Playlist playlist={playlist} />

      <div className="Player-Container">
        <Player
          isAdmin={true}
          currentSong={playlist[0]}
          isPlaying={state.isPlaying}
          progress={state.progress}
          onPlay={() => setState((state) => ({ ...state, isPlaying: true }))}
          onPause={() => setState((state) => ({ ...state, isPlaying: false }))}
          onSkip={() => {}}
          onSeek={(progress) => setState((state) => ({ ...state, progress }))}
        />
      </div>
    </div>
  )
}

export default MainView
