import { createStore } from "redux";
import {indexReducers} from "./setup/IndexReducers";

const store = createStore(
  indexReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
