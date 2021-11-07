import React, {Fragment} from "react"
import "./PlayerControls.scss"
import IconPlay from "./icons/IconPlay"
import IconPause from "./icons/IconPause"


type PlayerControlsProps = {
    isAdmin: boolean
    isPlaying: boolean
    onPause?: () => void
    onPlay?: () => void
    onSkip?: () => void
}

const PlayerControls = ({isAdmin, isPlaying, onPause, onPlay, onSkip}: PlayerControlsProps)  => {
    return (
        <div className="PlayerControls">
            {isAdmin && (
                <Fragment>
                    <div className='PlayerControls_SkipButton' onClick={onSkip}>skip</div>
                    <div className='PlayerControls_PlayPause'>
                        {isPlaying ? <IconPause onClick={onPause}/> : <IconPlay onClick={onPlay} />}
                    </div>
                </Fragment>
            )}
        </div>
    )
}

export default PlayerControls