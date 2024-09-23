// ** React Import
import { FC, Fragment } from 'react'

import ChatWrapMBV1 from './ChatWrapMBV1'
import ChatWrapMBV2 from './ChatWrapMBV2'

type Props = {
  isBasic?: boolean
}

const ChatWrapMB: FC<Props> = ({ isBasic = false }) => {
  return <Fragment>{isBasic ? <ChatWrapMBV1 /> : <ChatWrapMBV2 />}</Fragment>
}

export default ChatWrapMB
