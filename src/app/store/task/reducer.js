import { ADD_TASK } from "./actions";

let id = 1;

export const initialTasks = [
  { uuid: id++, name: "Tofu Roast", description: "hi one", duration: "short" },
  { uuid: id++, name: "Vegan Ham", description: "hi two", duration: "medium" },
];

export const taskReducer = (state = initialTasks, action) => {
  if (action.type === ADD_TASK) {
    const newTask = {
      uuid: id++,
      name: action.payload.name,
      description: action.payload.description,
      duration: action.payload.duration,
    };
    return [...state, newTask];
  }
  return state;
};
