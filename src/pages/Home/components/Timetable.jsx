import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(mon, tue, wed, thu, fri, sat, sun) {
  return { mon, tue, wed, thu, fri, sat, sun };
}

const rows = [
  createData("班會", "", "", "高二 化学（中）", "", "初二 数学 （概念课）", ""),
  createData("", "", "清 掃", "", "総合的な探究", "", ""),
  createData("", "昼食・放課", "", "", "", "部活動", ""),
  createData("", "", "", "初二 数学 （概念课）", "総合的な探究", "", "地理"),
  createData("", "部活動", "", "", "昼食・放課", "", "清 掃")
];

export default function Timetable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">一</TableCell>
            <TableCell align="center">二</TableCell>
            <TableCell align="center">三</TableCell>
            <TableCell align="center">四</TableCell>
            <TableCell align="center">五</TableCell>
            <TableCell align="center">六</TableCell>
            <TableCell align="center">日</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.mon}
              </TableCell>
              <TableCell align="center">{row.tue}</TableCell>
              <TableCell align="center">{row.wed}</TableCell>
              <TableCell align="center">{row.thu}</TableCell>
              <TableCell align="center">{row.fri}</TableCell>
              <TableCell align="center">{row.sat}</TableCell>
              <TableCell align="center">{row.sun}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
