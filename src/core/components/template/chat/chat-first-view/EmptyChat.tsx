/* eslint-disable @typescript-eslint/no-explicit-any */
import TextGraHeader from '@/core/components/molecules/text/magic-text/TextGraHeader'
import { EmptyChatSuggest } from '.'

const EmptyChat = ({
  sendMessage,
  loading,
  isSuccess
}: {
  sendMessage: (message: string) => void
  loading: boolean
  isSuccess: boolean
}) => {
  return (
    <div className='mx-auto flex max-w-screen-sm flex-col items-center space-y-4 px-4 sm:px-8'>
      <TextGraHeader title='What do you want to ask today?' className='mt-4 w-full md:flex md:justify-center' />
      <EmptyChatSuggest isSuccess={isSuccess} loading={loading} sendMessage={sendMessage} />
    </div>
  )
}

export default EmptyChat
