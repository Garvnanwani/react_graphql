import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import ReactDOM from 'react-dom';
import client from './apollo';
import App from './App';
import './index.css';



ReactDOM.render(
  <React.StrictMode>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
