import React from "react";
import styled from "styled-components";
import { TaskCard } from "@molecules";
import { useSelector } from "react-redux";

const StyledListTasksCard = styled.main`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ListTasksCard = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <StyledListTasksCard>
      {tasks.map((task) => (
        <TaskCard key={task.uuid} {...task} />
      ))}
    </StyledListTasksCard>
  );
};

export default ListTasksCard;
