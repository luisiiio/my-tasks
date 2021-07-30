export const UPDATE_SHOW_TASK_FORM = "UPDATE_SHOW_TASK_FORM";
export const UPDATE_TASK_TO_EDIT = "UPDATE_TASK_TO_EDIT";

export const updateShowTaskForm = ({ showTaskForm }) => {
  return {
    type: UPDATE_SHOW_TASK_FORM,
    payload: {
      showTaskForm,
    },
  };
};

export const updateTaskToEdit = (payload) => {
  return {
    type: UPDATE_TASK_TO_EDIT,
    payload,
  };
};
