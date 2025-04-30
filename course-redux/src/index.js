import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux'

import App from './components/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

root.render(
  <React.StrictMode>
    <>
      <Provider store={store}>
        <App />
      </Provider>

    </>
  </React.StrictMode>
);
