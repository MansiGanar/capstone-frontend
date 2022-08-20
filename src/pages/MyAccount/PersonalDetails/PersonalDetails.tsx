import { Typography, Box, Grid, Button } from "@mui/material";
import React from "react";
import { IPersonalDetailsProps } from "../types";

const PersonalDetails = ({ userDetailsData }: IPersonalDetailsProps) => {
  return (
    <Box mb={8}>
      <Typography
        sx={{
          fontSize: "1.5rem",
          fontWeight: "700",
          color: "#151875",
          marginBottom: "2rem",
        }}
      >
        Personal Details
      </Typography>
      <Box
        sx={{
          borderRadius: ".188rem",
          background: "#F4F4FC",
          padding: "1.5rem 2rem",
        }}
      >
        <Grid
          container
          alignItems={"center"}
          sx={{ color: "#1D3178" }}
          spacing="1rem"
        >
          <Grid item sm>
            <Typography fontWeight={700} mb={1}>
              First Name
            </Typography>
            <Typography>{userDetailsData?.firstName || "-"}</Typography>
          </Grid>
          <Grid item sm>
            <Typography fontWeight={700} mb={1}>
              Last Name
            </Typography>
            <Typography>{userDetailsData?.lastName || "-"}</Typography>
          </Grid>
          <Grid item sm>
            <Typography fontWeight={700} mb={1}>
              Email
            </Typography>
            <Typography>{userDetailsData?.email || "-"}</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                borderRadius: "0",
                textTransform: "none",
                background: "#FF1788",
                ":hover": { background: "#FF1788" },
                padding: "0.7rem",
                marginBottom: "1rem",
              }}
            >
              Edit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PersonalDetails;
