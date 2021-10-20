import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './contexts/authContext';
import { DataContextProvider } from './contexts/DataContext';


ReactDOM.render(
  <React.StrictMode>

    <DataContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DataContextProvider>

  </React.StrictMode>,

  document.getElementById('root')
);