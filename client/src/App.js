import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatSection from './components/ChatSection';
import ListSection from './components/ListSection';
import LoginDialog from './components/LoginDialog';
import './styles/main.scss';
import EmptyChat from './components/EmptyChat';
import { connectSocket } from './redux/actions/socketActions';

function App() {
  const dispatch = useDispatch();
  const activeConversation = useSelector(state => state.conversation.activeConversation)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(connectSocket())
  }, [dispatch])

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
