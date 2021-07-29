import { combineReducers, createStore } from "redux";
import { tasksReducer } from "./tasks/reducer";

const reducer = combineReducers({
  tasks: tasksReducer,
});

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer, enhancer);
