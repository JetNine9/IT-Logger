import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension' // lets us use the extension on chrome
import thunk from 'redux-thunk';
import rootReducer from './reducers'




const initialState = {};

const middleware = [thunk];

// initalize/create store - > takes in rootreducer, initial state and middleware
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
