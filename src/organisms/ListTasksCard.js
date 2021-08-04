import React from "react";
import { useSelector } from "react-redux";
// view components
import styled from "styled-components";
import { TaskCard } from "@molecules";

const StyledListTasksCard = styled.section`
  width: 100%;
  padding: 10px 10px;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListTasksCard = () => {
  const tasks = useSelector((state) => state.tasks);
  const statusFilter = useSelector((state) => state.filters.statusFilter);
  const durationFilter = useSelector((state) => state.filters.durationFilter);
  const searchFilter = useSelector((state) => state.filters.searchFilter);

  const applyStatusFilter = (tasks) => {
    if (statusFilter === "done") {
      return tasks.filter((t) => t.completedDate);
    }
    if (statusFilter === "pending") {
      return tasks.filter((t) => !t.completedDate);
    }
    return tasks;
  };

  const applyDurationFilter = (tasks) => {
    if (durationFilter === "all") {
      return tasks;
    }
    return tasks.filter((t) => t.duration === durationFilter);
  };

  const applySearchFilter = (tasks) => {
    if (searchFilter === "") {
      return tasks;
    }
    return tasks.filter(
      (t) =>
        t.name.includes(searchFilter) || t.description.includes(searchFilter)
    );
  };

  const tasksFiltered = applySearchFilter(
    applyDurationFilter(applyStatusFilter(tasks))
  );

  return (
    <StyledListTasksCard>
      {tasksFiltered.map((task) => (
        <TaskCard key={task.uuid} {...task} />
      ))}
    </StyledListTasksCard>
  );
};

export default ListTasksCard;
