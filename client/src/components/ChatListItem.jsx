import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveConversation } from '../redux/reducers/conversationSlice';

const ChatListItem = ({person}) => {
  const user = useSelector(state => state.auth.user)
  const dispatch =  useDispatch();

  const {name, picture} = person;

  const handleClick = () => {
    alert('hii')
    person && dispatch(setActiveConversation(person))
    // dispatch(addConversation({senderId: user.sub, receiverId: person.sub}))
  }
  return (
    <>
    <div onClick={handleClick} className="flex items-center space-x-1 cursor-pointer px-4 p-3 bg-gray-hover hover:bg-gray-hover" id="contact-list-item">
        
        <img className="w-12 h-12 rounded-full object-cover" src={picture} alt="" draggable="false"/>

        <div className="flex flex-col flex-auto justify-between py-1 pl-2">
        <div className="flex justify-between items-center">
            <h3 className="text-gray-100 truncate">{name}</h3>
            <span className="text-gray-300 text-xs font-light">yesterday</span>
        </div>

        <div className="flex items-center justify-between">
            <h3 className="truncate overflow-ellipsis w-11/12 text-gray-300 text-sm font-light">Lorem, ipsum dolor sit amet consectetur</h3>
            <svg className="arrow text-gray-300 hidden transition duration-500 ease-out" viewBox="0 0 19 20" width="19" height="20"><path fill="currentColor" d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z"></path></svg>
        </div>
        </div>
    </div>

    <div className="flex ml-16 border-b border-white border-opacity-10"></div>  
    </>
  )
}

export default ChatListItem