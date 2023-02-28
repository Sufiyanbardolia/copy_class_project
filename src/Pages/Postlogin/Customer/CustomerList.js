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
import "./CustomerList.css";
import ImportExportIcon from "@mui/icons-material/ImportExport";

const columns = [
  { id: "customer_name", label: "Customer Name" },
  { id: "mobile_number", label: "Mobile Number" },
  {
    id: "email",
    label: "Email",
    // align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "oders_placed",
    label: "Oders Placed",
    // align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "total_seles",
    label: "Total Seles",
    // align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
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

function createData(customer_name, mobile_number, email, oders_placed, total_seles,status, action) {
  return { customer_name, mobile_number, email, oders_placed, total_seles,status, action };
}

const rows = [
 
  createData("Sufiyan", 8668752961, "Sufiyan@gmail.com"," "," ",<Button variant="contained" color="success">
   inactive
</Button>, <i class="fa-solid fa-pen-to-square"></i>),
  createData("Sufiyan", 8668752961, "Sufiyan@gmail.com"," "," ",<Button variant="contained" color="success">
   inactive
</Button>, <i class="fa-solid fa-pen-to-square"></i>),
  createData("Sufiyan", 8668752961, "Sufiyan@gmail.com"," "," ",<Button variant="contained" color="success">
   inactive
</Button>, <i class="fa-solid fa-pen-to-square"></i>),
  createData("Sufiyan", 8668752961, "Sufiyan@gmail.com"," "," ",<Button variant="contained" color="success">
   inactive
</Button>, <i class="fa-solid fa-pen-to-square"></i>),
  createData("Sufiyan", 8668752961, "Sufiyan@gmail.com"," "," ",<Button variant="contained" color="success">
   inactive
</Button>, <i class="fa-solid fa-pen-to-square"></i>),
  
];
const CustomerList = () => {
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
      <div className="Product_Top_container3">
        <div>
          <h3>CustomerList</h3>
        </div>
        <div className="Product-Top-button">
         
          <Button variant="contained" color="success">
            Add Customer
          </Button>
        </div>
      </div>
      {/* Top container closed */}
      <div className="card-container3">
        <Card>
          <CardContent>
            <div className="options-container">
              <TextField variant="outlined" label="search" />
              
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
                          <ImportExportIcon sx={{mb:-1}}/>
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
              <Button variant="outlined" color="error">Inactive</Button>
              <Button variant="contained" sx={{ml:3}}>Apply</Button>
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

export default CustomerList;
