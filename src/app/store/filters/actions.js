export const UPDATE_STATUS_FILTER = "UPDATE_STATUS_FILTER";
export const UPDATE_DURATION_FILTER = "UPDATE_DURATION_FILTER";

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
