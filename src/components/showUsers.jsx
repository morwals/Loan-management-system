import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from 'react'
const axios = require("axios");

export default function ShowUsers() {
    const [studentsData, setStudentsData] = useState([]);

    useEffect(() => {
    axios({
        method: "get",
        url: "http://localhost:8080/getallusers",
      })
        .then(function (response) {
          return response.data;
        })
        .then((data) => {
          const keyList = Object.keys(data);
          const dataList = [];

          keyList.map((key) => {
            dataList.push(data[key]);
          });
          setStudentsData(dataList);
          console.log(dataList);
        });
    }, []);
    return (
         <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
              <TableCell>Sno.</TableCell>
                <TableCell>User Id</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentsData.map((row,i) => (
                <TableRow
                  key={row.user_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                    <TableCell>{i+1}</TableCell>
                  <TableCell>{row.user_id}</TableCell>
                  <TableCell>{row.user_name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell>{row.address}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  )
}
