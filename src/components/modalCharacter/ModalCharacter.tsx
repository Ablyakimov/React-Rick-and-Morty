import React from "react";
import { Alert, DialogContent, Grid, Typography } from "@mui/material";
import { ICharecter } from "../../models/models";
import { CharacterName } from "./CharacterName";

interface IModalCharactersProps {
  character: ICharecter | undefined;
  isError: boolean;
}

export function ModalCharacters({ character, isError }: IModalCharactersProps) {
  return (
    <DialogContent
      className={character?.status.toLocaleLowerCase()}
      sx={{ p: 4, minWidth: 400, minHeight: "auto", maxWidth: "100%" }}
    >
      {isError ? (
        <Alert severity="error">Something went wrong</Alert>
      ) : (
        <Grid container spacing={2}>
          <Grid item>
            <img src={character?.image} alt="" />
          </Grid>
          <Grid item>
            <CharacterName
              name={character?.name!}
              gender={character?.gender!}
            />
            <Typography fontSize={26} mb={2}>
              {character?.status} - {character?.species}
            </Typography>
            <Typography fontSize={26} mb={2}>
              <Typography fontSize={26} component="span" fontWeight={700}>
                Last known location:
              </Typography>
              <br /> {character?.location.name}
            </Typography>
            <Typography fontSize={26}>
              <Typography fontSize={26} component="span" fontWeight={700}>
                Origin location:
              </Typography>
              <br /> {character?.origin.name}
            </Typography>
          </Grid>
        </Grid>
      )}
    </DialogContent>
  );
}
