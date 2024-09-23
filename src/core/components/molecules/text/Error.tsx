const Error = ({ text }: { text?: string }) => {
  return <>{text ? <p className='pt-1 text-xs text-red-500'>{text}</p> : null}</>
}

export default Error
