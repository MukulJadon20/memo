// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./Header";
import { Title } from "@mui/icons-material";
import { Grid } from "@mui/material";

const AppLayout = () => (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    return (
      <>
        {/* <Title /> */}
        <Header />

        <Grid container height={"Calc(100vh-4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            height={"100vh"}
          >
            First
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            lg={6}
            height={"100vh"}
            bgcolor={"primary-main"}
          >
            {" "}
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            height={"100vh"}
            sx={{
              display: { xs: "none", sm: "block" },
              padding:"2rem",
              bgcolor:"rgba(0,0,0,0.85)",
            }}
          >
            Third
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
