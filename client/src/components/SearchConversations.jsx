import React, { useEffect, useState } from 'react'
import { searchConversation } from '../redux/reducers/conversationSlice'
import { useDispatch } from 'react-redux';

const SearchConversations = () => {
    const dispatch = useDispatch()

    const [searchText, setSearchText] = useState();

    useEffect(() => {
        dispatch(searchConversation(searchText))
    }, [searchText])

  return (
    <div className="bg-dark-2 py-2 px-3 flex flex-auto border-b border-white border-opacity-10">
        <div className="flex flex-auto items-center p-1.5 rounded-full bg-input">
          <svg className="h-6 w-6 text-gray-300 p-1 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        <input onChange={(e) => setSearchText(e.target.value)} className="flex flex-auto bg-transparent ml-4 border-none outline-none text-sm font-light text-gray-100 placeholder-gray-300" type="text" placeholder="Search or start new chat"/>
        </div>
    </div>
  )
}

export default SearchConversations