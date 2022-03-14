import { Body as Classroom } from "./pages/Classroom/Body";
import Settings from "./pages/Settings/Body";
import Subscriptions from "./pages/Subscriptions/Body";
import Home from "./pages/Home/Body";
import { Body as Mainpage } from "./pages/Mainpage/Body";
import logo from "./assets/logo.png";
import "./styles.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import HideAppBar from "./components/AppBar/HideAppBar";
import { Routes, Route, Link } from "react-router-dom";
const pages = [
  {
    name: "首頁",
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
      <nav>
        <HideAppBar somProp={pages} logo={logo} logoTitle="L3Education" />
      </nav>
      <br />
      <Routes>
        <Route index element={<Mainpage />} />
        <Route path="Home" element={<Home />} />
        <Route path="Classroom" element={<Classroom />} />
        <Route path="Settings" element={<Settings />} />
        <Route path="Subscriptions" element={<Subscriptions />} />
      </Routes>
    </>
  );
}
