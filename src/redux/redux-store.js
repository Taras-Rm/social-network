import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddlewayer from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import headerReducer from './header-reducer';
import appReducer from './app-reducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: headerReducer,
  app: appReducer,

  // для redux-form
  form: formReducer,
});

// для Redux плагіна
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddlewayer)));

//let store = createStore(reducers, applyMiddleware(thunkMiddlewayer));

window.store = store;

export default store;
