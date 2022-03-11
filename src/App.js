import { Body as Classroom } from "./pages/Classroom/Body";
import { Body as Settings } from "./pages/Settings/Body";
import { Body as Subscriptions } from "./pages/Subscriptions/Body";
import { Body as Home } from "./pages/Home/Body";
import "./styles.css";
import Box from "@mui/material/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import HideAppBar from "./components/AppBar/HideAppBar";
import { Routes, Route, Link } from "react-router-dom";
const pages = [
  {
    name: "我的课程",
    link: "Home"
  },

  {
    name: "教室",
    link: "Classroom"
  },
  {
    name: "设定",
    link: "Settings"
  },
  {
    name: "购买课程",
    link: "Subscriptions"
  }
];

export default function App() {
  return (
    <>
      <CssBaseline />
      <HideAppBar somProp={pages} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Classroom" element={<Classroom />} />
        <Route path="Settings" element={<Settings />} />
        <Route path="Subscriptions" element={<Subscriptions />} />
      </Routes>
    </>
  );
}
