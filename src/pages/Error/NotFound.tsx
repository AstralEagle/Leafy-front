import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error: unknown = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'Unknown error';
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, the page was not found.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}

export default NotFound;