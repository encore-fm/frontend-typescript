import React from 'react'
import './IconMinus.scss'

const IconMinus = ({ size = 30, highlight = false, onClick }: IconProps) => {
    return (
        <div
            className={`IconMinus ${highlight ? 'highlight' : ''}`}
            onClick={onClick}
            style={{ height: `${size}px`, width: `${size}px` }}
        />
    )
}

export default IconMinus
