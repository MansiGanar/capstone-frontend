import React from "react";
import {
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Card,
  Tooltip,
  IconButton,
  Rating,
  Chip,
  Grid,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const ProductsListItem = () => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="300"
        image="https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
        alt="green iguana"
      />
      <CardContent sx={{ padding: "1rem 2rem" }}>
        <Grid container alignItems="center">
          <Grid item sm>
            <Typography
              fontWeight={500}
              fontSize={22}
              sx={{ marginBottom: ".5rem" }}
            >
              Lorem ipsum dolor
            </Typography>
          </Grid>
          <Grid item sx={{ paddingLeft: "1rem" }}>
            <Rating value={3} readOnly precision={0.5} />
          </Grid>
        </Grid>
        <Typography
          fontWeight={400}
          fontSize={16}
          sx={{ marginBottom: "1rem", marginTop: "1rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </Typography>
        <Typography fontWeight={700} fontSize={18}>
          $ 959
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: "0 2rem 1rem" }}>
        <Tooltip title={"This product is available in our warehouse"}>
          <Chip
            icon={<CheckBoxIcon />}
            label="Available"
            sx={{ padding: "1rem", marginRight: "1rem" }}
          />
        </Tooltip>
        <Tooltip title={"Add to shopping cart"} sx={{ margin: "0 0 0 auto" }}>
          <IconButton>
            <AddShoppingCartIcon sx={{ width: "2rem", height: "2rem" }} />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default ProductsListItem;
