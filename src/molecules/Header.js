import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateShowTaskForm } from "@store/controls/actions";
import { toggleShowFilters } from "@store/filters/actions";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import TuneIcon from "@material-ui/icons/Tune";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  link: {
    color: "white",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = useStyles();
  const showFilters = useSelector((state) => state.filters.showFilters);
  const dispatch = useDispatch();

  const handleToggleFilters = (event) => {
    event.preventDefault();
    dispatch(toggleShowFilters({ showFilters: !showFilters }));
  };

  const handleNewTask = (event) => {
    event.preventDefault();
    dispatch(updateShowTaskForm({ showTaskForm: true }));
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link}>
              My Tasks
            </Link>
          </Typography>

          <div>
            <Button
              onClick={handleNewTask}
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Nueva Tarea
            </Button>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleToggleFilters}
              style={{ color: showFilters ? "white" : "#5B5B5B" }}
            >
              <TuneIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
