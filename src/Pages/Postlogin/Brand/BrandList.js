import React from "react";
import { Button, Card, CardContent, Checkbox, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "./BrandList.css";
import ImportExportIcon from "@mui/icons-material/ImportExport";

const columns = [
  { id: "brand", label: "Brand" },
  { id: "brand_name", label: "Brand Name" },

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

function createData(brand, brand_name, status, action) {
  return { brand, brand_name, status, action };
}

const rows = [
  createData(
    "India",
    "IN",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "China",
    "CN",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "Italy",
    "IT",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "United States",
    "US",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "Canada",
    "CA",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
  createData(
    "Australia",
    "AU",
    <Button variant="contained" color="success">
      active
    </Button>,
    <i class="fa-solid fa-pen-to-square"></i>
  ),
];
const BrandList = () => {
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

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <div className="Product_Top_container1">
        <div>
          <h3>BrandList</h3>
        </div>
        <div className="Product-Top-button">
          <Button variant="contained" color="success">
            Add Brand
          </Button>
        </div>
      </div>
      {/* Top container closed */}
      <div className="card-container1">
        <Card>
          <CardContent>
            <div className="options-container">
              <TextField variant="outlined" label="search" />
              <FormControl sx={{ width: 200 }}>
                <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <Button variant="contained">Search</Button>
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
              <Button variant="outlined" color="error">
                Inactive
              </Button>
              <Button variant="contained" sx={{ ml: 3 }}>
                Apply
              </Button>
              <TablePagination
                rowsPerPageOptions={[5, 10, 15, 20, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BrandList;
