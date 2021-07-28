import React from "react";
import { Link } from "react-router-dom";

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
    margin: theme.spacing.unit,
  },
}));

const Header = () => {
  const classes = useStyles();

  const handleMenu = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link}>
              My Tasks App
            </Link>
          </Typography>

          <div>
            <Button variant="contained" color="secondary">
              Nueva Tarea
            </Button>
            <Link to="/" className={classes.link}>
              <Button color="secondary" className={classes.button}>
                Lista
              </Button>
            </Link>
            <Link to="/graph" className={classes.link}>
              <Button color="secondary" className={classes.button}>
                Gráfica
              </Button>
            </Link>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
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
