type TProps = {
  item: string
  callBack: () => void
}

const ButtonChat = ({ item, callBack }: TProps) => {
  return (
    <button
      className='h-fit w-full min-w-[240px] max-w-[280px] rounded-[4px] bg-[#363636] p-1 text-left'
      onClick={callBack}
    >
      {item}
    </button>
  )
}

export default ButtonChat
