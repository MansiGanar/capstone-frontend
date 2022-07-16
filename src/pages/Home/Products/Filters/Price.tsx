import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

const Price = () => {
  const [state, setState] = React.useState({
    under500: false,
    price500To1000: false,
    price1000To2000: false,
    above2000: false,
  });

  const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      <Typography
        sx={{ fontSize: "1.25rem", color: "#151875", padding: "1rem 0" }}
        fontWeight={700}
      >
        Price
      </Typography>
      <FormGroup>
        <FormControlLabel
          sx={{ color: "#7E81A2" }}
          control={
            <Checkbox
              checked={state.under500}
              onChange={handleChangePrice}
              name="under500"
              sx={{
                color: "#fb2e86",
                "&.Mui-checked": {
                  color: "#fb2e86",
                },
              }}
            />
          }
          label="Under $500"
        />
        <FormControlLabel
          sx={{ color: "#7E81A2" }}
          control={
            <Checkbox
              checked={state.price500To1000}
              onChange={handleChangePrice}
              name="price500To1000"
              sx={{
                color: "#fb2e86",
                "&.Mui-checked": {
                  color: "#fb2e86",
                },
              }}
            />
          }
          label="$500 - $1000"
        />
        <FormControlLabel
          sx={{ color: "#7E81A2" }}
          control={
            <Checkbox
              checked={state.price1000To2000}
              onChange={handleChangePrice}
              name="price1000To2000"
              sx={{
                color: "#fb2e86",
                "&.Mui-checked": {
                  color: "#fb2e86",
                },
              }}
            />
          }
          label="$1000 - $2000"
        />
        <FormControlLabel
          sx={{ color: "#7E81A2" }}
          control={
            <Checkbox
              checked={state.above2000}
              onChange={handleChangePrice}
              name="above2000"
              sx={{
                color: "#fb2e86",
                "&.Mui-checked": {
                  color: "#fb2e86",
                },
              }}
            />
          }
          label="Above $2000"
        />
      </FormGroup>
    </>
  );
};

export default Price;
