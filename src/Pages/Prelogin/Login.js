import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
// import LoginImage from "../../Assets/image/login_image.png";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { userLogin } from "../../Redux/Actions/userAction";
import { useDispatch } from "react-redux";
import { WidthFull } from "@mui/icons-material";
const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleLogin = async () => {
    const payload = {
      username: username,
      password: password,
    };
    dispatch(userLogin(payload));
  };
  return (
    <div>
      <Grid container >
        <Grid item xs={6}>
          <img
            src="https://www.netguru.com/hubfs/Admin_Panel_Design_Tools_and_Techniques.jpg"
            width={650}
            height={500}
          />
        </Grid>
        <Grid item xs={6} sx={{ mt: 10 }}>
          <h1 style={{ marginLeft: "280px" }}>Login Page</h1>
          <TextField
            variant="outlined"
            label="username*"
            fullWidth
            sx={{ mt: 2 }}
            onChange={(e) => setUserName(e.target.value)}
            /> 
          <FormControl sx={{ mt: 3 }} variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">
              Password*
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
            />
          </FormControl>
          <Button
            variant="contained"
            sx={{ mt: 2, ml: 36 }}
            onClick={handleLogin}
          >
            Login
          </Button> <br /><br /> <br />
          <a href="">Forget Password</a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
