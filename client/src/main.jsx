import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

//const googleClientId = import.meta.env.GOOGLE_CLIENT_ID

ReactDOM.createRoot(document.getElementById('root')).render(
  // <GoogleOAuthProvider clientId="549062733294-o9urj87av8jaiiioh4g78hrv7cd7jg4m.apps.googleusercontent.com">
    <GoogleOAuthProvider clientId="518303547506-c3ol7t6qj80i7eb08ud3dka9uu5lu5he.apps.googleusercontent.com">
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
)
