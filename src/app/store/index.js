import { combineReducers, createStore } from "redux";
import { tasksReducer } from "./tasks/reducer";
import { controlsReducer } from "./controls/reducer";

const reducer = combineReducers({
  tasks: tasksReducer,
  controls: controlsReducer,
});

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer, enhancer);
