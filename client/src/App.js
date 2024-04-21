import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import ChatSection from './components/ChatSection';
import ListSection from './components/ListSection';
import LoginDialog from './components/LoginDialog';
import './styles/main.scss';
import EmptyChat from './EmptyChat';
import {io} from 'socket.io-client';

function App() {
  const activeConversation = useSelector(state => state.conversation.activeConversation)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const socket = useRef(); 

  useEffect(() => {
    socket.current = io("ws://localhost:9000")
  }, [])

  return (
    <>
    {isAuthenticated ?
      <div className='flex flex-row h-screen'>
        <ListSection/>
        { Object.keys(activeConversation).length ? <ChatSection/> : <EmptyChat/>}
      </div>
    :
      <LoginDialog/>
    }
    </>
  );
}

export default App;
