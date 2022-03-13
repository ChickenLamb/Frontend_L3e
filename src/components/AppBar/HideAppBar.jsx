import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Box from "@material-ui/core/Box";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

const preventDefault = (event) => event.preventDefault();

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Grid container columns={16}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    display: "inline-flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    alignSelf: "center"
                  }}
                >
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <NavLink
                    to="/"
                    style={(isActive) => ({
                      color: "inherit"
                    })}
                  >
                    <img
                      id="logo"
                      src={props.logo}
                      width="auto"
                      height="30px"
                      alt="logo"
                    ></img>
                  </NavLink>
                  <span>&nbsp;&nbsp;</span>
                  <Typography align="left" variant="h6">
                    {props.logoTitle}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={10}>
                {props.somProp.map((item, index) => (
                  <>
                    <Grid
                      item
                      xs={4}
                      sx={{
                        p: 1,
                        ml: 3,
                        mr: 3,
                        display: "inline-flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        alignSelf: "center"
                      }}
                      onClick={preventDefault}
                    >
                      <NavLink
                        to={item.link}
                        style={(isActive) => ({
                          color: "inherit"
                        })}
                      >
                        {item.name}
                      </NavLink>
                    </Grid>
                  </>
                ))}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
