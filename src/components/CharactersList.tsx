import React from "react";
import { Pagination } from "@mui/material";
import { ISearch } from "../models/models";
import { Characters } from "./Characters";
import ErrorWrapper from "./ErrorWrapper";
import LoadingWrapper from "./LoadingWrapper";

interface ICharactersListProps {
	// TODO Find props type
  charactersResponse: any;
  openModalHandler: Function;
  search: ISearch;
  changePaginationPage: (event: React.ChangeEvent<unknown>, page: number) => void;
}

function CharactersList({
  charactersResponse,
  openModalHandler,
  search,
  changePaginationPage,
}: ICharactersListProps) {
  const { isError, isLoading, data } = charactersResponse;
  return (
    <>
      <ErrorWrapper errorMesassage="Somting wrong" isError={isError}>
        <LoadingWrapper isLoading={isLoading}>
          <Characters
            openModalHandler={openModalHandler}
            characters={data?.results!}
          />
          <Pagination
            page={search.page}
            sx={{ pt: 4, pb: 3 }}
            size="large"
            count={data?.info.pages}
            onChange={changePaginationPage}
          />
        </LoadingWrapper>
      </ErrorWrapper>
    </>
  );
}
export default CharactersList;
