import React from 'react';
import { ToastContainer } from 'react-toastify';
import './global.css';
import { FiXSquare } from 'react-icons/fi';
import 'react-toastify/dist/ReactToastify.css'

import Routes from './routes';

function App() {  
    return (
      <>
        <Routes />
        <ToastContainer 
          draggable
          hideProgressBar
          autoClose={4000}
          closeButton={<FiXSquare />}
        />
      </>
  );
}

export default App;
