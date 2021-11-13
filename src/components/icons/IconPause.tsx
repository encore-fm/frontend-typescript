import React from 'react'
import './IconPause.scss'

type IconPauseProps = {
  size?: number
  onClick?: () => void
}

const IconPause = ({ onClick, size = 30 }: IconPauseProps) => {
  const styles = {
    width: `${size}px`,
    height: `${size}px`,
  }
  return <div style={styles} className="IconPause" onClick={onClick} />
}

export default IconPause
