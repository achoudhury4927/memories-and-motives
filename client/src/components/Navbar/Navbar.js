import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";

import styles from "./styles.js";
import lineup from "../../images/lineup.png";

const Navbar = () => {
  const classes = styles();
  const user = null;
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memory
        </Typography>
        <img
          className={`${classes.image} ${classes.smImage}`}
          src={lineup}
          alt="memories"
        />
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.purple}
                alt={user.result.name}
                src={user.result.imageUrl}
              >
                {user.result.name.chatAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user?.result.name}
              </Typography>
              <Button
                variant="contained"
                className={classes.logout}
                color="secondary"
                onClick={() => {}}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default Navbar;
