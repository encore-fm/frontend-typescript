import IconPlus from './icons/IconPlus'

type SuggestButtonProps = {
  onClick: () => void
}

const SuggestButton = ({ onClick }: SuggestButtonProps) => {
  return (
    <div className="SuggestButton">
      <IconPlus onClick={onClick} />
    </div>
  )
}

export default SuggestButton
