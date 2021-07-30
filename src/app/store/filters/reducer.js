import { UPDATE_STATUS_FILTER } from "./actions";

export const initialFilters = {
  statusFilter: "all",
};

export const filtersReducer = (state = initialFilters, action) => {
  if (action.type === UPDATE_STATUS_FILTER) {
    return { ...state, statusFilter: action.payload.statusFilter };
  }
  return { ...state };
};
