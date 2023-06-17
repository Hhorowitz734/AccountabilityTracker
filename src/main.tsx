import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import AuthRoute from './components/authroute.tsx'
import { initializeApp } from 'firebase/app';
import { Config } from './config/config.ts';

export const Firebase = initializeApp(Config.firebaseConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthRoute><App /></AuthRoute>
  </React.StrictMode>,
)
