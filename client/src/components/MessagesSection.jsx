import React, { useEffect, useRef } from 'react';
import LeftMessage from './LeftMessage';
import RightMessage from './RightMessage';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../redux/actions/messageActions';
import { getConversation } from '../redux/actions/conversationActions';

const MessagesSection = ({ flag }) => {
  const messagesContainerRef = useRef(null);
  const messages = useSelector(state => state.message.messages);
  const loading = useSelector(state => state.message.loading);
  const user = useSelector(state => state.auth.user);
  const person = useSelector(state => state.conversation.activeConversation);
  const dispatch = useDispatch();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    person && dispatch(getConversation({ senderId: user.sub, receiverId: person.sub }));
  }, [user, person]);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={{backgroundImage:`url('images/wp-chat.jpg')`}} className="bg-contain flex overflow-y-auto h-5/6 bg-dark mb-1" id="chats-container" ref={messagesContainerRef}>
      <div className="mx-auto w-4/5 p-0 lg:p-2 relative" id="msgContainer">
        <div className='top-2 lg:ml-0 z-10 sticky w-full flex items-center justify-center'>
          <span className="py-1.5 px-3 bg-gray-700 text-xs font-bold text-gray-100 rounded-md shadow-md">TODAY</span>
        </div>
        {/* {loading && <p className='text-center text-white'>Loading..</p>} */}
        {messages && messages.map((message) => (
          message.receiverId === user.sub ?
            <LeftMessage key={message.id} message={message.text} time={message.createdAt} />
            :
            <RightMessage key={message.id} message={message.text} time={message.createdAt} />
        ))}
      </div>
    </div>
  );
}

export default MessagesSection;
