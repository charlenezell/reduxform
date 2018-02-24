import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import { reducer as formReducer } from "redux-form";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  combineReducers({
    form: formReducer,
    app: (action, state) => {
      return state;
    }
  }),
  {
    app: {
      name: "app"
    }
  },
  composeEnhancers()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
