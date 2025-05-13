//
// main.tsx
//

import './index.css'

import React from 'react';
import DOM from 'react-dom/client'

import App from './App.tsx'

//
//

const element = document.querySelector('#root');
const root = DOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
