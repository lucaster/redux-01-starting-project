import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

function App() {

  const { authenticated } = useSelector((state) => ({
    authenticated: state.auth.authenticated
  }));

  return (
    <>
      <Header />
      {
        !authenticated && <Auth />
      }
      {
        authenticated && <>
          <Counter />
          <UserProfile />
        </>
      }
    </>
  );
}

export default App;
