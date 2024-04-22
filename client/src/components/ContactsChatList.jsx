import React, { useEffect } from 'react'
import ChatListItem from './ChatListItem'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersFromSocket } from '../redux/actions/socketActions'
import socket from '../utils/socket'


const ContactsChatList = () => {
  const dispatch = useDispatch()
  const user = useSelector(state=> state.auth.user)
  const users = useSelector(state => state.conversation.searchedConversations)

  useEffect(() => {
    dispatch(getUsersFromSocket(user))
  }, [user])

  return (
    <div  className="flex flex-auto flex-col bg-dark-2 overflow-y-auto overflow-x-hidden" id="contact-list">
        {users &&
        <>
          {users?.map((item) => (
            item.sub !== user.sub ? <ChatListItem key={item?._id} person={item}/> : ''
          ))}
        </>
        }
        
    </div>
  )
}

export default ContactsChatList