import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import rootReducer from "./Reducers";
const persistConfig = {
  key: "root",
  storage,
};

const configStore = () => {
  const middleware = [thunk];
  const enhancer = composeWithDevTools(applyMiddleware(...middleware));
  const persistReducers = persistReducer(persistConfig, rootReducer);
  return createStore(persistReducers, enhancer);
};

export const persist = persistStore(configStore());

export default configStore;
