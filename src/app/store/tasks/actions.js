export const ADD_TASK = "ADD_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";

export const addTask = ({ name, description, duration }) => {
  return {
    type: ADD_TASK,
    payload: {
      name,
      description,
      duration,
    },
  };
};

export const updateTask = ({ uuid, name, description }) => {
  return {
    type: UPDATE_TASK,
    payload: {
      uuid,
      name,
      description,
    },
  };
};

export const deleteTask = ({ uuid }) => {
  return {
    type: DELETE_TASK,
    payload: {
      uuid,
    },
  };
};

export const completeTask = ({ uuid }) => {
  return {
    type: COMPLETE_TASK,
    payload: {
      uuid,
    },
  };
};
