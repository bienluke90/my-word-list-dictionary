import React from 'react';
import GlobalStyle from './styles/globalStyles.js'
import Layout from './templates/Layout.js'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Layout />
    </Provider>
  );
}

export default App;
