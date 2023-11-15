// 12.Build a data table using Material-UI's Table component.
// Populate the table with sample data and add features like sorting and pagination.

import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  Paper,
  TableRow,
  TableSortLabel,
  TablePagination,
} from "@mui/material";
import { useState } from "react";
import { rows } from "./TableData";

const DataTable = () => {
  const [sortBy, setSortBy] = useState("id");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const handlePageChange = (e, newPage) => {
    setPage(newPage);
  };
  const handleRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value));
    setPage(0);
  };
  const handleSort = (field) => {
    if (sortBy === field && order === "asc") {
      setOrder("desc");
    } else {
      setOrder("asc");
    }
    setSortBy(field);
  };
  const sortedData = [...rows].sort((a, b) => {
    if (order === "asc") {
      if (a[sortBy] > b[sortBy]) return 1;
      else return -1;
    } else {
      if (a[sortBy] < b[sortBy]) return 1;
      else return -1;
    }
  });
  const pageData = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <>
      <h3>Data Table</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortBy === "id"}
                  direction={sortBy === "id" ? order : "asc"}
                  onClick={() => handleSort("id")}
                >
                  <h4>ID</h4>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy === "name"}
                  direction={sortBy === "name" ? order : "asc"}
                  onClick={() => handleSort("name")}
                >
                  <h4>Name</h4>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortBy === "age"}
                  direction={sortBy === "age" ? order : "asc"}
                  onClick={() => handleSort("age")}
                >
                  <h4>Age</h4>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <h4>Email</h4>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pageData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        rowsPerPageOptions={[3, 6]}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPage}
      />
    </>
  );
};
export default DataTable;
