import { Grid, Typography, Button } from "@mui/material";
import React from "react";
import { formatOrderId } from "../../../utils/utils";
import { IOrderHistoryTableRowProps } from "../types";

const OrderHistoryTableRow = ({ orderDetails }: IOrderHistoryTableRowProps) => {
  return (
    <Grid
      container
      alignItems={"center"}
      sx={{ color: "#1D3178" }}
      spacing="1rem"
    >
      <Grid item sm={3}>
        <Typography fontWeight={700} mb={1}>
          {formatOrderId(orderDetails._id)}
        </Typography>
      </Grid>
      <Grid item sm={2}>
        <Typography fontWeight={700} mb={1}>
          {orderDetails.status}
        </Typography>
      </Grid>
      <Grid item sm={2}>
        <Typography fontWeight={700} mb={1}>
          {orderDetails.date}
        </Typography>
      </Grid>
      <Grid item sm={3}>
        <Typography fontWeight={700} mb={1}>
          {`${orderDetails.firstName} ${orderDetails.lastName}`}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          sx={{
            borderRadius: "0",
            textTransform: "none",
            background: "#19D16F",
            ":hover": { background: "#19D16F" },
            padding: "0.7rem",
            marginBottom: "1rem",
          }}
        >
          View
        </Button>
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
          disabled={
            orderDetails.status === "Completed" ||
            orderDetails.status === "Cancelled"
          }
        >
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
};

export default OrderHistoryTableRow;