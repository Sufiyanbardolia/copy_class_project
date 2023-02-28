import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { width } from "@mui/system";
import React, { useState } from "react";
import JoditEditorComp from "../../../Components/JoditEditorComp";
import "./AddProduct.css";

const AddProduct = () => {
  const [value, setValue] = useState("");
  const [Status, setStatus] = useState("");
  const [category, setCategory] = useState([
    {
      name: "Accessories",
      expend: false,
      subCategory: [
        {
          name: "Wallets",
        },
        { name: "Perfume" },
      ],
    },
    {
      name: "Mens",
      expend: true,
      subCategory: [
        {
          name: "Formal shirts",
        },
        { name: "Botton Wear" },
      ],
    },
  ]);
  const config = {
    readonly: false,
    placeholder: "Start typings...",
  };
  const handleExpendChange = (index, PreExpend) => {
    const changeData = category.map((item, ind) => {
      if (index == ind) {
        return {
          ...item,
          expend: !PreExpend,
        };
      } else {
        return {
          ...item,
          expend: false,
        };
      }
    });
    setCategory(changeData);
  };

  return (
    <div className="Product_main_Container">
      <div className="Product_Top_Add_container">
        <div>
          <h3>Product</h3>
        </div>
        <div className="Product-Top-button">
          <Button variant="contained" color="success">
            Add Product
          </Button>
        </div>
      </div>
      {/* top container close*/}
      <div className="Add_Product_container">
        <Grid container spacing={4} sx={{ mt: 0.1 }}>
          <Grid item xs={8}>
            <Card>
              <CardContent>
                <TextField label="Title" variant="outlined" />
                <Typography>Short Product Description</Typography>
                <JoditEditorComp
                  setValue={setValue}
                  value={value}
                  config={config}
                />
                <Typography>Long Product Description</Typography>
                <JoditEditorComp
                  setValue={setValue}
                  value={value}
                  config={config}
                />
              </CardContent>
            </Card>
            <Card sx={{ mt: 3 }}>
              <CardContent>
                <Typography>Media</Typography>
                <Button variant="contained">Upoload Media</Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card>
              <CardContent>
                <FormControl sx={{ width: 200 }}>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Status}
                    label="Status"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <MenuItem value={1}>Active</MenuItem>
                    <MenuItem value={0}>Inactive</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
            <Card sx={{ mt: 3 }}>
              <CardContent>
                <Typography>Product Categories</Typography>
                <ul>
                  {category.map((item, index) => {
                    return (
                      <li>
                        <span
                          onClick={() => handleExpendChange(index, item.expend)}
                        >
                          {" "}
                          {item.expend ? "-" : "+"} {item.name}
                        </span>
                        <ul>
                          {item.expend &&
                            item.subCategory.map((elem) => {
                              return (
                                <li>
                                  <input type="radio" name="category" />
                                  <label> {elem.name}</label>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
                <Typography> Tags</Typography>
                <TextField />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography>Product Informetion</Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography>SKU</Typography>
                <TextField variant="outlined" label="SKU" />
              </Grid>
              <Grid item xs={3}>
                <Typography>Model Number</Typography>
                <TextField variant="outlined" label="Model Number" />
              </Grid>
              <Grid item xs={3}>
                <Typography>Product Quantity</Typography>
                <TextField variant="outlined" label="Product Quantity" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography>Pricing</Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography>Base Price</Typography>
                <TextField variant="outlined" />
              </Grid>
              <Grid item xs={3}>
                <Typography>Original Price</Typography>
                <TextField variant="outlined" />
              </Grid>
              <Grid item xs={3}>
                <Typography>Selling Price</Typography>
                <TextField variant="outlined" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography>Shipping Information</Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography>Shipping Changes</Typography>
                <TextField variant="outlined" />
              </Grid>
              <Grid item xs={3}>
                <Typography>Product Weight</Typography>
                <TextField variant="outlined" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography>Tax Information</Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography>Tax Amount</Typography>
                <TextField variant="outlined" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography>SEO</Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Typography>Meta Tgs</Typography>
              </Grid>

              <Grid item xs={3}>
                <TextField variant="outlined" />
              </Grid>

              <Grid item xs={6}></Grid>
              <Grid item xs={3}>
                <Typography>Description</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField variant="outlined" />
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={3}>
                <Typography>Keyword</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField variant="outlined" />
              </Grid>
              <Grid item xs={6}></Grid>
            </Grid>
          </CardContent>
        </Card>
        <Paper sx={{ width: "100%" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Question</TableCell>
                  <TableCell>Answer</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <TextField />
                  </TableCell>
                  <TableCell>
                    <TextField />
                  </TableCell>
                  <TableCell>
                    <Button variant="outlined" color="error">
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Button variant="contained" color="success">
            Add
          </Button>
        </Paper>
      </div>
    </div>
  );
};

export default AddProduct;
