const prettyTime = (milliseconds: number) => {
    const time = milliseconds / 1000
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

export {prettyTime};