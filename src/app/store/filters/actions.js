export const UPDATE_STATUS_FILTER = "UPDATE_STATUS_FILTER";
export const UPDATE_DURATION_FILTER = "UPDATE_DURATION_FILTER";
export const UPDATE_SEARCH_FILTER = "UPDATE_SEARCH_FILTER";
export const TOGGLE_SHOW_FILTERS = "TOGGLE_SHOW_FILTERS";

export const updateStatusFilter = ({ statusFilter }) => {
  return {
    type: UPDATE_STATUS_FILTER,
    payload: {
      statusFilter,
    },
  };
};

export const updateDurationFilter = ({ durationFilter }) => {
  return {
    type: UPDATE_DURATION_FILTER,
    payload: {
      durationFilter,
    },
  };
};

export const updateSearchFilter = ({ searchFilter }) => {
  return {
    type: UPDATE_SEARCH_FILTER,
    payload: {
      searchFilter,
    },
  };
};

export const toggleShowFilters = ({ showFilters }) => {
  return {
    type: TOGGLE_SHOW_FILTERS,
    payload: {
      showFilters,
    },
  };
};
