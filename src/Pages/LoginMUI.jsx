import { Button, Grid, TextField } from "@mui/material";
import React from "react";

function LoginMUI() {
  return (
    <Grid
      style={{ height: "100vh", width: "100vw" }}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        container
        xs={6}
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item container justifyContent="center">
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="standard-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid item container justifyContent="center">
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="standard-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid item container justifyContent="center">
          <Grid item xs={6}>
            <Button fullWidth variant="contained">
              Login
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LoginMUI;


<TextField value onChange variant fullWidth color name id />