import React from "react";
import { Alert, AlertTitle } from "@mui/material";

interface IErrorWrapperProps {
  errorMesassage: string;
  isError: boolean;
  children: JSX.Element;
}

function ErrorWrapper({
  errorMesassage,
  isError,
  children,
}: IErrorWrapperProps) {
  return (
    <>
      {isError ? (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {errorMesassage}
        </Alert>
      ) : (
        children
      )}
    </>
  );
}
export default ErrorWrapper;
