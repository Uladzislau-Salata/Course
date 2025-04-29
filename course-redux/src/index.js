import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as action from './action';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const store = createStore(reducer);

const { dispatch, subscribe, getState } = store;


const update = () => {
  document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

// const bindActionCreator = (creacto, dispatch) => (...args) => {
//   dispatch(creacto(...args));
// }

const { inc, dec, rnd } = bindActionCreators(action, dispatch);
// const decDispath = bindActionCreators(dec, dispatch);
// const rndDispath = bindActionCreators(rnd, dispatch);


document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  rnd(value);
});

root.render(
  <React.StrictMode>
    <>

    </>
  </React.StrictMode>
);
