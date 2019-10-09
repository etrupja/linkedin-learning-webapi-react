import { combineReducers } from "redux";
import tripReducer from "./tripReducers";

const rootReducer = combineReducers({
  trips: tripReducer
});

export default rootReducer;
