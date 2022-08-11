import React, { useState } from "react";
import { Container, Dialog } from "@mui/material";
import { useGetCharactersQuery } from "../store/rickAndMorty/rickAndMorty.api";
import { FilterCharacter } from "../components/FilterCharacters";
import { ICharecter, ISearch } from "../models/models";
import { ModalCharacters } from "../components/modalCharacter/ModalCharacter";
import CharactersList from "../components/CharactersList";

export function MainPage() {
  const [search, setSearch] = useState<ISearch>({ page: 1 });
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [modalCharacterSelect, setModalCharacterSelect] =
    useState<ICharecter>();

  const charactersResponse = useGetCharactersQuery({ ...search });

  const changePaginationPage = (
    _: React.ChangeEvent<unknown>,
    page: number
  ): void => {
    setSearch((preState) => ({ ...preState, page }));
  };

  const searchHandler = (search: ISearch): void => {
    setSearch(() => ({ ...search, page: 1 }));
  };

  const clearSearchHandler = (): void => {
    setSearch(() => ({ page: 1 }));
  };

  const openModalHandler = (character: ICharecter): void => {
    setModalCharacterSelect(() => character);
    setOpenModal(() => true);
  };

  const closeModalHandler = (): void => {
    setOpenModal(() => false);
  };

  return (
    <Container>
      <FilterCharacter
        searchHandler={searchHandler}
        clearSearchHandler={clearSearchHandler}
      />
      <CharactersList
        charactersResponse={charactersResponse}
        openModalHandler={openModalHandler}
        search={search}
        changePaginationPage={changePaginationPage}
      />
      <Dialog
        sx={{ p: 3 }}
        maxWidth={"md"}
        open={isOpenModal}
        onClose={closeModalHandler}
      >
        <ModalCharacters character={modalCharacterSelect!} />
      </Dialog>
    </Container>
  );
}
