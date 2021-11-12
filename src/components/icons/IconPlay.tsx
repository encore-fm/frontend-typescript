import React from 'react'
import './IconPlay.scss'

type IconPlayProps = {
  size?: number
  onClick?: () => void
}

const IconPlay = ({ onClick, size = 30 }: IconPlayProps) => {
  const styles = {
    width: `${size}px`,
    height: `${size}px`,
  }
  return <div style={styles} className="IconPlay" onClick={onClick} />
}

export default IconPlay
