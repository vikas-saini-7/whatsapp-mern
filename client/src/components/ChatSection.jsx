import React, { useEffect, useState } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import MessagesSection from './MessagesSection'
import { useDispatch, useSelector } from 'react-redux'
import MessageBox from './MessageBox'
import { getMessages } from '../redux/actions/messageActions'
import { toggleDrawer } from '../redux/reducers/drawerSlice'
import {IconArrowLeft, IconChevronLeft} from '@tabler/icons-react';

const ChatSection = () => {
  const isOpen = useSelector(state => state.drawer.isOpen)
  const users = useSelector(state => state.socket.users)
  const {name, picture, sub} = useSelector(state => state.conversation.activeConversation)
  const conversationData = useSelector(state => state.conversation.conversationData)
  const dispatch = useDispatch();

  const [flag, setFlag] = useState()

  function toggleFlag(){
    setFlag(!flag);
  }

  const handleToggleDrawer = () => {
      dispatch(toggleDrawer())
  }

  useEffect(() => {
    dispatch(getMessages(conversationData?._id));
  }, [conversationData, flag])

  const handleGoBack = () => {
    dispatch(toggleDrawer())
  }

  return (
    <>

      {/* SMALL SCREEN  */}
      <div className='block md:hidden absolute top-0 left-0 '>
        <Drawer
        open={isOpen}
        onClose={handleToggleDrawer}
        direction='right'
        size="100%"
        className=''
        >
        <div className='h-screen bg-gray'>
          <nav className="bg-gray px-4 py-2">
            <div className="flex flex-auto items-center">
              <div className='flex items-center gap-2'>
                <button className='text-gray-500' onClick={handleGoBack}>
                  <IconChevronLeft/>
                </button>
                <img className="w-11 h-11 rounded-full object-cover cursor-pointer" src={picture} alt="" draggable="false"/>
              </div>
              <div className="flex flex-col ml-4 flex-auto cursor-pointer">
                <h3 className="text-gray-100 font-bold">{name}</h3>
                <span className="text-gray-300 text-xs font-light">{(users.find(item => item.sub === sub) ? <p>online</p> : "offline")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="h-8 w-8 text-gray-300 p-1 cursor-pointer" viewBox="0 0 24 24"><path fill="currentColor" d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"></path></svg>
                <svg className="h-8 w-8 text-gray-300 p-1 cursor-pointer rounded-full hover:bg-gray-700" id="menuBtn2" viewBox="0 0 24 24"><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
              </div>
            </div>
          </nav>
          <MessagesSection flag={flag}/>
          
          <MessageBox toggleFlag={toggleFlag}/>
        </div>
        </Drawer>
      </div>
      

      {/* LARGE SCREEN  */}
      <div className="relative hidden md:flex bg-dark flex-auto flex-col">

        <nav className="bg-gray px-4 py-2">
          <div className="flex flex-auto items-center">
            <img className="w-11 h-11 rounded-full object-cover cursor-pointer" src={picture} alt="" draggable="false"/>
            <div className="flex flex-col ml-4 flex-auto cursor-pointer">
              <h3 className="text-gray-100 font-bold">{name}</h3>
              <span className="text-gray-300 text-xs font-light">{(users.find(item => item.sub === sub) ? <p>online</p> : "offline")}</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="h-8 w-8 text-gray-300 p-1 cursor-pointer" viewBox="0 0 24 24"><path fill="currentColor" d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"></path></svg>
              <svg className="h-8 w-8 text-gray-300 p-1 cursor-pointer rounded-full hover:bg-gray-700" id="menuBtn2" viewBox="0 0 24 24"><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
            </div>
          </div>
        </nav>
        <MessagesSection flag={flag}/>
        
        <MessageBox toggleFlag={toggleFlag}/>

      </div>
    </>
  )
}

export default ChatSection