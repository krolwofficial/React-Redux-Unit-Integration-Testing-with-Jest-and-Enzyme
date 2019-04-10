import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers";

export const middlewares = [reduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(
  createStore
);

const store = createStoreWithMiddleware(rootReducer);

export default store;
