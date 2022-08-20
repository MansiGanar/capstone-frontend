import React from "react";
import { Typography, Grid } from "@mui/material";
import Brands from "../Home/Brands/Brands";
import PageHeader from "../../components/PageHeader/PageHeader";
import FAQForm from "./FAQForm";

const FAQ = () => {
  return (
    <>
      <PageHeader title={"FAQ"} />;
      <Grid container padding={"2rem 15rem"} justifyContent={"center"}>
        <Grid item sm={6}>
          <Typography
            sx={{
              color: "#1D3178",
              fontSize: "2.25rem",
              fontWeight: "500",
              marginBottom: "2rem",
            }}
          >
            General Information
          </Typography>
          <Typography
            sx={{
              color: "#1D3178",
              fontSize: "1.063rem",
              fontWeight: "500",
              padding: "1rem 0",
            }}
          >
            Eu dictumst cum at sed euismood condimentum?
          </Typography>
          <Typography
            sx={{ fontSize: "1rem", color: "#A1ABCC", lineHeight: "1.875rem" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sed tristique mollis vitae, consequat gravida sagittis.
          </Typography>
          <Typography
            sx={{
              color: "#1D3178",
              fontSize: "1.063rem",
              fontWeight: "500",
              padding: "1rem 0",
            }}
          >
            Magna bibendum est fermentum eros.
          </Typography>
          <Typography
            sx={{ fontSize: "1rem", color: "#A1ABCC", lineHeight: "1.875rem" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sed tristique mollis vitae, consequat gravida sagittis.
          </Typography>
          <Typography
            sx={{
              color: "#1D3178",
              fontSize: "1.063rem",
              fontWeight: "500",
              padding: "1rem 0",
            }}
          >
            Odio muskana hak eris conseekin sceleton?
          </Typography>
          <Typography
            sx={{ fontSize: "1rem", color: "#A1ABCC", lineHeight: "1.875rem" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sed tristique mollis vitae, consequat gravida sagittis.
          </Typography>
          <Typography
            sx={{
              color: "#1D3178",
              fontSize: "1.063rem",
              fontWeight: "500",
              padding: "1rem 0",
            }}
          >
            Elit id blandit sabara boi velit gua mara?
          </Typography>
          <Typography
            sx={{ fontSize: "1rem", color: "#A1ABCC", lineHeight: "1.875rem" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sed tristique mollis vitae, consequat gravida sagittis.
          </Typography>
        </Grid>
        <FAQForm />
      </Grid>
      <Brands />
    </>
  );
};

export default FAQ;
