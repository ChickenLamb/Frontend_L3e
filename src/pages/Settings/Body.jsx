import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export function Body() {
  return (
    <Box sx={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }}>
      <Item>1</Item>
      <Item>2</Item>
      <Item>3</Item>
      <p>Settings</p>
    </Box>
  );
}
