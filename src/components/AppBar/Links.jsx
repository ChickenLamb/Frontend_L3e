/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const preventDefault = (event) => event.preventDefault();

export default function Links(props) {
  return (
    <Box sx={{ mr: 5 }} onClick={preventDefault}>
      <Link color="inherit" href={props.link}>
        {props.name}
      </Link>
    </Box>
  );
}
