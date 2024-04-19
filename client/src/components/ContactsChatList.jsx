import React from 'react'
import ChatListItem from './ChatListItem'
import { useSelector } from 'react-redux'

const ContactsChatList = () => {
  const user = useSelector(state=> state.auth.user)
  const persons = useSelector(state => state.conversation.searchedConversations)
  return (
    <div  className="flex flex-col bg-dark-2 overflow-y-auto overflow-x-hidden" id="contact-list">
        {persons &&
        <>
          {persons.map((item) => (
            item.sub !== user.sub ? <ChatListItem key={item._id} person={item}/> : ''
          ))}
        </>
        }
        {persons &&
        <>
          {persons.map((item) => (
            item.sub !== user.sub ? <ChatListItem key={item._id} person={item}/> : ''
          ))}
        </>
        }
        {persons &&
        <>
          {persons.map((item) => (
            item.sub !== user.sub ? <ChatListItem key={item._id} person={item}/> : ''
          ))}
        </>
        }
        {persons &&
        <>
          {persons.map((item) => (
            item.sub !== user.sub ? <ChatListItem key={item._id} person={item}/> : ''
          ))}
        </>
        }
        {persons &&
        <>
          {persons.map((item) => (
            item.sub !== user.sub ? <ChatListItem key={item._id} person={item}/> : ''
          ))}
        </>
        }
        {persons &&
        <>
          {persons.map((item) => (
            item.sub !== user.sub ? <ChatListItem key={item._id} person={item}/> : ''
          ))}
        </>
        }
        {persons &&
        <>
          {persons.map((item) => (
            item.sub !== user.sub ? <ChatListItem key={item._id} person={item}/> : ''
          ))}
        </>
        }
        {persons &&
        <>
          {persons.map((item) => (
            item.sub !== user.sub ? <ChatListItem key={item._id} person={item}/> : ''
          ))}
        </>
        }
        {persons &&
        <>
          {persons.map((item) => (
            item.sub !== user.sub ? <ChatListItem key={item._id} person={item}/> : ''
          ))}
        </>
        }
        {persons &&
        <>
          {persons.map((item) => (
            item.sub !== user.sub ? <ChatListItem key={item._id} person={item}/> : ''
          ))}
        </>
        }
        {persons &&
        <>
          {persons.map((item) => (
            item.sub !== user.sub ? <ChatListItem key={item._id} person={item}/> : ''
          ))}
        </>
        }
        {persons &&
        <>
          {persons.map((item) => (
            item.sub !== user.sub ? <ChatListItem key={item._id} person={item}/> : ''
          ))}
        </>
        }
        {persons &&
        <>
          {persons.map((item) => (
            item.sub !== user.sub ? <ChatListItem key={item._id} person={item}/> : ''
          ))}
        </>
        }
        {persons &&
        <>
          {persons.map((item) => (
            item.sub !== user.sub ? <ChatListItem key={item._id} person={item}/> : ''
          ))}
        </>
        }
    </div>
  )
}

export default ContactsChatList