import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/light-theme.css'; // Default to light theme
import './assets/css/dark-theme.css'; // Include dark theme for toggling

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);