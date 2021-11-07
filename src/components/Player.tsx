import React from 'react'
import './Player.scss'
import SeekBar from './SeekBar'
import PlayerControls from './PlayerControls'

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

const Player = (props: PlayerProps) => {
    return (
        <div className='Player'>
            <SeekBar 
                modifiable={props.isAdmin}  
                progress={props.progress}
                duration={props.currentSong.duration}
                lastUpdate={new Date()}
                onSeek={props.onSeek}
            />
            <div className='Player_content'>
                <div className='Player_content_cover'>
                    <img src={props.currentSong.coverURL} alt={props.currentSong.name} />
                </div>
                <div className='Player_content_info'>
                    <div className='Player_content_info_name'>{props.currentSong.name}</div>
                    <div className='Player_content_info_artists'>{props.currentSong.artists.join(', ')}</div>
                    <div className='Player_content_info_album'>{props.currentSong.albumName}</div>
                    <div className='Player_content_info_suggested_by'>suggested by {props.currentSong.suggestedBy}</div>
                </div>
                <div className='Player_content_controls'>
                    <PlayerControls 
                        isAdmin={props.isAdmin}
                        isPlaying={props.isPlaying}
                        onPlay={props.onPlay}
                        onPause={props.onPause}
                        onSkip={props.onSkip}
                    />
                </div>
            </div>            
        </div>
    )

}

export default Player