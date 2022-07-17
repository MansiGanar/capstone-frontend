import React from "react";
import {
  Typography,
  Grid,
  Divider,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  TextField,
} from "@mui/material";

const CartPaymentSummary = () => {
  return (
    <>
      <Typography
        fontSize={20}
        fontWeight={700}
        sx={{ color: "#1D3178" }}
        mb={6}
        textAlign="center"
      >
        Cart Total
      </Typography>
      <Box
        sx={{ background: "#F4F4FC", padding: "2rem", borderRadius: ".5rem" }}
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
      <Typography
        fontSize={20}
        fontWeight={700}
        sx={{ color: "#1D3178" }}
        mb={6}
        textAlign="center"
        mt={6}
      >
        Calculate Shipping Cost
      </Typography>
      <Box
        sx={{ background: "#F4F4FC", padding: "2rem", borderRadius: ".5rem" }}
      >
        <TextField label="Country" variant="standard" fullWidth />
        <TextField
          label="City"
          variant="standard"
          fullWidth
          sx={{ margin: "1rem 0" }}
        />
        <TextField label="Post Code" variant="standard" fullWidth />
        <Button
          variant="contained"
          sx={{
            borderRadius: ".15rem",
            textTransform: "none",
            background: "#FF1788",
            ":hover": { background: "#FF1788" },
            padding: "0.7rem",
            marginBottom: "1rem",
            marginTop: "2.5rem",
          }}
        >
          Calculate Shipping
        </Button>
      </Box>
    </>
  );
};

export default CartPaymentSummary;
