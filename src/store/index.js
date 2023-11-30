import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(/* middleware si nécessaire */)
);

const store = createStore(reducer, enhancers);

export default store;
