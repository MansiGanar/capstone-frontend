import React from "react";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import TopCategory from "./TopCategory";

const TopCategories = () => {
  return (
    <Box textAlign="center" mt={10}>
      <Typography
        sx={{ color: "#1A0B5B" }}
        fontSize={42}
        fontWeight={700}
        mb={5}
      >
        Top Categories
      </Typography>
      <Grid
        container
        sx={{ padding: "2rem 0" }}
        gap={5}
        justifyContent="center"
      >
        <Grid item>
          <TopCategory />
        </Grid>
        <Grid item>
          <TopCategory />
        </Grid>
        <Grid item>
          <TopCategory />
        </Grid>
        <Grid item>
          <TopCategory />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopCategories;
