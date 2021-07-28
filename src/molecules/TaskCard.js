import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import EditIcon from "@material-ui/icons/Edit";
import ReplayIcon from "@material-ui/icons/Replay";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    width: "calc(100% - 20px)",
    margin: 10,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  sub: {
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

const MainSection = () => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Mi primer tarea
          </Typography>
          <Typography className={classes.sub} color="textSecondary">
            Duración: Corta
          </Typography>
          <Typography className={classes.sub} color="textSecondary">
            Creada: 20 Jul 21 - Completada: 25 Jul 21
          </Typography>
          <Typography variant="body2" component="p">
            Esta es mi primer tarea, tengo que familiarizarme con la app y
            generar una nueva tarea. También tendré que consultar la gráfica
            para ver las estadisticas de mi productividad.
          </Typography>
        </CardContent>
        <Divider variant="middle" />
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
      </Card>
    </>
  );
};

export default MainSection;
