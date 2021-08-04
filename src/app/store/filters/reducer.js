import {
  UPDATE_STATUS_FILTER,
  UPDATE_DURATION_FILTER,
  UPDATE_SEARCH_FILTER,
} from "./actions";

export const initialFilters = {
  statusFilter: "all",
  durationFilter: "all",
  searchFilter: "",
};

export const filtersReducer = (state = initialFilters, action) => {
  if (action.type === UPDATE_STATUS_FILTER) {
    return { ...state, statusFilter: action.payload.statusFilter };
  }
  if (action.type === UPDATE_DURATION_FILTER) {
    return { ...state, durationFilter: action.payload.durationFilter };
  }
  if (action.type === UPDATE_SEARCH_FILTER) {
    return { ...state, searchFilter: action.payload.searchFilter };
  }
  return { ...state };
};
