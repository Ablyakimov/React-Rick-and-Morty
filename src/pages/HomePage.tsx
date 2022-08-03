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
import {
  useGetCharactersQuery,
  useLazyGetCharacterQuery,
} from "../store/rickAndMorty/rickAndMorty.api";
import { FilterCharacter } from "../components/FilterCharacters";
import { ISearch } from "../models/models";
import { Characters } from "../components/Characters";
import { ModalCharacters } from "../components/modalCharacter/ModalCharacter";

export function MainPage() {
  const [search, setSearch] = useState<ISearch>({ page: 1 });
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const { isLoading, isError, data } = useGetCharactersQuery({ ...search });

  const [
    fetchCharacter,
    {
      isFetching: areCharacterIsLoading,
      isError: areCharacterIsError,
      data: fetchedCharacter,
    },
  ] = useLazyGetCharacterQuery();

  const handleChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setSearch((preState) => ({ ...preState, page }));
  };

  const searchHandler = (search: ISearch) => {
    setSearch(() => ({ ...search, page: 1 }));
  };

  const clearSearchHandler = () => {
    setSearch(() => ({ page: 1 }));
  };

  const openModalHandler = (id: number) => {
    setOpenModal(() => true);
    fetchCharacter(id);
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
        {areCharacterIsLoading ? (
          <LinearProgress
            sx={{ position: "fixed", top: 0, left: 0, right: 0 }}
            color="secondary"
          />
        ) : (
          <ModalCharacters
            isError={areCharacterIsError}
            character={fetchedCharacter}
          />
        )}
      </Dialog>
    </Container>
  );
}
