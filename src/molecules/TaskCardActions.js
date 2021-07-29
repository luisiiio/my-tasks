import React from "react";
import { PropTypes } from "prop-types";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import EditIcon from "@material-ui/icons/Edit";
import ReplayIcon from "@material-ui/icons/Replay";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";

const TaskCardActions = ({ classes }) => {
  return (
    <CardActions className={classes.actionsContainer}>
      <IconButton color="primary" aria-label="play/pause">
        <EditIcon className={classes.icon} />
      </IconButton>
      <IconButton color="primary" aria-label="play/pause">
        <ReplayIcon className={classes.icon} />
      </IconButton>
      <IconButton color="primary" aria-label="play/pause">
        <PlayArrowIcon className={classes.playIcon} />
      </IconButton>
      <IconButton color="primary" aria-label="play/pause">
        <DeleteIcon className={classes.icon} />
      </IconButton>
      <IconButton color="primary" aria-label="play/pause">
        <DoneIcon className={classes.icon} />
      </IconButton>
    </CardActions>
  );
};

TaskCardActions.propTypes = {
  classes: PropTypes.object,
};

export default TaskCardActions;
