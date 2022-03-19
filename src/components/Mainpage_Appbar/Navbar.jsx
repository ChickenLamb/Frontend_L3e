import React from "react";
import { NavLink } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
// react.school/material-ui

export default function Navbar(props) {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        {props.pages.map((item, index) => (
          <MenuItem bool={true} key={index}>
            <NavLink
              key={index}
              to={item.link}
              style={(isActive) => ({
                color: "inherit",
                fontSize: "0.2em"
              })}
            >
              {item.name}
            </NavLink>
          </MenuItem>
        ))}
      </Stack>
    </>
  );
}
// things to do next Add social media link buuttons to navbar at align-left
