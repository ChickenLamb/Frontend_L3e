import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import LogoWebp from "../assets/Mainpage_logo.webp";
import LogoAvif from "../assets/Mainpage_logo.avif";
import LogoJpeg from "../assets/Mainpage_logo.jpeg";
import Container from "@mui/material/Container";
import ReactPlayer from "react-player/youtube";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export default function VideoFrame() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={0}>
        <Item elevation={0}>
          <picture>
            <source srcSet={LogoAvif} type="image/avif" />
            <source srcSet={LogoWebp} type="image/webp" />
            <img
              width="auto"
              height="150vh"
              src={LogoJpeg}
              type="image/jpeg"
              alt="mainpage_logo"
            />
          </picture>
        </Item>
        <Item elevation={0}>
          <h1>欢迎来到&nbsp;L3&nbsp;EDUCATION</h1>
        </Item>
        <Item elevation={0}>
          <Container sx={{ height: "50vh" }} maxWidth="lg">
            <ReactPlayer
              width="100%"
              height="100%"
              loop="true"
              controls="true"
              url="https://youtu.be/KkKn-51Aevo"
              playing
            />
          </Container>
        </Item>
      </Stack>
    </Box>
  );
}
