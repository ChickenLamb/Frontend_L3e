import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import EditDataCard from "./components/EditDataCard";
import Box from "@mui/material/Box";
import ManageClassroom from "./components/ManageClassroom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  borderRadius: 12,
  color: theme.palette.text.secondary,
  marginBottom: 5,
  marginRight: 6,
}));

const controls = [
  {
    fieldName: "CourseName",
    displayName: "课程名字",
    inputType: "text",
  },

  {
    fieldName: "datetime",
    displayName: "课程日期时间",
    inputType: "time",
  },
  {
    fieldName: "TeacherName",
    displayName: "老师",
    inputType: "select",
  },
  {
    fieldName: "CourseLink",
    displayName: "课程Link",
    inputType: "text",
  },
  {
    fieldName: "GoogleClassroomLink",
    displayName: "Google Classroom Link",
    inputType: "text",
  },
];
const RedirectTo = { Back: "../CreateClassroom" };

export default function Body() {
  const navigate = useNavigate();
  const Redirect = (link, needUpdate = false) => {
    navigate(link);
  };

  const [isEditable, setIsEditable] = React.useState(false);

  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  var modifiers = {
    weekend: function (weekday) {
      return weekday == 0 || weekday == 6;
    },
  };

  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "15px",
          border: "13px solid #5465f7",
          color: "158, 110, 255",
          borderRadius: 10,
        }}
      >
        {" "}
        修改教室设定{" "}
      </h1>

      <Box
        sx={{
          flexGrow: 1,
          marginTop: 5,
          marginLeft: 2,
          marginRight: 2,
          border: 0,
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 12, md: 12 }}
        >
          {controls.map((item, index) => (
            <EditDataCard item={item} />
          ))}
        </Grid>
      </Box>

      <Accordion
        sx={{
          width: 1,
          border: 1,
          marginTop: 5,
          marginBottom: 5,
          boxShadow: 10,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ mx: "auto" }} style={{ color: "158, 110, 255" }}>
            教室管理
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ManageClassroom />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
