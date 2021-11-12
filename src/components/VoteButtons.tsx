import React from 'react'
import IconPlus from './icons/IconPlus'
import './VoteButtons.scss'
import IconMinus from './icons/IconMinus'

enum VoteStatus {
    NONE = 0,
    UP = 1,
    DOWN = 2,
}

type VoteButtonsProps = {
    voteStatus: VoteStatus
    onVote: (isUpvote: boolean) => void
    numVotes: number
}

const voteIconSize = 30

const VoteButtons = ({ voteStatus, onVote, numVotes }: VoteButtonsProps) => {
    return (
        <div className="VoteButtons">
            <IconPlus
                size={voteIconSize}
                highlight={voteStatus === VoteStatus.UP}
                onClick={() => onVote(true)}
            />

            <div className="VoteButtons_numVotes">{numVotes}</div>

            <IconMinus
                size={voteIconSize}
                highlight={voteStatus === VoteStatus.DOWN}
                onClick={() => onVote(false)}
            />
        </div>
    )
}

export { VoteButtons, VoteStatus }
