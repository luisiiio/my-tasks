import React from "react";
import { PropTypes } from "prop-types";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const TaskCardContent = ({
  name,
  duration,
  createdDate,
  completedDate,
  description,
  classes,
}) => {
  const durationList = {
    short: "Corta de 30min o menos",
    medium: "Media de 30min - 1hr",
    large: "Larga de 1hr - 2hrs",
  };
  return (
    <CardContent>
      <Typography className={classes.duration} color="textSecondary">
        <strong>Duración</strong>
        {" " + durationList[duration]}
      </Typography>
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
      <Typography className={classes.dates} color="textSecondary">
        <strong>Creada</strong>
        {" " + createdDate}
        {completedDate && (
          <>
            <strong> - Completada</strong>
            {" " + completedDate}
          </>
        )}
      </Typography>
      <Typography variant="body2" component="p">
        {description}
      </Typography>
    </CardContent>
  );
};

TaskCardContent.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  duration: PropTypes.string,
  createdDate: PropTypes.string,
  completedDate: PropTypes.string,
  classes: PropTypes.object,
};

export default TaskCardContent;
