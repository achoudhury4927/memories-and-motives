import React from "react";

import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Input = ({
  autoFocus,
  half,
  handleChange,
  handleShowPassword,
  label,
  name,
  type,
  testid,
}) => (
  <Grid item xs={12} sm={half ? 6 : 12}>
    <TextField
      autoFocus={autoFocus}
      name={name}
      onChange={handleChange}
      variant="outlined"
      required
      fullWidth
      label={label}
      type={type}
      InputProps={
        name === "password"
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword}>
                    {type === "password" ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : null
      }
      data-testid={testid}
    />
  </Grid>
);

export default Input;
