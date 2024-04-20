import React from 'react'
import LeftMessage from './LeftMessage'
import RightMessage from './RightMessage'
import { useSelector } from 'react-redux'

const MessagesSection = () => {
  const messages = useSelector(state => state.message.messages);
  const loading = useSelector(state => state.message.loading);
  const user = useSelector(state => state.auth.user)
  return (
    <>
    <div className="flex overflow-y-auto h-5/6 bg-dark mb-1" id="chats-container">
        <div className="mx-auto w-4/5 p-0 lg:p-2 relative" id="msgContainer">
          <span className="top-1 -ml-56 lg:ml-0 z-10 py-1.5 px-3 sticky bg-gray-700 text-sm text-gray-100 rounded-md shadow-md">TODAY</span>
          {loading && <p className='text-center text-white'>Loading..</p>}
          {!loading && messages && messages.map((message) => (
            message.receiverId === user.sub ?
              <LeftMessage message={message.text} time={message.createdAt} />
            :
              <RightMessage message={message.text} time={message.createdAt}/>
          ))}
        </div>
    </div>
    </>
    

  )
}

export default MessagesSection