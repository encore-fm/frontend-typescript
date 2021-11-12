import React, { Fragment, useEffect } from 'react'
import './PlayerControls.scss'
import IconPlay from './icons/IconPlay'
import IconPause from './icons/IconPause'

type PlayerControlsProps = {
    isAdmin: boolean
    isPlaying: boolean
    onPause?: () => void
    onPlay?: () => void
    onSkip?: () => void
}

type PlayerControlsState = {
    isPlaying: boolean
}

const PlayerControls = ({
    isAdmin,
    isPlaying,
    onPause,
    onPlay,
    onSkip,
}: PlayerControlsProps) => {
    const [state, setState] = React.useState<PlayerControlsState>({
        isPlaying: isPlaying,
    })

    useEffect(() => {
        setState({ isPlaying: isPlaying })
    }, [isPlaying])

    return (
        <div className="PlayerControls">
            {isAdmin && (
                <Fragment>
                    <div className="PlayerControls_SkipButton" onClick={onSkip}>
                        skip
                    </div>
                    <div className="PlayerControls_PlayPause">
                        {state.isPlaying ? (
                            <IconPause onClick={onPause} />
                        ) : (
                            <IconPlay onClick={onPlay} />
                        )}
                    </div>
                </Fragment>
            )}
        </div>
    )
}

export default PlayerControls
