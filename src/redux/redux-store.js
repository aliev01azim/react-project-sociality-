import { combineReducers, createStore, applyMiddleware } from 'redux';
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import navbarReducer from './navbar-reducer'
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleWare from 'redux-thunk'
let reducers = combineReducers({
    profilePage: profileReducer,
    DialogPage: dialogsReducer,
    NavBarPage: navbarReducer,
    UsersPage: usersReducer,
    Authorizing: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store