import React from "react";
import { useRouteError } from "react-router-dom";

const Errors = () => {
  const error: any = useRouteError();

  return (
    <div className="h-screen bg-gray-100 w-full">
      <div className="container mx-auto">
        <div className="w-full bg-red-100 border border-red-400 rounded-lg px-4 py-5 block">
          <h4>Oops!</h4>
          <p>Sorry, an unexpected error has occurred.</p>
          <em>{error.statusText || error.message}</em>
        </div>
      </div>
    </div>
  );
};

export default Errors;
