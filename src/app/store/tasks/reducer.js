import moment from "moment";
import "moment/locale/es-mx";
import { ADD_TASK, UPDATE_TASK, DELETE_TASK, COMPLETE_TASK } from "./actions";

let id = 1;
moment.locale("es");

export const initialTasks = [
  {
    uuid: id++,
    name: "🎨 Maquetar componente de usuarios",
    description:
      "Desarrollar maqueta del componente usuarios, siguiendo el design system de la aplicación",
    duration: "large",
    createdDate: moment().subtract(11, "days").format("DD-MMMM-YYYY"),
    completedDate: moment().subtract(10, "days").format("DD-MMMM-YYYY"),
    spendTime: null,
  },
  {
    uuid: id++,
    name: "🔌 Conectar API",
    description:
      "Conectar API para tener el CRUD de las tareas con el fin de poder crear, obtener, actualizar o eliminar tareas",
    duration: "large",
    createdDate: moment().subtract(8, "days").format("DD-MMMM-YYYY"),
    completedDate: moment().subtract(7, "days").format("DD-MMMM-YYYY"),
    spendTime: null,
  },
  {
    uuid: id++,
    name: "📃 Documentación",
    description: "Crear documentación para su uso",
    duration: "medium",
    createdDate: moment().subtract(5, "days").format("DD-MMMM-YYYY"),
    completedDate: moment().subtract(5, "days").format("DD-MMMM-YYYY"),
    spendTime: null,
  },
  {
    uuid: id++,
    name: "⚡️ Bienvenido ⚡ ️",
    description: "Crea tareas y lleva su seguimiento",
    duration: "short",
    createdDate: moment().subtract(3, "days").format("DD-MMMM-YYYY"),
    completedDate: null,
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
      createdDate: moment().format("DD-MMMM-YYYY"),
      completedDate: null,
      spendTime: null,
    };
    return [...state, newTask];
  }
  if (action.type === UPDATE_TASK) {
    const task = state.find((t) => t.uuid === action.payload.uuid);
    task.name = action.payload.name;
    task.description = action.payload.description;
    return [...state];
  }
  if (action.type === DELETE_TASK) {
    const tasks = state.filter((t) => t.uuid !== action.payload.uuid);
    return [...tasks];
  }
  if (action.type === COMPLETE_TASK) {
    const task = state.find((t) => t.uuid === action.payload.uuid);
    task.completedDate = moment().format("DD-MMMM-YYYY");
    return [...state];
  }
  return state;
};
