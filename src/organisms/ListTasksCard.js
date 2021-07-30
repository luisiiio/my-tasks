import React from "react";
import { useSelector } from "react-redux";
// view components
import styled from "styled-components";
import { TaskCard } from "@molecules";

const StyledListTasksCard = styled.main`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ListTasksCard = () => {
  const tasks = useSelector((state) => state.tasks);
  const statusFilter = useSelector((state) => state.filters.statusFilter);

  const applyStatusFilter = (tasks) => {
    if (statusFilter === "done") {
      return tasks.filter((t) => t.completedDate);
    }
    if (statusFilter === "pending") {
      return tasks.filter((t) => !t.completedDate);
    }
    return tasks;
  };

  const orderedTasks = applyStatusFilter(tasks);

  return (
    <StyledListTasksCard>
      {orderedTasks.map((task) => (
        <TaskCard key={task.uuid} {...task} />
      ))}
    </StyledListTasksCard>
  );
};

export default ListTasksCard;
