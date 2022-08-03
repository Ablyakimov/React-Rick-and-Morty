import React from "react";
import { Grid, Typography } from "@mui/material";
import { EGender } from "../../models/models";
import { GenderIcon } from "./GenderIcon";

interface ICharacterNameProps {
  name: string;
  gender: EGender;
}

export function CharacterName({ gender, name }: ICharacterNameProps) {
  return (
    <Grid container spacing={2} sx={{ display: "flex", alignItems: "center" }}>
      <Grid item>
        <Typography
          fontSize={42}
          sx={{ display: "flex", alignItems: "center" }}
        >
          {name}
        </Typography>
      </Grid>
      <Grid item>
        <GenderIcon gender={gender} />
      </Grid>
    </Grid>
  );
}
