import React from "react";
import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import { updateTaskToEdit, updateShowTaskForm } from "@store/controls/actions";
import { deleteTask } from "@store/tasks/actions";
// view components
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import EditIcon from "@material-ui/icons/Edit";
import ReplayIcon from "@material-ui/icons/Replay";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import Divider from "@material-ui/core/Divider";

const TaskCardActions = ({ uuid, name, description, duration, classes }) => {
  const dispatch = useDispatch();

  const handleDispatch = (btnAction) => {
    switch (btnAction) {
      case "edit":
        dispatch(updateTaskToEdit({ uuid, name, description, duration }));
        dispatch(updateShowTaskForm({ showTaskForm: true }));
        break;
      case "delete":
        dispatch(deleteTask({ uuid }));
        break;

      default:
        break;
    }
  };

  return (
    <section>
      <Divider variant="middle" />
      <CardActions className={classes.actionsContainer}>
        <IconButton
          onClick={() => {
            handleDispatch("edit");
          }}
          color="primary"
          aria-label="play/pause"
        >
          <EditIcon className={classes.icon} />
        </IconButton>
        <IconButton color="primary" aria-label="play/pause">
          <ReplayIcon className={classes.icon} />
        </IconButton>
        <IconButton color="primary" aria-label="play/pause">
          <PlayArrowIcon className={classes.playIcon} />
        </IconButton>
        <IconButton
          onClick={() => {
            handleDispatch("delete");
          }}
          color="primary"
          aria-label="delete"
        >
          <DeleteIcon className={classes.icon} />
        </IconButton>
        <IconButton color="primary" aria-label="play/pause">
          <DoneIcon className={classes.icon} />
        </IconButton>
      </CardActions>
    </section>
  );
};

TaskCardActions.propTypes = {
  uuid: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  duration: PropTypes.string,
  classes: PropTypes.object,
};

export default TaskCardActions;
