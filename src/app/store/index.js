import { combineReducers, createStore } from "redux";
import { taskReducer } from "./task/reducer";

const reducer = combineReducers({
  task: taskReducer,
});

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer, enhancer);
