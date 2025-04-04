import Routess from './route/routes';
import Web3Provider from './context/Web3Provider';
import { Toaster } from 'react-hot-toast'

import './index.css';
function App() {
  return (
    <>
      <Web3Provider>
        <Routess />
        <Toaster position="top-left" />
      </Web3Provider>
    </>
  );
}

export default App;