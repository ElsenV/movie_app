import { combineReducers } from "redux";
import DataReducers from "./reducers/DataReducers";

export const indexReducers = combineReducers({
  details: DataReducers,
});
