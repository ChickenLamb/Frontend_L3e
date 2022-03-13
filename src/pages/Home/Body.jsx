import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Profileboard } from "./components/Profileboard";
import Notificationboard from "./components/Notificationboard";
import Timetable from "./components/Timetable";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  borderRadius: 12,
  color: "black"
}));

export default function Body() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Item>
            <Profileboard
              name="趙曉文"
              desciption="夢裡出現的人，醒來就應該去見他，生活就是怎麼簡單。"
            />
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>
            <Notificationboard />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Timetable />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
