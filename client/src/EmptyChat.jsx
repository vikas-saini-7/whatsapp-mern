import React from 'react'

const EmptyChat = () => {
  return (
    <div className='relative hidden md:flex bg-dark flex-auto items-center pt-32 flex-col text-center text-white'>
      <div>
        <h1 className='text-xl font-bold'>Select chat to start Conversation</h1>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
    </div>
  )
}

export default EmptyChat