// import { createStore, compose, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import thunk from "redux-thunk";

// function configureStoreDev(initialState) {
//   const middlewares = [
//     // Add other middleware on this line...

//     // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
//     // reduxImmutableStateInvariant(),

//     // thunk middleware can also accept an extra argument to be passed to each thunk action
//     // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
//     thunk,
//     // reactRouterMiddleware,
//     logger,
//   ];

//   //   const composeEnhancers =
//   //     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
//   const store = createStore(
//     CreateRootReducer,
//     initialState,
//     compose(
//       applyMiddleware(...middlewares),
//       window.devToolsExtension ? window.devToolsExtension() : (f) => f
//     )
//   );

//   // if (module.hot) {
//   //   // Enable Webpack hot module replacement for reducers
//   //   module.hot.accept("../modules", () => {
//   //     const nextRootReducer = require("../modules/index").default; // eslint-disable-line global-require
//   //     store.replaceReducer(connectRouterHistory(nextRootReducer));
//   //   });
//   // }

//   //   const persistor = persistStore(store);

//   return { store };
// }

// export default configureStoreDev;

import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
// import createHistory from "history/createBrowserHistory";
import createRootReducer from "../modules";
// 'routerMiddleware': the new way of storing route changes with redux middleware since rrV4.

function configureStoreDev(initialState) {
  const middlewares = [
    // Add other middleware on this line...

    // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
    // reduxImmutableStateInvariant(),

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
    thunk,
    // reactRouterMiddleware,
    logger,
  ];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept("../modules", () => {
  //     const nextRootReducer = require("../modules/index").default; // eslint-disable-line global-require
  //     store.replaceReducer(connectRouterHistory(nextRootReducer));
  //   });
  // }

  return store;
}

const configureStore = configureStoreDev;

export default configureStore;
