import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Classcard from "./components/Classcard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

const mycourses = [
  {
    title: "高二 化学（中）",
    desciption:
      "Lizards are a widespread group of squamate reptiles, with over 6,000" +
      "species, ranging across all continents except Antarctica"
  },

  {
    title: "初二 数学 （概念课）",
    desciption:
      "Lizards are a widespread group of squamate reptiles, with over 6,000" +
      "species, ranging across all continents except Antarctica"
  },
  {
    title: "文化與藝術",
    desciption:
      "Lizards are a widespread group of squamate reptiles, with over 6,000" +
      "species, ranging across all continents except Antarctica"
  },
  {
    title: "地理",
    desciption:
      "Lizards are a widespread group of squamate reptiles, with over 6,000" +
      "species, ranging across all continents except Antarctica"
  }
];

export function Body() {
  return (
    <Box sx={{ flexGrow: 1, marginLeft: 3 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {mycourses.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Classcard
              title={item.title}
              description={item.desciption}
              image="https://i.pravatar.cc/300"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
