import React from "react";
import { CircularProgress } from "@mui/material";

interface ILoadingWrapperProps {
  isLoading: boolean;
  children: JSX.Element | JSX.Element[]; 
}

function LoadingWrapper({ isLoading, children }: ILoadingWrapperProps) {
  return (
    <>
      {isLoading ? (
        <CircularProgress size={100} sx={{ display: "flex", margin: "auto" }} />
      ) : (
        children
      )}
    </>
  );
}
export default LoadingWrapper;
