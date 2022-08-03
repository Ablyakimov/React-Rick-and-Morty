import React, { useState } from "react";
import {
  Alert,
  AlertTitle,
  CircularProgress,
  Container,
  Dialog,
  LinearProgress,
  Pagination,
} from "@mui/material";
import { useGetCharactersQuery } from "../store/rickAndMorty/rickAndMorty.api";
import { FilterCharacter } from "../components/FilterCharacters";
import { ICharecter, ISearch } from "../models/models";
import { Characters } from "../components/Characters";
import { ModalCharacters } from "../components/modalCharacter/ModalCharacter";

export function MainPage() {
  const [search, setSearch] = useState<ISearch>({ page: 1 });
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [modalCharacterSelect, setModalCharacterSelect] =
    useState<ICharecter>();

  const { isLoading, isError, data } = useGetCharactersQuery({ ...search });

  const handleChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setSearch((preState) => ({ ...preState, page }));
  };

  const searchHandler = (search: ISearch) => {
    setSearch(() => ({ ...search, page: 1 }));
  };

  const clearSearchHandler = () => {
    setSearch(() => ({ page: 1 }));
  };

  const openModalHandler = (character: ICharecter) => {
    setModalCharacterSelect(() => character)
    setOpenModal(() => true);
  };

  const closeModalHandler = () => {
    setOpenModal(() => false);
  };

  return (
    <Container className="characters">
      <FilterCharacter
        searchHandler={searchHandler}
        clearSearchHandler={clearSearchHandler}
      />
      {isError ? (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Something went wrong
        </Alert>
      ) : (
        <>
          {isLoading ? (
            <CircularProgress
              size={100}
              sx={{ display: "flex", margin: "auto" }}
            />
          ) : (
            <Characters
              openModalHandler={openModalHandler}
              characters={data?.results!}
            />
          )}
          <Pagination
            page={search.page}
            sx={{ pt: 4, pb: 3 }}
            size="large"
            count={data?.info.pages}
            onChange={handleChange}
          />
        </>
      )}

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
