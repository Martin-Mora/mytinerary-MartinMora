// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { GoogleOAuthProvider } from '@react-oauth/google'



ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <GoogleOAuthProvider clientId="186116319104-f0cm7g0hc8srne3j2dr0ttvt7152hvr6.apps.googleusercontent.com">
            <App />
        </GoogleOAuthProvider>
    </Provider>
)
