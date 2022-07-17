import React from "react";
import {
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Divider,
  Box,
} from "@mui/material";
import PageHeader from "../../components/PageHeader";
import CheckOutProductDetails from "./CheckOutProductDetails";

const CheckOut = () => {
  return (
    <>
      <PageHeader title={"Check out"} />;
      <Grid container padding={"5rem 15rem"}>
        <Grid
          item
          sm={7}
          padding={"2rem"}
          sx={{ background: "#F8F8FD", borderRadius: ".5rem" }}
        >
          <Typography sx={{ color: "#1D3178", fontSize: "1.5rem" }}>
            Checkout
          </Typography>
          <Typography
            sx={{
              color: "#1D3178",
              fontSize: "0.75rem",
              padding: "0 0 1rem 0",
            }}
          >
            Cart/ Information/ Shipping/ Payment
          </Typography>
          <TextField
            id="standard-basic"
            label="Email or mobile phone number"
            variant="standard"
            fullWidth
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "#19D16F",
                  "&.Mui-checked": {
                    color: "#19D16F",
                  },
                }}
              />
            }
            label="Keep me up to date on news and exclusive offers"
            style={{ color: "#8A91AB", marginBottom: "4rem" }}
          />
          <Typography
            sx={{ color: "#1D3178", fontSize: "1.5rem", padding: "1rem 0" }}
          >
            Shipping Address
          </Typography>
          <Grid container>
            <Grid item sm={6} pr={"0.7rem"}>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: "1rem" }}
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: "1rem" }}
              />
            </Grid>
          </Grid>
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "1rem" }}
          />
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "1rem" }}
          />
          <Grid container>
            <Grid item sm={6} pr={"0.7rem"}>
              <TextField
                id="outlined-basic"
                label="Country"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: "1rem" }}
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="outlined-basic"
                label="Postal Code"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: "1rem" }}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            sx={{
              borderRadius: "0",
              textTransform: "none",
              background: "#FF1788",
              ":hover": { background: "#FF1788" },
              padding: "0.7rem 2rem",
              marginTop: "1rem",
            }}
          >
            Continue Shopping
          </Button>
        </Grid>
        <Grid item sm={5} paddingLeft={"5rem"}>
          <CheckOutProductDetails />
          <CheckOutProductDetails />
          <CheckOutProductDetails />
          <CheckOutProductDetails />
          <Box
            sx={{
              background: "#F4F4FC",
              padding: "2rem",
              borderRadius: ".5rem",
            }}
            mt={2}
          >
            <Grid container>
              <Grid item sm>
                <Typography fontSize={18} sx={{ color: "#1D3178" }}>
                  Subtotal:
                </Typography>
              </Grid>
              <Grid item>
                <Typography fontSize={18} sx={{ color: "#1D3178" }}>
                  £219.00
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ mt: 1, mb: 4 }} />
            <Grid container>
              <Grid item sm>
                <Typography fontSize={18} sx={{ color: "#1D3178" }}>
                  Totals:
                </Typography>
              </Grid>
              <Grid item>
                <Typography fontSize={18} sx={{ color: "#1D3178" }}>
                  £219.00
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ mt: 1, mb: 3 }} />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "#19D16F",
                    "&.Mui-checked": {
                      color: "#19D16F",
                    },
                  }}
                />
              }
              label="Shipping & taxes calculated at checkout"
              style={{ color: "#8A91AB", marginBottom: "1.25rem" }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                borderRadius: ".15rem",
                textTransform: "none",
                background: "#19D16F",
                ":hover": { background: "#19D16F" },
                padding: "0.7rem",
                marginBottom: "1rem",
              }}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CheckOut;
