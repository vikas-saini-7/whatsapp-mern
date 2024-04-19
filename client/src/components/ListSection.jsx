import React, { useEffect, useState } from 'react'
import ContactsChatList from './ContactsChatList'
import { getAllConversations } from '../redux/actions/conversationActions'
import { useDispatch, useSelector } from 'react-redux'
import { searchConversation } from '../redux/reducers/conversationSlice'
import SearchConversations from './SearchConversations'

const ListSection = () => {
  const dispatch = useDispatch();

  const {picture} = useSelector(state => state.auth.user);
  const users = useSelector(state => state.conversation.users)

  useEffect(() => {
    dispatch(getAllConversations())
  }, [])
  return (
    <div className='lg:w-[30%] md:w-3/6 w-full flex flex-col relative left-section'>
      {/* Navbar  */}
      <nav className="bg-gray px-4 py-2.5">
        <div className="flex flex-row items-center justify-between">
          <img className="w-10 h-10 rounded-full object-cover cursor-pointer" src={picture} alt="" draggable="false"/>

          <div className="flex items-center space-x-4">
            <svg className="h-10 w-8 text-gray-300 p-1 cursor-pointer" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"></path></svg>
            <svg  className="h-10 w-8 text-gray-300 p-1 cursor-pointer" viewBox="0 0 24 24"><path fill="currentColor" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg>
            <svg className="h-8 w-8 text-gray-300 p-1 cursor-pointer rounded-full hover:bg-gray-700" id="menuBtn" viewBox="0 0 24 24"><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
          </div>
        </div>
      </nav>

      {/* input container  */}
      <SearchConversations/>

      {/* Persons  */}
      <ContactsChatList/>

      {/* <div className="absolute hidden right-6 top-12 rounded bg-gray-400 shadow-2xl transition duration-1000 ease-out" id="menuItems">
        <div className="relative flex flex-col flex-auto justify-start w-44 pt-2 pb-2">
          <a className="hover:bg-gray-700 text-sm text-gray-100 font-light px-7 py-2.5" href="">New group</a>
          <a className="hover:bg-gray-700 text-sm text-gray-100 font-light px-7 py-2.5" href="">Create a room</a>
          <a className="hover:bg-gray-700 text-sm text-gray-100 font-light px-7 py-2.5" href="">Profile</a>
          <a className="hover:bg-gray-700 text-sm text-gray-100 font-light px-7 py-2.5" href="">Archived</a>
          <a className="hover:bg-gray-700 text-sm text-gray-100 font-light px-7 py-2.5" href="">Starred</a>
          <a className="hover:bg-gray-700 text-sm text-gray-100 font-light px-7 py-2.5" href="">Settings</a>
          <a className="hover:bg-gray-700 text-sm text-gray-100 font-light px-7 py-2.5" href="">Logout</a>
        </div>
      </div> */}

    </div>
  )
}

export default ListSection