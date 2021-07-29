import React from "react";
import { PropTypes } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import TaskCardContent from "./TaskCardContent";
import TaskCardActions from "./TaskCardActions";

const TaskCard = ({
  name,
  description,
  duration,
  createdDate,
  completedDate,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <TaskCardContent
        name={name}
        duration={duration}
        createdDate={createdDate}
        completedDate={completedDate}
        description={description}
        classes={classes}
      />
      <Divider variant="middle" />
      <TaskCardActions classes={classes} />
    </Card>
  );
};

TaskCard.propTypes = {
  uuid: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  duration: PropTypes.string,
  createdDate: PropTypes.string,
  completedDate: PropTypes.string,
  spendTime: PropTypes.number,
};

export default TaskCard;

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
    width: "calc(100% - 20px)",
    margin: 10,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  duration: {
    textAlign: "end",
    fontSize: 12,
    margin: "5px 0",
  },
  dates: {
    fontSize: 12,
    margin: "5px 0",
  },
  actionsContainer: {
    display: "flex",
    justifyContent: "center",
  },
  playIcon: {
    height: 25,
    width: 25,
  },
  icon: {
    height: 20,
    width: 20,
  },
});
