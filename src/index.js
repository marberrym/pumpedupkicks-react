import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Router from './Router';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import reducer from './reducer';
import initialState from './initialState';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f7f0f0',
    },
    secondary: red,
  },
  typography: {
    useNextVariants: true,
  },
});

const persistConfig = {
  key: 'sneakerBot',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(
  persistedReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let persistor = persistStore(store);

let Dom = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </MuiThemeProvider>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Dom />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
