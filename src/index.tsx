import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const google_web_signin_client_id: string = "475316467642-mc4g5p5gl621ogqev0db0hl1sod2a5q1.apps.googleusercontent.com"

root.render(
  <GoogleOAuthProvider clientId={google_web_signin_client_id}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
  </GoogleOAuthProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

