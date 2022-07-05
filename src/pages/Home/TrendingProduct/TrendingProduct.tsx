import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import trendingProduct from "../../../assets/images/trending-product.svg";

const TrendingProduct = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent={"center"}
      sx={{ background: "#F1F0FF" }}
    >
      <Grid item>
        <img src={trendingProduct} alt="trending-product" />
      </Grid>
      <Grid item>
        <Typography
          sx={{ color: "#1A0B5B" }}
          fontSize={42}
          fontWeight={700}
          mb={3}
        >
          Unique Features Of leatest & Trending Poducts
        </Typography>
        <ul>
          <li style={{ color: "#F52B70", fontSize: "2rem" }}>
            <Typography sx={{ color: "#ACABC3" }} mb={1}>
              All frames constructed with hardwood solids and laminates
            </Typography>
          </li>
          <li style={{ color: "#2B2BF5", fontSize: "2rem" }}>
            <Typography sx={{ color: "#ACABC3" }} mb={1}>
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </Typography>
          </li>
          <li style={{ color: "#2BF5CC", fontSize: "2rem" }}>
            <Typography sx={{ color: "#ACABC3" }}>
              Arms, backs and seats are structurally reinforced
            </Typography>
          </li>
        </ul>
        <Grid container alignItems="center" mt={5} gap={3}>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                borderRadius: "0",
                textTransform: "none",
                background: "#fb2e86",
                ":hover": { background: "#fb2e86", boxShadow: "none" },
                boxShadow: "none",
                padding: ".5rem 2rem",
              }}
            >
              Add to Cart
            </Button>
          </Grid>
          <Grid item>
            <Typography
              sx={{ color: "#1A0B5B" }}
              fontSize={14}
              fontWeight={500}
            >
              B&B Italian Sofa
            </Typography>
            <Typography sx={{ color: "#1A0B5B" }} fontSize={14}>
              €32.0
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TrendingProduct;
