import { ADD_TASK } from "./actions";

let id = 1;

export const initialTasks = [
  {
    uuid: id++,
    name: "Tofu Roast",
    description: "hi one",
    duration: "short",
    createdDate: "21-Jul-20",
    completedDate: "21-Jul-24",
    spendTime: null,
  },
  {
    uuid: id++,
    name: "Vegan Ham",
    description: "hi two",
    duration: "medium",
    createdDate: "21-Jul-20",
    completedDate: "21-Jul-24",
    spendTime: null,
  },
  {
    uuid: id++,
    name: "Vegan Ham",
    description: "hi three",
    duration: "large",
    createdDate: "21-Jul-20",
    completedDate: "21-Jul-24",
    spendTime: null,
  },
  {
    uuid: id++,
    name: "Maquetar componente de usuarios",
    description:
      "Desarrollar maqueta del componente usuarios, siguiendo el design system de la aplicación",
    duration: "large",
    createdDate: "21-Jul-20",
    completedDate: "21-Jul-24",
    spendTime: null,
  },
];

export const tasksReducer = (state = initialTasks, action) => {
  if (action.type === ADD_TASK) {
    const newTask = {
      uuid: id++,
      name: action.payload.name,
      description: action.payload.description,
      duration: action.payload.duration,
      createdDate: new Date(),
      completedDate: null,
      spendTime: null,
    };
    return [...state, newTask];
  }
  return state;
};
