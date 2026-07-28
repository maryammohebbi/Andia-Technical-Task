import { Spinner } from "@material-tailwind/react";
import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Spinner className="w-8 h-8" />
    </div>
  );
}

export default Loading;
