export const UPDATE_SHOW_TASK_FORM = "UPDATE_SHOW_TASK_FORM";

export const updateShowTaskForm = ({ showTaskForm }) => {
  return {
    type: UPDATE_SHOW_TASK_FORM,
    payload: {
      showTaskForm,
    },
  };
};
