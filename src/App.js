import { Body as Classroom } from "./pages/Classroom/Body";
import "./styles.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import HideAppBar from "./components/AppBar/HideAppBar";
const pages = [
  {
    name: "我的课程",
    link: "App"
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
      <Container maxWidth="xl" disableGutters="true">
        <HideAppBar somProp={pages} />
      </Container>
      <Container maxWidth="xl" disableGutters="true">
        <Classroom />
      </Container>
    </>
  );
}
