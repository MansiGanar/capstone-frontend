import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  Grid,
  Rating as MuiRating,
} from "@mui/material";

const Rating = () => {
  const [state, setState] = React.useState({
    twoAndAbove: false,
    threeAndAbove: false,
    fourAndAbove: false,
  });

  const handleChangeRating = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      <Typography
        sx={{
          fontSize: "1.25rem",
          color: "#151875",
          padding: "1rem 0",
        }}
        fontWeight={700}
      >
        Rating
      </Typography>
      <FormGroup>
        <Grid container alignItems="center">
          <Grid item>
            <FormControlLabel
              sx={{ color: "#7E81A2", mr: 1 }}
              control={
                <Checkbox
                  checked={state.twoAndAbove}
                  onChange={handleChangeRating}
                  name="twoAndAbove"
                  sx={{
                    color: "#fb2e86",
                    "&.Mui-checked": {
                      color: "#fb2e86",
                    },
                    paddingRight: 0,
                  }}
                />
              }
              label=""
            />
          </Grid>
          <Grid item>
            <MuiRating name="read-only" value={2.5} readOnly precision={0.5} />
          </Grid>
        </Grid>
        <Grid container alignItems="center">
          <Grid item>
            <FormControlLabel
              sx={{ color: "#7E81A2", mr: 1 }}
              control={
                <Checkbox
                  checked={state.threeAndAbove}
                  onChange={handleChangeRating}
                  name="threeAndAbove"
                  sx={{
                    color: "#fb2e86",
                    "&.Mui-checked": {
                      color: "#fb2e86",
                    },
                    paddingRight: 0,
                  }}
                />
              }
              label=""
            />
          </Grid>
          <Grid item>
            <MuiRating name="read-only" value={3.5} readOnly precision={0.5} />
          </Grid>
        </Grid>
        <Grid container alignItems="center">
          <Grid item>
            <FormControlLabel
              sx={{ color: "#7E81A2", mr: 1 }}
              control={
                <Checkbox
                  checked={state.fourAndAbove}
                  onChange={handleChangeRating}
                  name="fourAndAbove"
                  sx={{
                    color: "#fb2e86",
                    "&.Mui-checked": {
                      color: "#fb2e86",
                    },
                    paddingRight: 0,
                  }}
                />
              }
              label=""
            />
          </Grid>
          <Grid item>
            <MuiRating name="read-only" value={4.5} readOnly precision={0.5} />
          </Grid>
        </Grid>
      </FormGroup>
    </>
  );
};

export default Rating;
