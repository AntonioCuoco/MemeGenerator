import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Form from './components/form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header 
    img='Troll Face.png'
    />
    <Form />
  </React.StrictMode>
);
