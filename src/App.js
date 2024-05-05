import logo from './logo.svg';
import './App.css';
import awsconfig from './aws-exports';
import {Amplify} from 'aws-amplify';
import { withAuthenticator} from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function App({signOut, user}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={signOut}>Log Out</button>
        <p>{user && user.signInDetails && user.signInDetails.loginId}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App, true);