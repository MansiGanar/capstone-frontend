import React from "react";
import { Typography, Grid, Button, TextField } from "@mui/material";
import Brands from "../Home/Brands/Brands";
import PageHeader from "../../components/PageHeader/PageHeader";

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
        <Grid
          item
          sm={6}
          sx={{ padding: "2rem 0 2rem 2rem", background: "#F8F8FD" }}
        >
          <Typography
            sx={{
              marginBottom: "2rem",
              textAlign: "center",
              color: "#1D3178",
              fontSize: "2.25rem",
              fontWeight: "500",
            }}
          >
            Ask a Question
          </Typography>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "1rem", background: "#ffffff" }}
          />
          <TextField
            id="outlined-basic"
            label="Subject"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "1rem", background: "#ffffff" }}
          />
          <TextField
            id="outlined-basic"
            label="Type your message"
            multiline
            rows={6}
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "2rem", background: "#ffffff" }}
          />
          <Button
            variant="contained"
            sx={{
              borderRadius: "0",
              textTransform: "none",
              background: "#FF1788",
              ":hover": { background: "#FF1788" },
              padding: "0.5rem 2rem",
            }}
          >
            Send
          </Button>
        </Grid>
      </Grid>
      <Brands />
    </>
  );
};

export default FAQ;
