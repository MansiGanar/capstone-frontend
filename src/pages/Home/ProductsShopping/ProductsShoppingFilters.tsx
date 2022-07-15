import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React from "react";

const ProductsShoppingFilters = () => {
  const [state, setState] = React.useState({
    kitchen: false,
    bedroom: false,
    bathroom: false,
    homeOffice: false,
    livingRoom: false,
    outDoor: false,
  });

  const handleChangeCategories = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      <Typography
        sx={{ fontSize: "1.25rem", color: "#151875", padding: "1rem 0" }}
      >
        Categories
      </Typography>
      <FormGroup>
        <FormControlLabel
          sx={{ color: "#7E81A2" }}
          control={
            <Checkbox
              checked={state.kitchen}
              onChange={handleChangeCategories}
              name="kitchen"
              sx={{
                color: "#fb2e86",
                "&.Mui-checked": {
                  color: "#fb2e86",
                },
              }}
            />
          }
          label="Kitchen"
        />
        <FormControlLabel
          sx={{ color: "#7E81A2" }}
          control={
            <Checkbox
              checked={state.bedroom}
              onChange={handleChangeCategories}
              name="bedroom"
              sx={{
                color: "#fb2e86",
                "&.Mui-checked": {
                  color: "#fb2e86",
                },
              }}
            />
          }
          label="Bedroom"
        />
        <FormControlLabel
          sx={{ color: "#7E81A2" }}
          control={
            <Checkbox
              checked={state.bathroom}
              onChange={handleChangeCategories}
              name="bathroom"
              sx={{
                color: "#fb2e86",
                "&.Mui-checked": {
                  color: "#fb2e86",
                },
              }}
            />
          }
          label="Bathroom"
        />
        <FormControlLabel
          sx={{ color: "#7E81A2" }}
          control={
            <Checkbox
              checked={state.homeOffice}
              onChange={handleChangeCategories}
              name="homeOffice"
              sx={{
                color: "#fb2e86",
                "&.Mui-checked": {
                  color: "#fb2e86",
                },
              }}
            />
          }
          label="Home office"
        />
        <FormControlLabel
          sx={{ color: "#7E81A2" }}
          control={
            <Checkbox
              checked={state.livingRoom}
              onChange={handleChangeCategories}
              name="livingRoom"
              sx={{
                color: "#fb2e86",
                "&.Mui-checked": {
                  color: "#fb2e86",
                },
              }}
            />
          }
          label="Living Room"
        />
        <FormControlLabel
          sx={{ color: "#7E81A2" }}
          control={
            <Checkbox
              checked={state.outDoor}
              onChange={handleChangeCategories}
              name="outDoor"
              sx={{
                color: "#fb2e86",
                "&.Mui-checked": {
                  color: "#fb2e86",
                },
              }}
            />
          }
          label="Out Door"
        />
      </FormGroup>
    </>
  );
};

export default ProductsShoppingFilters;
