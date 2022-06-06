/* eslint-disable react/jsx-filename-extension */
import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <App />
</React.StrictMode>);

// eslint-disable-next-line no-console
reportWebVitals(console.log);
