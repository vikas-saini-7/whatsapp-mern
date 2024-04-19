import React from 'react'
import LeftMessage from './LeftMessage'
import RightMessage from './RightMessage'

const MessagesSection = () => {
  return (
    <>
    <div className="flex overflow-y-auto h-5/6 bg-dark mb-1" id="chats-container">
        <div className="mx-auto w-4/5 p-0 lg:p-2 relative" id="msgContainer">
          <span className="top-1 -ml-56 lg:ml-0 z-10 py-1.5 px-3 sticky bg-gray-700 text-sm text-gray-100 rounded-md shadow-md">TODAY</span>
          <LeftMessage/>
          <RightMessage/>
          <LeftMessage/>
          <RightMessage/>
          <LeftMessage/>
          <RightMessage/>
          <LeftMessage/>
          <RightMessage/>
          <LeftMessage/>
          <RightMessage/>
          <LeftMessage/>
          <RightMessage/>
          <LeftMessage/>
          <RightMessage/>
          <LeftMessage/>
          <RightMessage/>
          <LeftMessage/>
          <RightMessage/>
          <LeftMessage/>
          <RightMessage/>
          <LeftMessage/>
          <RightMessage/>
        </div>
    </div>
    </>
    

  )
}

export default MessagesSection