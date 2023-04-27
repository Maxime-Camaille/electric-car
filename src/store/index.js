import { createStore, applyMiddleware, compose } from 'redux';
import blogMiddleware from '../middleware/blogMiddleware';
import reducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    blogMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;