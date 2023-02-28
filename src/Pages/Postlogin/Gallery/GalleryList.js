import React from "react";
import { Button, Card, CardContent, Checkbox, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "./GalleryList.css";
import ImportExportIcon from "@mui/icons-material/ImportExport";

const columns = [
  { id: "gallery_name", label: "Gallery Name" },
  ,
  {
    id: "status",
    label: "Status",
    format: (value) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Action",
    format: (value) => value.toFixed(2),
  },
];

function createData(gallery_name, status, action) {
  return { gallery_name, status, action };
}

const rows = [
  createData(
    "India",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>,
    3287263
  ),
  createData(
    "China",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>,
    9596961
  ),
  createData(
    "Italy",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>,
    301340
  ),
  createData(
    "United States",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>,
    9833520
  ),
  createData(
    "Canada",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>,
    9984670
  ),
  createData(
    "Australia",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>,
    7692024
  ),
  createData(
    "Germany",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>,
    357578
  ),
  createData(
    "Ireland",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>,
    70273
  ),
  createData(
    "Mexico",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>,
    1972550
  ),
  createData(
    "Japan",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>,
    377973
  ),
  createData(
    "France",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>,
    640679
  ),
  createData(
    "United Kingdom",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>,
    242495
  ),
  createData(
    "Russia",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>,
    17098246
  ),
  createData(
    "Nigeria",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>,
    923768
  ),
  createData(
    "Brazil",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>,
    8515767
  ),
];
const GalleryList = () => {
  const [age, setAge] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <div>
        <h3>Gallery List</h3>
      </div>

      {/* Top container closed */}
      <div className="card-container9">
        <Card>
          <CardContent>
            <div className="options-container9">
              <TextField variant="outlined" label="search" />
              
              <Button variant="contained" sx={{ml:1}}>Search</Button>
            </div>
            <Paper>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      {columns.map((column) => (
                        <TableCell key={column.id} align={column.align}>
                          {column.label}
                          <ImportExportIcon sx={{ mb: -1 }} />
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            <TableCell>
                              <Checkbox />
                            </TableCell>
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 15, 20, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
              <Button variant="outlined" color="error">
                Inactive
              </Button>
              <Button variant="contained" sx={{ ml: 3 }}>
                Apply
              </Button>
            </Paper>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GalleryList;
