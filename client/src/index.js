import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='140740435973-d07eg209c73tj5cppl614ko2c9vqm965.apps.googleusercontent.com'>
      <Provider store={store}>
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// Google api key 
// AIzaSyAuIFobMylUjx6bNhLB5yRhqWdn-4X7pzc