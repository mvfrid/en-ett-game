import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import { Provider } from 'react-redux';
// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { game } from './reducers/game';
import { App } from './App';

/*
const reducer = combineReducers({
  game: game.reducer
});

const store = configureStore({ reducer });
*/

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <App />
);

/*
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>

  const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
*/