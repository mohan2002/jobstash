"use client";

import React from "react";
import { ScaleLoader } from "react-spinners";

function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <ScaleLoader color="#BEC1DC" height={35} loading radius={10} width={4} />
    </div>
  );
}

export default Loading;
