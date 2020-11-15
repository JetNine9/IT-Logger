import { creatStore, applyMiddleware } from 'redux';
import { composedWithDevTools } from 'redux-devtools-extension' // lets us use the extension on chrome
import thunk from 'redux-thunk';
import rootReducer from './reducers'


const initialState = {};

const middleware = [thunk];

// initalize/create store - > takes in rootreducer, initial state and middleware
const store = creatStore(
    rootReducer,
    initialState,
    composedWithDevTools(applyMiddleware(...middleware))
);

export default store;
