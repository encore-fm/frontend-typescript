import React, { useEffect, useState, MouseEvent } from 'react'
import classNames from 'classnames'
import './SeekBar.scss'
import { prettyTime } from '../util/Formatter'

type SeekBarProps = {
  modifiable: boolean
  duration: number
  progress: number
  isPlaying: boolean
  onSeek: (progress: number) => void
}

type SeekBarState = {
  duration: number
  progress: number
  isPlaying: boolean
}

const SeekBar = ({
  modifiable,
  duration,
  progress,
  isPlaying,
  onSeek,
}: SeekBarProps) => {
  const [state, setState] = useState<SeekBarState>({
    duration: duration,
    progress: progress,
    isPlaying: isPlaying,
  })

  useEffect(() => {
    setState({
      duration: duration,
      progress: progress,
      isPlaying: isPlaying,
    })
  }, [progress, isPlaying, duration])

  const tickSpeedMs = 200
  const seekBarID = 'seekbar'

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (!modifiable) return
    const posX = event.clientX
    const boundingBox = document
      .getElementById(seekBarID)
      ?.getBoundingClientRect()
    if (boundingBox) {
      const ratio = (posX - boundingBox.x) / boundingBox.width
      onSeek(ratio * state.duration)
    }
  }

  const styles = {
    width: (state.progress / state.duration) * 100 + '%',
    transition: `width ${tickSpeedMs}ms linear`,
  }

  return (
    <div
      className={classNames('SeekBar', { modifiable })}
      id={seekBarID}
      onMouseDown={handleMouseDown}
    >
      <div className="SeekBar_progress" style={styles}>
        <div className="Time">{prettyTime(progress)}</div>
      </div>
    </div>
  )
}

export default SeekBar
