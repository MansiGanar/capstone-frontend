import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

interface IPageHeader {
  title: string;
}

const PageHeader = ({ title }: IPageHeader) => {
  return (
    <Box sx={{ backgroundColor: "#F6F5FF" }} lineHeight="1rem">
      <Typography
        sx={{
          padding: "5rem 15rem 1rem 15rem",
          fontSize: "2.25rem",
          fontWeight: "700",
          color: "#101750 ",
        }}
      >
        {title}
      </Typography>
      <Grid container sx={{ padding: "0 15rem 5rem 15rem" }}>
        <Grid item>
          <Link to="/">
            <Typography sx={{ marginRight: "0.5rem" }}>Home</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Typography sx={{ color: "#FB2E86" }}>{title}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default PageHeader;
