export const UPDATE_STATUS_FILTER = "UPDATE_STATUS_FILTER";

export const updateStatusFilter = ({ statusFilter }) => {
  return {
    type: UPDATE_STATUS_FILTER,
    payload: {
      statusFilter,
    },
  };
};
