import { UPDATE_SHOW_TASK_FORM, UPDATE_TASK_TO_EDIT } from "./actions";

export const initialControls = {
  showTaskForm: false,
  taskToEdit: false,
};

export const controlsReducer = (state = initialControls, action) => {
  if (action.type === UPDATE_SHOW_TASK_FORM) {
    return { ...state, showTaskForm: action.payload.showTaskForm };
  }
  if (action.type === UPDATE_TASK_TO_EDIT) {
    return {
      ...state,
      taskToEdit: action.payload.uuid ? { ...action.payload } : false,
    };
  }
  return state;
};
