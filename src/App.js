import { ChatEngine } from 'react-chat-engine';
import { ChatFeed } from 'react-chat-engine';
import LoginForm from './Components/LoginForm';
import './App.css';

const projectID = 'dec10041-bb29-48f0-b413-176d27f6ee34';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

export default App;