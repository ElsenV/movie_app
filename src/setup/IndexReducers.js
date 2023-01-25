import { combineReducers } from "redux";
import Reducers from "./reducers/Reducers";

export const indexReducers = combineReducers({
  page: Reducers,
});
