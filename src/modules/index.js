import { combineReducers } from "redux";

import auth from "./auth";
import users from "./users";
import documents from "./documents";

const rootReducer = combineReducers({
  auth,
  users,
  documents
});

export default (state, action) => {

  return rootReducer(state, action);
};
