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
import "./Transaction.css";
import ImportExportIcon from "@mui/icons-material/ImportExport";

const columns = [
  { id: "customer_name", label: "Customer Name" },
  { id: "transaction_amount", label: "Transaction Amount" },
  {
    id: "transaction_id",
    label: "Transaction ID",
    // align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "transaction_date",
    label: "Transaction Date",
    // align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "transaction_mode",
    label: "Transaction Mode",
    format: (value) => value.toFixed(2),
  },
  {
    id: "status",
    label: "Status",
    format: (value) => value.toFixed(2),
  },
];

function createData(
  customer_name,
  transaction_amount,
  transaction_id,
  transaction_date,
  transaction_mode,
  status
) {
  return {
    customer_name,
    transaction_amount,
    transaction_id,
    transaction_date,
    transaction_mode,
    status,
  };
}

const rows = [];
const Transaction = () => {
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
      <div className="Product_Top_container7">
        <div>
          <h3>Transaction</h3>
        </div>
      </div>
      {/* Top container closed */}
      <div className="card-container7">
        <Card>
          <CardContent>
            <div className="options-container7 ">
              <TextField
                variant="outlined"
                label="search"
                sx={{width:0.5}}
              />
              {/* <Button variant="contained">Search</Button> */}
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
            </Paper>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Transaction;
