const MessageBoxLoading = () => {
  return (
    <div className='flex w-full animate-pulse flex-col space-y-2 rounded-lg bg-[#f1f5f9] p-3 lg:w-9/12'>
      <div className='h-2 w-full animate-fadeInCus rounded-full bg-[#c7c4c4]' />
      <div className='h-2 w-9/12 animate-fadeInCus rounded-full bg-[#c7c4c4]' />
      <div className='h-2 w-10/12 animate-fadeInCus rounded-full bg-[#c7c4c4]' />
    </div>
  )
}

export default MessageBoxLoading
