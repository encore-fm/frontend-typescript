import React, {useEffect, useState, MouseEvent} from 'react'
import './SeekBar.scss'


type SeekBarProps = {
    modifiable: boolean
    duration: number
    progress: number
    lastUpdate: Date
    onSeek: (progress: number) => void
}

const SeekBar = (props: SeekBarProps) => {
    const { modifiable, duration, progress, lastUpdate, onSeek } = props
    const [extrapolatedProgress, setExtrapolatedProgress] = useState<number>(progress)

    const tickSpeedMs = 200
    const seekBarID = 'seekbar'

    useEffect(() => {
        const interval = setInterval(() => updateExtrapolatedProgress(lastUpdate, progress), tickSpeedMs);
        return () => clearInterval(interval);
    }, [lastUpdate, progress]);

    const updateExtrapolatedProgress = (lastUpdate: Date, progress: number) => {
        const timeDiff = new Date().getTime() - lastUpdate.getTime()
        setExtrapolatedProgress(progress + timeDiff)
    }
    
    const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
        if (!modifiable) return;
        const posX = event.clientX
        const boundingBox = document.getElementById(seekBarID)?.getBoundingClientRect()
        if (boundingBox) {
            const ratio = (posX - boundingBox.x) / boundingBox.width
            onSeek(ratio * duration)
        }        
    };

    const styles = {
        width: extrapolatedProgress / duration * 100 + '%',
        transition: `width ${tickSpeedMs}ms linear`
    }

    return (
        <div className='SeekBar' id={seekBarID} onMouseDown={handleMouseDown}>
            <div className='SeekBar_progress' style={styles} />
        </div>
    )
}

export default SeekBar
