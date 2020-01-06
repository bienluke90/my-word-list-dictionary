import { createStore } from 'redux';
import mainReducer from '../reducers';

const store = createStore(
    mainReducer /* preloadedState, */,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  export default store