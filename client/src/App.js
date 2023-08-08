import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import Messenger from './component/Messenger';
import AccountProvider from './context/AccountProvider';

function App() {
  const clientId = '723443491910-0j9363haec5mcbtlfnjhrn7abn8j46a4.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
