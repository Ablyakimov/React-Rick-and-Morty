import React from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useInput } from "../hooks/useInput";

interface IFilterCharacterProps {
  searchHandler: Function;
  clearSearchHandler: Function;
}

export function FilterCharacter({
  searchHandler,
  clearSearchHandler,
}: IFilterCharacterProps) {
  const name = useInput("");
  const status = useInput("");
  const gender = useInput("");
  const species = useInput("");
  const type = useInput("");

  const clearAllInputs = () => {
    name.clearInput();
    status.clearInput();
    gender.clearInput();
    species.clearInput();
    type.clearInput();
  };

  return (
    <Grid container spacing={2} sx={{ pb: 4, pt: 3, alignItems: "center" }}>
      <Grid item md={2}>
        <TextField
          size="medium"
          label="Name"
          value={name.value}
          onChange={name.onChange}
        />
      </Grid>
      <Grid item md={2}>
        <TextField
          size="medium"
          label="Type"
          value={type.value}
          onChange={type.onChange}
        />
      </Grid>
      <Grid item md={2}>
        <TextField
          size="medium"
          label="Species"
          value={species.value}
          onChange={species.onChange}
        />
      </Grid>
      <Grid item>
        <FormControl sx={{ width: 150, mr: 2 }}>
          <InputLabel id="status-select-label">Status</InputLabel>
          <Select
            labelId="status-select-label"
            id="status-select"
            value={status.value}
            label="Status"
            onChange={status.onChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"alive"}>Alive</MenuItem>
            <MenuItem value={"dead"}>Dead</MenuItem>
            <MenuItem value={"unknown"}>Unknown</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: 150 }}>
          <InputLabel id="gender-select-label">Gender</InputLabel>
          <Select
            labelId="gender-select-label"
            id="gender-select"
            value={gender.value}
            label="Gender"
            onChange={gender.onChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"genderless"}>Genderless</MenuItem>
            <MenuItem value={"unknown"}>Unknown</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <Button
          size="large"
          variant="contained"
          sx={{ mr: 2 }}
          onClick={() =>
            searchHandler({
              name: name.value,
              status: status.value,
              gender: gender.value,
              species: species.value,
              type: type.value,
            })
          }
        >
          Search
        </Button>
        <Button
          size="large"
          variant="contained"
          onClick={() => {
            clearAllInputs();
            clearSearchHandler();
          }}
        >
          Clear
        </Button>
      </Grid>
    </Grid>
  );
}
