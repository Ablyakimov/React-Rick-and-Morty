import React from "react";
import { Grid } from "@mui/material";
import { ICharecter } from "../models/models";
import { CharacterItem } from "./CharacterItem";

interface ICharactersProps {
  characters: ICharecter[];
  openModalHandler: Function;
}

export function Characters({ characters, openModalHandler }: ICharactersProps) {
  return (
    <Grid container spacing={{ lg: 3, md: 2, xs: 2 }}>
      {characters?.map((character) => (
        <Grid item md={3} sm={4} xs={6}>
          <CharacterItem
            key={character.id}
            openModalHandler={openModalHandler}
            character={character}
          />
        </Grid>
      ))}
    </Grid>
  );
}
