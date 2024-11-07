import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <GoogleOAuthProvider clientId="752148247508-of2t88d8ng5j017v7tff86t9net1sd48.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
  </StrictMode>
)