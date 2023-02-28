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
import "./OrderList.css";
import ImportExportIcon from "@mui/icons-material/ImportExport";

const columns = [
  { id: "order_id", label: "Order ID" },
  { id: "order_date", label: "Order Date" },
  {
    id: "zip_code",
    label: "Zip Code",
    // align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "price",
    label: "Price",
    // align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "order_status",
    label: "Order Status",
    format: (value) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Action",
    format: (value) => value.toFixed(2),
  },
];

function createData(
  order_id,
  order_date,
  zip_code,
  price,
  order_status,
  action
) {
  return { order_id, order_date, zip_code, price, order_status, action };
}

const rows = [];
const OrderList = () => {
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
      <div className="Product_Top_container8">
        <div>
          <h3>Order List</h3>
        </div>
      </div>
      {/* Top container closed */}
      <div className="card-container8 ">
        <Card>
          <CardContent>
            <div className="options-container8">
              <TextField variant="outlined" label="search" />
              <TextField type="datetime-local" sx={{ml:1}}/>
              <TextField type="datetime-local"  sx={{ml:1}}/>
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
                Action
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

export default OrderList;
