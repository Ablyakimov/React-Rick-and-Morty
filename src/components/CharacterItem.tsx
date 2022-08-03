import React from "react";
import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";
import { ICharecter } from "../models/models";

interface ICharacterItemProps {
  character: ICharecter;
  openModalHandler: Function;
}

export function CharacterItem({
  character,
  openModalHandler,
}: ICharacterItemProps) {
  return (
    <Card sx={{ maxWidth: 270, maxHeight: 450 }}>
      <CardActionArea onClick={() => openModalHandler(character.id)}>
        <CardMedia
          component="img"
          image={character.image}
          alt={character.name}
        />
        <CardContent>
          <Typography noWrap={true} gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            gender: {character.gender}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
