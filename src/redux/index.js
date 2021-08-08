import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose as reduxCompose,
} from "redux";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

const compose =
  typeof window !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose
    : reduxCompose;

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
  });

const store = createStore(
  rootReducer(history),
  compose(applyMiddleware(thunk, routerMiddleware(history)))
);

// if (module.hot) {
//   // Enable Webpack hot module replacement for reducers
//   module.hot.accept('./reducers', () => {
//     store.replaceReducer(rootReducer(history));
//   });
// }

export default store;
