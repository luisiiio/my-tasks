import { UPDATE_SHOW_TASK_FORM } from "./actions";

export const initialControls = {
  showTaskForm: false,
};

export const controlsReducer = (state = initialControls, action) => {
  if (action.type === UPDATE_SHOW_TASK_FORM) {
    return { ...state, showTaskForm: action.payload.showTaskForm };
  }
  return state;
};
