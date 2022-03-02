import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyle from './styles/GlobalStyles';

import store, { persistor } from './store';
import history from './services/history';
import Header from './components/Header';
import Routers from './routes';
// import store from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <Routers />

          <ToastContainer autoClose={3000} className="toast-container" />
          <GlobalStyle />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
