import React from "react";
import {
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Filters = () => {
  return (
    <Grid container alignItems="center">
      <Grid item sx={{ paddingRight: "3rem" }} sm>
        <Grid container alignItems="center">
          <Grid item sx={{ paddingRight: "1rem" }}>
            <Typography fontWeight={500} fontSize={16}>
              Filters :
            </Typography>
          </Grid>
          <Grid item>
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Select all"
              labelPlacement="end"
              sx={{ marginRight: "3rem" }}
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Chairs"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Sofas"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Shelves"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Tables"
              labelPlacement="end"
            />
            <Button
              startIcon={<HighlightOffIcon />}
              variant="outlined"
              sx={{ marginLeft: "3rem" }}
              disabled
            >
              Clear filters
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container alignItems="center">
          <Grid item sx={{ paddingRight: "1rem" }}>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField
              variant="standard"
              placeholder="Search"
              sx={{ width: "20rem" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Filters;
