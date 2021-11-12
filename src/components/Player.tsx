import React, { useEffect } from 'react'
import './Player.scss'
import SeekBar from './SeekBar'
import PlayerControls from './PlayerControls'
import SongInfo from './SongInfo'

type PlayerProps = {
    isAdmin: boolean
    currentSong: Song
    isPlaying: boolean
    progress: number

    onPlay: () => void
    onPause: () => void
    onSeek: (progress: number) => void
    onSkip: () => void
}

type PlayerState = {
    currentSong: Song
    isPlaying: boolean
    progress: number
}

const Player = ({
    isAdmin,
    currentSong,
    isPlaying,
    progress,
    onPlay,
    onPause,
    onSeek,
    onSkip,
}: PlayerProps) => {
    const [state, setState] = React.useState<PlayerState>({
        currentSong,
        isPlaying,
        progress,
    })

    useEffect(() => {
        setState({
            currentSong,
            isPlaying,
            progress,
        })
    }, [currentSong, isPlaying, progress])

    return (
        <div className="Player">
            <SeekBar
                modifiable={isAdmin}
                progress={state.progress}
                duration={state.currentSong.duration}
                isPlaying={state.isPlaying}
                onSeek={onSeek}
            />
            <div className="Player_content">
                <div className="Player_content_cover">
                    <img src={currentSong.coverURL} alt={currentSong.name} />
                </div>

                <div className="Player_content_info">
                    <SongInfo
                        songName={state.currentSong.name}
                        album={state.currentSong.albumName}
                        artists={state.currentSong.artists}
                        suggestedBy={state.currentSong.suggestedBy}
                    />
                </div>

                <div className="Player_content_controls">
                    <PlayerControls
                        isAdmin={isAdmin}
                        isPlaying={state.isPlaying}
                        onPlay={onPlay}
                        onPause={onPause}
                        onSkip={onSkip}
                    />
                </div>
            </div>
        </div>
    )
}

export default Player
