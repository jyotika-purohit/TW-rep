import {createStore , applyMiddleware } from "redux";
import thunk  from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from "./modules/index";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key:"root",
  storage
};

const persistedReducer = persistReducer(persistConfig,rootReducer);
export const store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);